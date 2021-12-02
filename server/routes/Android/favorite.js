//favorite.js
//用于收藏的增删改查
const express = require('express');
const router = express.Router(); //实例化一个路由
const favorite = require('../../models/favorite.model') //收藏module
var mongoose = require('mongoose');

// 以下为收藏增删改查接口


/**
 * @api {post} /api/favorites/addFavorite 添加收藏
 * @apiDescription 添加收藏
 * @apiName addFavorite
 * @apiGroup favorite
 * @apiParam {string} user_id 用户id
 * @apiParam {string} favorite_id 题库id
 * @apiParam {string} question_id 题目id
 * @apiSuccess {json} result 返回结果
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {
 * "user_id": "61a2ef738fa143c820f51cab",
 * "favorite_id": "61a2ef738fa143c820f51cab",
 * "question_id": "61a2ef738fa143c820f51cab",
 * "_id": "61a31555bae378e7a7ed2c69",
 * "createTime": "2021-11-28T05:36:21.018Z",
 * "updateTime": "2021-11-28T05:36:21.018Z"
 * }
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/addFavorite', (req, res) => {
    favorite.create(req.body, (err, favor) => {
        if (err) {
            res.json(err);
        } else {
            //console.log('1');
            res.json(favor);
        }
    });
})

/**
 * @api {post} /api/favorites/delete 收藏夹删除
 * @apiDescription 收藏夹删除
 * @apiName delete
 * @apiGroup favorite
 * @apiParam {string} id 收藏夹id
 * @apiSuccess {json} result 返回查到的收藏夹信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
 router.post('/delete', (req, res) => {
    favorite.findByIdAndRemove({
            _id: req.body.id
        })
        .then(favor => {
            res.json(favor);
        })
        .catch(err => {
            res.json(err);
        });
})


/**
 * @api {post} /api/favorites/updatafavorite 更新收藏夹
 * @apiDescription 更新收藏夹
 * @apiName updatafavorite
 * @apiGroup favorite
 * @apiParam {string} _id 收藏夹id
 * @apiParam {string} title 收藏夹标签
 * @apiParam {string} label 收藏夹标签
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
router.post('/updatafavorite', (req, res) => {
    favorite.findOneAndUpdate({
            _id: req.body.id
        }, {
            $set: {
                title: req.body.title,
                label: req.body.label
            }
        }, {
            new: true
        })
        .then(favor => res.json(favor))
        .catch(err => res.json(err));
})



/**
 * @api {post} /api/favorites/findByid 收藏夹按id查询
 * @apiDescription 收藏夹按id查询
 * @apiName findByid
 * @apiGroup favorite
 * @apiParam {string} id 要查询的收藏夹id
 * @apiSuccess {json} result 返回查到的收藏夹信息
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
    favorite.findOne({
            _id: sid
        })
        .then(favor => {
            res.json(favor);
        })
        .catch(err => {
            res.json(err);
        });
})


/**
 * @api {post} /api/favorites/find 收藏夹分页查询
 * @apiDescription 收藏夹分页查询
 * @apiName find
 * @apiGroup favorite
 * @apiParam {number} page 页数
 * @apiParam {number} rows 行号
 * @apiSuccess {json} result 返回查到的收藏夹信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/find', (req, res) => {
    var query = favorite.find({});
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
            favorite.find(function (err, result) {
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