var fs = require('fs');
var config = require('./index');
var _ = require('lodash');
var util = require('util');
var path = require('path');
var swig = require('swig');
var moment = require('moment');
var crypto = require('crypto');

// 配置模板加载路径
swig.setDefaults({
  loader: swig.loaders.fs(path.dirname(__dirname)),
  cache: process.env.NODE_ENV === 'production' ? 'memory' : false,
});

// 添加静态版本控制
var versions = {};
swig.setFilter('version', function(input) {
  if (!versions[input]) {
    var file = path.join(config.static, String(input).replace('/static/', ''));
    try {
      var text = fs.readFileSync(file).toString();
      var version = crypto.createHash('md5').update(text).digest('hex').substring(0, 4).toUpperCase();
      var extname = path.extname(file);
      // 随机数后缀不需要重写路径
      // versions[input] = util.format('%s?$%s$%s', input, version, extname);
      // 需要配合静态路径重写路由
      versions[input] = util.format('%s/%s.v.%s%s', path.dirname(input), path.basename(input, extname), version, extname);
    } catch (e) {
      var extname = path.extname(input);
      versions[input] = util.format('%s?$%s$%s', input, Date.now(), extname);
    }
  }

  return versions[input];
});
