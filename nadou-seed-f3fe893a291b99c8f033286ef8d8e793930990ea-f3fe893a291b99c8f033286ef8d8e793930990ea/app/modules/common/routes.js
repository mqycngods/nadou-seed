var Router = require('koa-router');
var router = module.exports = new Router();
var service = require('./service');
var config = require('../../config');
var fs = require('fs');
var _ = require('lodash');

// // proxy
// router.all(/\/proxy\/(.+)/, function*(next) {
//   var data = yield service.proxyRequest({
//     url: config.whost + this.path.replace('/proxy', ''),
//     method: this.method,
//     qs: this.query,
//     form: this.request.body
//   });
//   this.body = data;
// });

// proxy
router.all(/\/proxy\/(.+)/, function*(next) {
  var data = yield service.proxyRequest({
    url: "http://10.153.135.111" + this.path.replace('/proxy', ''),
    method: this.method,
    qs: this.query,
    form: this.request.body
  });
  this.body = data;
});

// proxy
router.all(/\/proxy-body\/(.+)/, function*(next) {
  var data = yield service.ajaxs({
    url: "http://10.153.135.111" + this.path.replace('/proxy-body', ''),
    form: this.request.body.data
  });
  this.body = this.render(200, data);
});
