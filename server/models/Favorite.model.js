const mongoose = require('mongoose') //引入mongoose
const Schema = mongoose.Schema; //实例化一个Schema
const Favoriteschema = new Schema({ //创建一个schema
    //收藏夹字段有 用户id、题库id、题目id、收藏时间等。
    user_id: {
        type: String,
        required: true
    },
    item_id: {
        type: String,
        required: true
    },
    question_id:{
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

module.exports = mongoose.model('Favorite', Favoriteschema)