const mongoose = require('mongoose') //引入mongoose
const Schema = mongoose.Schema; //实例化一个Schema
const Itemschema = new Schema({ //创建一个schema
    //题库字段有 标题和标签
    title: {
        type: String,
        required: true
    },
    label: {
        type: String,
        //required: false
    }
})

module.exports = mongoose.model('Item', Itemschema)