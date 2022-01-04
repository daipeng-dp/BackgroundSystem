# BackgroundSystem
题库后端项目

## 项目运行
// 安装后端依赖
cd server
npm run install

// 开启后端服务
cd server
node run dev#开发环境启动
node run start#生产环境启动

// 更新接口文档
node run doc


之后浏览器打开localhost:3000 即可访问，如果依赖安装部分出现了问题，可以使用以下命令手动处理：

// 安装后端依赖
cd server
npm run install

// 数据库相关
在plugins/db.js
```
module.exports = mongoose;
 //先引入mongoose模块
 var mongoose = require("mongoose");
 //连接数据库服务器
 mongoose.connect('mongodb://127.0.0.1:27017/testsystem', {
     useNewUrlParser: true,
     useUnifiedTopology: true
 }, function (error) {
     if (error) {
         console.log("数据库连接失败")
     } else {
         console.log("数据库连接成功")
     }
 })
 //导出
 module.exports = mongoose;
```

!!!注意
你的电脑上必须安装了mongoDB，并且已经启动了服务。
