//user.js
//用于longin&改查
const express = require('express');
const router = express.Router(); //实例化一个路由
const User = require('../../models/User.model') //用户module
var bcrypt = require("bcrypt"); //加密模块
// const Code = require("../../models/Code.model"); // 验证码数据库模型
// const nodemailer = require("nodemailer"); // 邮件发送模块
// const smtpTransport = require("nodemailer-smtp-transport");
var salt = bcrypt.genSaltSync(10); //设置加密强度

//以下为用户操作接口

/**
 * @api {post} /api/users/code 发送验证码
 * @apiDescription 这是个为指定手机号发送验证码的接口
 * @apiName code
 * @apiGroup User
 * @apiParam {number} mobile 手机号
 * @apiSuccess {json} result 验证码发送成功后的消息
 * @apiExample Example usage:
 * {
 *      "mobile": "18154786352"
 * }
 * @apiSuccessExample {json} Success-Response:
 * {
 * 
 * }
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiSampleRequest http://localhost:3000/api/users/code
 * @apiVersion 0.0.0
 */
router.post('/code', (req, res) => {
    // const user = {
    //     // 获取邮箱验证码
    //     emailCode: async (req, res) => {
    //       /*邮件发送的基本配置*/
    //       const transport = nodemailer.createTransport(
    //         smtpTransport({
    //           host: "smtp.163.com", // 服务,这里使用的是163邮箱
    //           port: 465, // smtp端口，默认就是此 端口
    //           secure: true,
    //           auth: {
    //             user: "daipeng0001@.com", //发件人邮箱，即你的邮箱
    //             pass: "miqnmrankttfdfbh", // SMTP授权码,需要邮箱设置中获取
    //           },
    //         })
    //       );
    //       /* 生成验证码 */
    //       const randomFns = () => {
    //         // 生成6位随机数
    //         let code = "";
    //         for (let i = 0; i < 6; i++) {
    //           code += parseInt(Math.random() * 10);
    //         }
    //         return code;
    //       };
    //       const regEmail =
    //         /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; //验证邮箱正则

    //       /* 发送验证码 */
    //       let EMAIL = req.body.email;
    //       if (regEmail.test(EMAIL)) {
    //         let code = randomFns();
    //         transport.sendMail(
    //           {
    //             from: "lhqhacker@163.com", // 发件邮箱
    //             to: EMAIL, // 收件列表
    //             subject: "验证你的电子邮件", // 标题
    //             html: `
    //               <p>你好！</p>
    //               <p>您正在注册题库账号</p>
    //               <p>你的验证码是：<strong style="color: #ff4e2a;">${code}</strong></p>
    //               <p>***该验证码10分钟内有效***</p>`, // html 内容
    //           },
    //           function (error, data) {
    //             if (error) {
    //               transport.close(); // 如果没用，关闭连接池
    //             }
    //           }
    //         );

    //         /* 存储验证码到数据库中 */
    //         const e_mail = EMAIL;
    //         await Code.deleteMany({ e_mail });
    //         const [data] = await Code.insertMany({ e_mail, code: code });
    //         setTimeout(async () => {
    //           //10分钟后失效，即删除验证码
    //           await Code.deleteMany({ e_mail });
    //         }, 1000 * 60 * 10);
    //         res.json(res.setUnifyResFormat(null, "00000", "邮件发送成功"));
    //       } else {
    //         res.json(res.setUnifyResFormat(null, "E0001", "邮件格式错误"));
    //       }
    //     },
    //   };
})


/**
 * @api {post} /api/users/register 用户注册
 * @apiDescription 用户注册
 * @apiName register
 * @apiGroup User
 * @apiParam {string} name 用户名
 * @apiParam {number} emil 邮箱
 * @apiParam {string} password 密码
 * @apiparam {number} code 验证码
 * @apiSuccess {json} result 注册成功后的信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {
 * {
  "message": "注册成功",
  "user": {
    "name": "gongwuh",
    "emil": "gongwuhu@qq.com",
    "password": "$2b$10$j/GdQy.ZH7PA0aYmTPAV6uDyZVo8OkcOk.FzEIclCxM14Zn9H7Du2",
    "_id": "61a35d040b1042de431ff186",
    "__v": 0
  }
}
 * }
 * @apiErrorExample {json} Error-Response:
 * {
 * {
  "message": "输入错误",
  "err": {
    "index": 0,
    "code": 11000,
    "keyPattern": {
      "name": 1
    },
    "keyValue": {
      "name": "gongwuhui"
    }
  }
}
 * }
 * @apiSampleRequest http://localhost:3000/api/users/register
 * @apiVersion 0.0.0
 */
router.post('/register', (req, res) => {
    //查询数据库中是否有邮箱
    User.findOne({
            emil: req.body.emil
        })
        .then(user => {
            //如果邮箱已经被注册，则返回错误码及文字提示
            if (user) {
                return res.status(200).json({
                    message: '邮箱已被注册'
                })
            } else {
                //如果没有，就创建用户
                User.create(req.body, (err, user) => {
                    if (err) {
                        //res.json(err);
                        return res.status(200).json({
                            message: "输入错误",
                            err: err
                        })
                    } else {
                        //res.json(user);
                        return res.status(200).json({
                            message: "注册成功",
                            user: user
                        })
                    }
                });
            }
        })
})


/**
 * @api {post} /api/users/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup User
 * @apiParam {string} name 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {json} result 登录成功后的信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {
 * {
  "result": {
    "_id": "61a34bd7fcb9d513dfcfd261",
    "name": "gongwuhui",
    "emil": "gongwuhui@qq.com",
    "password": "$2b$10$.5AaipqRI.a3fEL5aaHBKOi0edvp5TE8l2xsp4qPFDAbCX6h9YkeC",
    "__v": 0
  },
  "message": "登录成功"
}
 * }
 * @apiErrorExample {json} Error-Response:
 * {
 * "message": "密码无效"
 * }
 * {
 * "message": "用户不存在"
 * }
 * @apiSampleRequest http://localhost:3000/api/users/login
 * @apiVersion 0.0.0
 */
router.post('/login', (req, res) => {
    User.findOne({
            name: req.body.name
        })
        .then(user => {
            if (!user) {
                return res.status(200).send({
                    message: "用户不存在"
                })
            } else {
                let isPwdVaild = bcrypt.compareSync(req.body.password, user.password)
                if (!isPwdVaild) {
                    return res.status(200).send({
                        message: "密码无效"
                    })
                }
                return res.status(200).send({
                    result: user,
                    message: "登录成功"
                })
            }
        })

})


/**
 * @api {post} /api/users/find 用户查询
 * @apiDescription 按照用户name查询用户信息
 * @apiName find
 * @apiGroup User
 * @apiParam {string} name 用户名
 * @apiSuccess {json} result 登录成功后的信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/find', (req, res) => {
    User.find({
            name: req.body.name
        })
        .then(user => {
            //res.json(user);
            console.log(user)
            return res.status(200).send({
                message: user
            })
        })
        .catch(err => {
            res.json(err);
        });
})


/**
 * @api {post} /api/users/update 用户更新
 * @apiDescription 更新用户信息
 * @apiName update
 * @apiGroup User
 * @apiParam {string} id 用户id
 * @apiParam {string} emil 用户邮箱
 * @apiParam {string} name 用户名
 * @apiParam {string} avatar 头像
 * @apiParam {string} password 密码
 * @apiSuccess {json} result 更新成功后的信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/update', (req, res) => {
    User.findOneAndUpdate({
            _id: req.body.id
        }, {
            $set: {
                name: req.body.name,
                emil: req.body.emil,
                password: req.body.password,
                avatar: req.body.avatar
            }
        }, {
            new: true
        })
        .then(user => res.json(user))
        .catch(err => res.json(err));
})


module.exports = router;