//wrong.js
//用于错题的增删改查
const express = require('express');
const router = express.Router(); //实例化一个路由
const wrong = require('../../models/Wrong.model') //错题module
var mongoose = require('mongoose');

// 以下为错题增删改查接口


/**
 * @api {post} /api/wrongs/addWrong 添加错题
 * @apiDescription 添加错题
 * @apiName addWrong
 * @apiGroup wrong
 * @apiParam {string} user_id 用户id
 * @apiParam {string} wrong_id 题目id
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
router.post('/addWrong', (req, res) => {
    wrong.create(req.body, (err, wr) => {
        if (err) {
            res.json(err);
        } else {
            //console.log('1');
            res.json(wr);
        }
    });
})


/**
 * @api {post} /api/wrongs/delete 删除错题
 * @apiDescription 删除错题
 * @apiName delete
 * @apiGroup wrong
 * @apiParam {string} id 错题id
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
    wrong.findByIdAndRemove({
        _id: sid
    })
    .then(wr => {
        res.json(wr);
    })
    .catch(err => {
        res.json(err);
    });
})


/**
 * @api {post} /api/wrongs/updataWrong 更新错题
 * @apiDescription 更新错题
 * @apiName updatawrong
 * @apiGroup wrong
 * @apiParam {string} user_id 用户id
 * @apiParam {string} question_id 问题id
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
 router.post('/updataWrong', (req, res) => {
    var id = req.body.id;
    var sid = mongoose.Types.ObjectId(id);
    wrong.findOneAndUpdate({
        _id: sid
    }, {
        $set: {
            user_id: req.body.user_id,
            question_id: req.body.question_id
        }
    }, {
        new: true
    })
    .then(wr => res.json(wr))
    .catch(err => res.json(err));
})


/**
 * @api {post} /api/wrongs/findByid 错题按id查询
 * @apiDescription 错题按id查询
 * @apiName findByid
 * @apiGroup wrong
 * @apiParam {string} id 要查询的错题id
 * @apiSuccess {json} result 返回查到的错题信息
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
    wrong.findOne({
            _id: sid
        })
        .then(wr => {
            res.json(wr);
        })
        .catch(err => {
            res.json(err);
        });
})


/**
 * @api {post} /api/wrongs/find 错题分页查询
 * @apiDescription 错题分页查询
 * @apiName find
 * @apiGroup wrong
 * @apiParam {number} page 页数
 * @apiParam {number} rows 行号
 * @apiSuccess {json} result 返回查到的错题信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
 router.post('/find', (req, res) => {
    var query = wrong.find({});
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
            wrong.find(function (err, result) {
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