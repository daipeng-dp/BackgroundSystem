const mongoose = require('mongoose') //引入mongoose
const Schema = mongoose.Schema; //实例化一个Schema
const Commentschema = new Schema({ //创建一个schema
    //评论字段有 用户id、题库或题目id、评论内容、评论时间等。
    user_id: {
        type: String,
        required: true
    },
    item_question_id: {
        type: String,
        required: true
    },
    content:{
        type:String,
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

module.exports = mongoose.model('Comment', Commentschema)