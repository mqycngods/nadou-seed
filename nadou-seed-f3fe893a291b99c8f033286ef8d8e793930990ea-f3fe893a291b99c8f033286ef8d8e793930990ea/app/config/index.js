var path = require('path');
var helper = require('../support/helper');

// 尝试加载个性化配置
var environment = {};
try {
  environment = require('../../config');
} catch (e) {
  console.log('服务环境未指定，默认使用线上正式环境');
}

module.exports = helper.merge({
  // 静态目录
  static: path.join(__dirname, '../../static/src'),

}, environment);
