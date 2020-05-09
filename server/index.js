const express = require('express')
const app = new express()

require('./database/db')(app) // 引入数据库
require('./routes/admin/index')(app) // 引用后端路由，调用该函数，并且传递参数app

// 使用中间件
app.use(require('cors')()) // 跨域中间件
app.use(express.json()) // req.ody使用

// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     res.header('Content-Type', 'application/json;charset=utf-8');
//     res.header("Access-Control-Allow-Credentials", "true")
//     next();
// });

//设置跨域请求
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });


app.listen(8888, () => {
    // 服务器启动之后做什么， 服务器是8888端口
    console.log('running........')
})
