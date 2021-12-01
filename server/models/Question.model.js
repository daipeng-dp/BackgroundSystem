const mongoose = require('mongoose') //引入mongoose
const Schema = mongoose.Schema; //实例化一个Schema
const Questionschema = new Schema({ //创建一个schema
    //问题字段有 问题描述、问题答案、问题解析和问题类型等。
    problem: {
        type: String,
        required: true
    },
    answer:{
        type:String,
        required: true
    },
    analysis:{
        type:String,
        //required: true
    },
    type:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Question', Questionschema)