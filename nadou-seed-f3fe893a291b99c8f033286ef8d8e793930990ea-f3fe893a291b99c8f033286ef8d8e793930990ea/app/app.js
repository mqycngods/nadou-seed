var koa = require('koa');
var _ = require('lodash');
var util = require('util');
var path = require('path');
var swig = require('swig');
var koaBody = require('koa-body');
var minifier = require('koa-html-minifier');
var assets = require('koa-static-cache');
var config = require('./config');
var request = require('request');
var support = require('./support');
var service = require('./modules/common/service');
var compose = require('koa-compose');
var fs = require('fs');
var cluster = require('cluster');
var cpus = require('os').cpus();
var logger = require('./support/logger');
// 加载swig过滤器
require('./config/filter');

var app = module.exports = koa();

// 访问静态资源 版本号防缓存
app.use(compose([
  function*(next) {
    if (this.path.indexOf('/static/') === 0) {
      this.path = this.path.replace(/.v.[\d\w]+/i, '');
    }
    yield* next;
  },
  assets(config.static, {
    maxAge: 365 * 24 * 60 * 60,
    gzip: true,
    prefix: '/static'
  })
]));

// // 去除HTML页面中的换行和空白
// app.use(minifier({
//   minifyJS: true,
//   minifyCSS: true,
//   collapseWhitespace: true,
//   keepClosingSlash: true,
//   removeComments: true,
//   processScripts: ['text/swig-template']
// }));

// 解析form
app.use(koaBody({
  strict: false,
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '../upload')
  }
}));

// 设置模板引擎
app.use(function*(next) {
  // 渲染文件或返回JSON
  this.render = function(name) {
    // 构造数据
    var data = {};

    // 字符串处理
    if (_.isString(arguments[1])) {
      data.message = arguments[1];
    }
    // 合并数据
    else {
      _.merge.apply(_, [data].concat(Array.prototype.splice.call(arguments, 1)));
    }

    // 返回JSON
    if (_.isNumber(name)) {
      return {
        code: name,
        data: data,
      };
    }

    // 返回页面
    if (/^[^./]/i.test(name)) {
      var folder = path.dirname(support.callsite()[1].getFileName());
      name = path.resolve(folder, name);
    }

    // 服务器时间
    data.now = data.now || Date.now();

    return swig.renderFile(name, data);
  };

  // 渲染模板
  this.renderTempl = function(templ, data) {

    _.merge.apply(_, [data].concat(Array.prototype.splice.call(arguments, 1)));

    return swig.render(templ, {
      locals: data,
      cache: false,
      filename: data.filename,
    });
  };

  // 兼容 可删除
  this.template = {
    render: this.render.bind(this)
  };

  yield next;
});

// 全局错误处理
app.use(function*(next) {
  var error = null;
  try {
    logger.info('Request:', {
      url: this.request.url,
      ip: this.request.headers['x-real-ip'],
    });

    yield* next;
  } catch (e) {
    error = e;
    //this.status = e.status || 500;
  } finally {
    this.status = this.status === 405 ? 404 : this.status;
    if (this.status !== 200) {
      // 打印400及以上的错误日志
      if (this.status >= 400 || error) {
        logger.error(error || this.status, {
          url: this.request.url,
          ip: this.request.headers['x-real-ip'],
        });
      }
      if (this.status === 404 || error) {
        var mime = this.accepts(['json', 'html']);
        if (mime === 'json') {
          this.body = this.render(this.status, this.status === 404 ? '抱歉，服务未找到' : '服务器异常，请稍后再试');
          this.status = 200;
        } else {
          this.body = this.render(this.status === 404 ? config.errPage[404] : config.errPage[500]);
        }
      } else if (this.status === 403) {
        this.body = this.render(config.errPage[403]);
      }
    }
  }
});

// 遍历目录加载路由模块
support.walk(__dirname).forEach(function(path) {
  if (/\broutes\.js$/.test([path])) {
    var router = require(path);
    app.use(router.routes());
    app.use(router.allowedMethods());
  }
});

//app.io.use();

// 启动服务器
if (cluster.isMaster) {
  for (var i = 0; i < cpus.length; i++) {
    cluster.fork();
  }
} else {
  app.listen(config.port, function() {
    console.log('clustor worker %d started, pid is %d, listening on port: %d', cluster.worker.id, process.pid, config.port);
  });

}
