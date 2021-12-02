//question.js
//用于问题的增删改查
const express = require('express');
const router = express.Router(); //实例化一个路由
const question = require('../../models/Question.model') //问题module
var mongoose = require('mongoose');

// 以下为问题增删改查接口


/**
 * @api {post} /api/questions/addQuestion 新增问题
 * @apiDescription 新增问题
 * @apiName addQuestion
 * @apiGroup question
 * @apiParam {string} problem 问题描述
 * @apiParam {string} answer 问题答案
 * @apiParam {string} analysis 问题解析
 * @apiParam {string} type 问题类型
 * @apiSuccess {json} result 返回结果
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {
 * 
 * }
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/addQuestion', (req, res) => {
    //console.log(req.body)
    question.create(req.body, (err, Ques) => {
        if (err) {
            res.json(err);
        } else {
            //console.log('1');
            res.json(Ques);
        }
    });
})

/**
 * @api {post} /api/questions/delete 删除问题
 * @apiDescription 删除问题
 * @apiName delete
 * @apiGroup question
 * @apiParam {string} id 问题id
 * @apiSuccess {json} result 返回结果
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {
 * 
 * }
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/delete', (req, res) => {
    var id = req.body.id;
    var sid = mongoose.Types.ObjectId(id);
    question.findByIdAndRemove({
            _id: sid
        })
        .then(Ques => {
            res.json(Ques);
        })
        .catch(err => {
            res.json(err);
        });
})


/**
 * @api {post} /api/questions/updataQuestion 更新问题
 * @apiDescription 更新问题
 * @apiName updataQuestion
 * @apiGroup question
 * @apiParam {string} problem 问题描述
 * @apiParam {string} answer 问题答案
 * @apiParam {string} analysis 问题解析
 * @apiParam {string} type 问题类型
 * @apiSuccess {json} result 返回结果
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {
 * 
 * }
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/updataQuestion', (req, res) => {
    var id = req.body.id;
    var sid = mongoose.Types.ObjectId(id);
    question.findOneAndUpdate({
            _id: sid
        }, {
            $set: {
                problem: req.body.problem,
                answer: req.body.answer,
                analysis: req.body.analysis,
                type: req.body.type
            }
        }, {
            new: true
        })
        .then(Ques => res.json(Ques))
        .catch(err => res.json(err));
})


/**
 * @api {post} /api/questions/findByproblem 问题按标题查询
 * @apiDescription 问题按标题查询
 * @apiName findByproblem
 * @apiGroup question
 * @apiParam {string} problem 问题标题
 * @apiSuccess {json} result 返回查到的问题信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/findByproblem', (req, res) => {
    question.find({
            problem: req.body.problem
        })
        .then(Ques => {
            res.json(Ques);
        })
        .catch(err => {
            res.json(err);
        });
})

/**
 * @api {post} /api/questions/findByid 问题按id查询
 * @apiDescription 问题按id查询
 * @apiName findByid
 * @apiGroup question
 * @apiParam {string} id 要查询的问题id
 * @apiSuccess {json} result 返回查到的问题信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/findByid', (req, res) => {
    var id = req.body.id;
    var sid = mongoose.Types.ObjectId(id);
    console.log(sid);
    question.findOne({
            _id: sid
        })
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
})


/**
 * @api {post} /api/questions/find 问题分页查询
 * @apiDescription 问题分页查询
 * @apiName find
 * @apiGroup question
 * @apiParam {number} page 页数
 * @apiParam {number} rows 行号
 * @apiSuccess {json} result 返回查到的问题信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/find', (req, res) => {
    var query = question.find({});
    var count = 0;
    var page = req.body.page;
    var rows = req.body.rows;
    // var stuname=req.body.username;
    //   if(stuname){
    //     query.where('name',stuname);
    // }
    // 当前页显示的数据所有数据-前几页显示的数据
    query.skip((page - 1) * rows);
    query.limit(rows);
    query.exec(function (err, rs) {
        if (err) {
            res.send(err);
        } else {
            //计算数据总数
            question.find(function (err, result) {
                jsonArray = {
                    rows: rs,
                    total: result.length
                };
                res.send(jsonArray);
            });
        }
    });
})


module.exports = router;