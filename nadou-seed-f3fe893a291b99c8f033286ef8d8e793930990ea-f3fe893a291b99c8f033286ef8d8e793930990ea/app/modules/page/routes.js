require('./filter');
var _ = require('lodash');
var Router = require('koa-router');
var service = require('./service');
var config = require('../../config');
var Service = require('../page/service');

var router = module.exports = new Router();

router.get('/page', function*(next) {
  this.body = this.render('templates/index.html');
});

router.get('/page/:id', function*(next) {
  console.log(this.params.id)
  this.body = this.render('templates/index.html');
});


router.get('/ajax/getList', function*(next) {
var self = this;
  console.log(self.query)
  var data = yield Service.getList();
  this.body = this.render(200, data);
});

router.post('/ajax/savePage', function*(next) {
  var form = this.request.body;
  console.log(form)
  var self = this;
  var data = yield Service.savePage(form);
  this.body = this.render(200, data);
});
