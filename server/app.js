//模块引入
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//引入跨域模块
var cors = require('cors');
var bodyParser = require('body-parser');


// 利用文件来拆分路由的规模
var indexRouter = require('./routes/index');
var userRouter = require('./routes/Android/user');
var itemRouter=require('./routes/Android/item');
var commentRouter=require('./routes/Android/comment');
var favoriteRouter=require('./routes/Android/favorite');
var questionRouter=require('./routes/Android/question');
var wrongRouter=require('./routes/Android/wrong');


var app = express();

//引入数据库
require('./plugins/db')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//注册模块
//extended:false 不使用第三方模块处理参数，使用Nodejs内置模块querystring处理
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
//注册跨域模块
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', userRouter);
app.use('/api/items',itemRouter);
app.use('/api/comments',commentRouter);
app.use('/api/favorites',favoriteRouter);
app.use('/api/questions',questionRouter);
app.use('/api/wrongs',wrongRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
