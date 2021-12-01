// //引入node-xlsx解析excel模块
var xlsx = require('node-xlsx');
const question = require('../models/Question.model') //问题module

// 解析得到文档中的所有 sheet
var sheets = xlsx.parse('C:\\Users\\Lenovo\\Desktop\\file\\Android\\AndroidBackstage\\BackgroundSystem\\server\\excel\\2019.xlsx');

//console.log(sheets[0].data);

const problem = []; //题干
const answer = []; //答案
const analysis = []; //解析
const type = []; //类型


var Qdata = [];
// 遍历 sheet
sheets.forEach(function (sheet) {
    //console.log(sheet['name']);
    // 读取每行内容

    //console.log(sheet['data'][0]);
    for (var rowId in sheet['data']) {
        var row = sheet['data'][rowId];
        //console.log(row);
        //console.log(sheet['data'][rowId][0]);
        var pr = [sheet['data'][rowId][0],
            '选项 A' + sheet['data'][rowId][2],
            '选项 B' + sheet['data'][rowId][3],
            '选项 C' + sheet['data'][rowId][4],
            '选项 D' + sheet['data'][rowId][5],
            '选项 E' + sheet['data'][rowId][6],
            '选项 F' + sheet['data'][rowId][7],
            '选项 G' + sheet['data'][rowId][8],
            '选项 H' + sheet['data'][rowId][9]
        ];
        var p = pr.toString();
        Qdata.push({
            problem: p,
            answer: sheet['data'][rowId][10],
            analysis: sheet['data'][rowId][11],
            type: sheet['data'][rowId][1]
        });
        //console.log(pr);
    }
});
//console.log(Qdata);

// //引入Mongodb
// const {MongoClient} = require("mongodb")

// //定义数据库连接的地址
// const url = "mongodb://127.0.0.1:27017"

// //定义要操作的数据库
// const dbName = "testsystem"

// //实例化MongoClient 传入数据库连接地址,加入第二个参数防止后期不被支持
// const client = new MongoClient(url,{ useNewUrlParser: true,  useUnifiedTopology: true })

// //连接数据库
// client.connect((err) => {
//   if(err){
//     console.log(err);
//     return
//   }
//   console.log("数据库连接成功");
//   const db = client.db(dbName);
//   db.collection("testsystem").insertMany(Qdata,(err,r)=>{
//     db.close();
//   });
// })
//question.insertMany(Qdata);

// for (var q in Qdata) {
//     console.log(Qdata[q]);
//     question.insertMany(Qdata[q]).then(function () {
//         console.log("Data inserted") // Success 
//     }).catch(function (error) {
//         console.log(error) // Failure 
//     });
// }










// 引入模块
const MongoClient = require('mongodb').MongoClient;

// MongoDB 服务器的地址
const url = 'mongodb://localhost:27017';

// 目标数据库的名字
const dbname = 'testsystem';

// 创建 MongoDB 客户端
const client = new MongoClient(url);

// 让客户端连接上服务器
client.connect(function(err) {
    if (err) throw err;

    console.log("成功连接到 MongoDB 服务器!");

    // 创建数据库实例
    const db = client.db(dbname);


    // 获取 'usersInfo' 集合的实例对象.
    const collection = db.collection('questions');

    // 插入单个用户的信息
    collection.insertMany(Qdata, function(err, result) {
        console.log(result);
        if (err) throw err;

        client.close();
    })

    // 断开连接 
    //client.close();
});