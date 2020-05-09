// 后端路由  默认导出一个函数
module.exports = app => {
    const express = require('express')
    // express的子路由，使用子路由就用这个
    const router = express.Router()
    const Category = require('../../models/Category')


    router.get('/get',  (req, res) => {
        res.send('hjj') // 发送数据给客户端
    });
    router.get('/categories',  (req, res) => {
        res.send('hjj') // 发送数据给客户端
    });
    router.post('/categories', async (req, res) => {
        // 创建数据使用 Category.create方法  要想使用req.body需要在外层index.js引入
        const model = await Category.create(req.body, (err, small) => {
            // if (err) return handleError(err);
            if (err) return console.log(err)
        })
        console.log(model)
        res.send(model) // 发送数据给客户端
    });

    app.use('/admin/api', router)
}