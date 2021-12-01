//comment.js
//用于评论的增删改查
const express = require('express');
const router = express.Router(); //实例化一个路由
const comment = require('../../models/Comment.model') //评论module


// 以下为评论增删改查接口


/**
 * @api {post} /api/comments/addComment 添加评论
 * @apiDescription 添加评论
 * @apiName addComment
 * @apiGroup comment
 * @apiParam {string} user_id 用户id
 * @apiParam {string} item_question_id 题库或题目id
 * @apiParam {string} conten 评论内容
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
router.post('/addComment', (req, res) => {
    comment.create(req.body, (err, comm) => {
        if (err) {
            res.json(err);
        } else {
            //console.log('1');
            res.json(comm);
        }
    });
})

/**
 * @api {post} /api/comments/delete 删除评论
 * @apiDescription 删除评论
 * @apiName delete
 * @apiGroup comment
 * @apiParam {string} id 评论id
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
    comment.findByIdAndRemove({
        _id: req.body.id
    })
    .then(comm => {
        res.json(comm);
    })
    .catch(err => {
        res.json(err);
    });
})


/**
 * @api {post} /api/comments/updataComment 更新评论
 * @apiDescription 更新评论
 * @apiName updataComment
 * @apiGroup comment
 * @apiParam {string} user_id 用户id
 * @apiParam {string} item_question_id 题库或问题id
 * @apiParam {string} content 评论内容
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
 router.post('/updataComment', (req, res) => {
    comment.findOneAndUpdate({
        _id: req.body.id
    }, {
        $set: {
            user_id: req.body.user_id,
            item_question_id: req.body.item_question_id,
            content:req.body.content
        }
    }, {
        new: true
    })
    .then(comm => res.json(comm))
    .catch(err => res.json(err));
})


/**
 * @api {post} /api/comments/findByid 评论按id查询
 * @apiDescription 评论按id查询
 * @apiName findByid
 * @apiGroup comment
 * @apiParam {string} id 要查询的评论id
 * @apiSuccess {json} result 返回查到的评论信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
 router.post('/findByid', (req, res) => {
    comment.find({
            _id: req.body.id
        })
        .then(comm => {
            res.json(comm);
        })
        .catch(err => {
            res.json(err);
        });
})


/**
 * @api {post} /api/comments/find 评论分页查询
 * @apiDescription 评论分页查询
 * @apiName find
 * @apiGroup comment
 * @apiParam {number} page 页数
 * @apiParam {number} rows 行号
 * @apiSuccess {json} result 返回查到的评论信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
 router.post('/find', (req, res) => {
    var query = comment.find({});
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
            comment.find(function (err, result) {
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