module.exports = {

  // 服务端口
  port: 3444,
  // 日志
  log: {
    file: '/Users/skua/workstation/blog/logs/mobile.log', // INFO日志文件位置
    errorfile: '/Users/skua/workstation/blog/logs/mobile-error.log', // ERROR日志文件位置
  },

  //domain
  domain: "https://orz-i.com",

  //是否线上环境
  //isOnline: false,

  //线上环境
  isOnline: true,

  //报错页面

  errPage: {
    "404": "../blog/modules/common/templates/404.html",
    "500": "../blog/modules/common/templates/500.html"
  },

};
