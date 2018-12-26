

#config 文件需要 独立配置

在local/config.js中 配置


```js
module.exports = {
  // 服务端口
  port: 8888,
    // 日志
  log: {
    file: '/data/logs/mobile.log', // INFO日志文件位置
    errorfile: '/data/logs/mobile-error.log', // ERROR日志文件位置
  },
  //微信
  wxconfig:{
  	appid : "wx*****4****", //appid
    secret: "4ebe*********2c", // 秘钥
  },
    //domain
  domain:"http://orz-i.com",
    // 数据库
  database: {
    host: ' ',
    port: ' ',
    username: ' ',
    password: ' ',
    dbname: ' ',
    dialect: 'mysql',
  },

    //是否线上环境
  isOnline: false,

  //报错页面

  errPage: {
    "404": "../orz-i/modules/common/templates/404.html",
    "500": "../orz-i/modules/common/templates/500.html"
  }

}
```

建议使用pm2做守护进程 ，挂了自己会重启

node run.js 启动项目


