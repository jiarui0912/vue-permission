const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const adminLogin = require('./data/admin_login.json')
const adminPermission = require('./data/admin_permission.json')
const vipLogin = require('./data/vip_login.json')
const vipPermission = require('./data/vip_permission.json')
const url = require("url");

// 跨域配置
app.use(cors());
// 允许post接收参数
app.use(bodyParser.urlencoded({
  extended: true
}))

// 通过username判断是谁登录的
app.post("/api/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (username && password) {
    // 管理员权限的话
    if (username === 'admin') {
      res.send(
        adminLogin
      )
    } else {
      // 非管理员权限的话
      res.send(
        vipLogin
      )
    }
  } else {
    res.send({
      status: 400,
      msg: '用户名或密码错误'
    })
  }
})


app.get("/api/permission", (req, res) => {
  const username = url.parse(req.url, true).query.username;
  if (username === 'admin') {
    res.send(adminPermission)
  } else {
    res.send(vipPermission)
  }
})


app.listen(3300, () => {
  console.log(3300);
})