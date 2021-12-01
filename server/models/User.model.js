const mongoose = require('mongoose') //引入mongoose
const Schema = mongoose.Schema; //实例化一个Schema
const Userschema = new Schema({ //创建一个schema
    //用户字段有 姓名，邮箱，密码，头像
    name: {
        type: String,
        required: true,
        unique:true //字段是否唯一
    },
    emil: {
        type: String,
        //required: true
    },
    password: {
        type: String,
        //required: true
        set(val){
            // 通过bcryptjs对密码加密返回值 第一个值返回值， 第二个密码强度
            return require('bcrypt').hashSync(val,10)
        }
    },
    avatar: {
        type: String,
        //required: false
    }
})

module.exports = mongoose.model('User', Userschema)