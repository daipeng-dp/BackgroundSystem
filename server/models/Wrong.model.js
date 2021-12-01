const mongoose = require('mongoose') //引入mongoose
const Schema = mongoose.Schema; //实例化一个Schema
const Wrongschema = new Schema({ //创建一个schema
    //错题字段有 用户id、问题id、创建时间
    user_id: {
        type: String,
        required: true
    },
    question_id: {
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    updateTime: {
        type: Date,
        default: Date.now
    }
}, 
{
    versionKey: false,
    timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
})

module.exports = mongoose.model('Wrong', Wrongschema)