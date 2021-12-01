const mongoose = require('mongoose') //引入mongoose
const Schema = mongoose.Schema; //实例化一个Schema
const Codeschema = new Schema({ //创建一个schema
    //用户字段有 姓名，邮箱，密码，头像
    emil: {
        type: String,
        //required: true
    },
    code: {
        type: String,
        //required: true
    }
})

module.exports = mongoose.model('Code', Codeschema)