// 数据库专用
module.exports = app => {
    const mongoose = require('mongoose')
    // vue-node-server 数据库名称  27017默认数据库接口（最小配置），连接失败可以尝试127.0.0.1
    mongoose.connect('mongodb://127.0.0.1:27017/test', {
        useNewUrlParser: true, // 必写
        useUnifiedTopology: true
    })
}