var request = require('../../support').request;
var config = require('../../config');

// 通用代理
exports.proxyRequest = function(options) {
  return request(options, false);
};

// 通用代理
exports.ajaxs = function(param) {
  return request({
    method: 'post',
    url: param.url,
    gzip: true,
    timeout: 20000,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(param.form)
  }).then(function(res) {
    // 不返回res会丢失pagesize
    var data = res;
    return data;
  });
};
