/*
* 包含n个操作数据库集合的Model模块
* */

// 1.1. 引入 mongoose
const mongoose = require('mongoose');
// 1.2. 连接指定数据库(URL 只有数据库是变化的)
mongoose.connect('mongodb://localhost/kexiedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// 1.3. 获取连接对象
const conn = mongoose.connection;
// 1.4. 绑定连接完成的监听(用来提示连接成功)
conn.on('connected', () => {
    console.log('db connect success~~')
});

exports.mongoose = mongoose;
