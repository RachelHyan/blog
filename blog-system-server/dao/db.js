const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/blog',()=>{
    console.log('blog 数据库连接成功');
})