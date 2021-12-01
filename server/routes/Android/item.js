//item.js
//用于题库的增删改查
const express = require('express');
const router = express.Router(); //实例化一个路由
const item = require('../../models/Item.model') //题库module


// 以下为题库增删改查接口


/**
 * @api {post} /api/items/addItem 添加题库
 * @apiDescription 添加题库
 * @apiName addItem
 * @apiGroup item
 * @apiParam {string} title 题库标题
 * @apiParam {string} label 题库标签
 * @apiSuccess {json} result 返回结果
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {
 * "title": "2018年下半年 软件设计师",
 * "label": "软考真题",
 * "_id": "61a2ee41b914d74455ee8ba8",
 * "__v": 0
 * }
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/addItem', (req, res) => {
    item.create(req.body, (err, hero) => {
        if (err) {
            res.json(err);
        } else {
            console.log('1');
            res.json(hero);
        }
    });
})

/**
 * @api {post} /api/items/delete 题库删除
 * @apiDescription 题库删除
 * @apiName delete
 * @apiGroup item
 * @apiParam {string} id 题库id
 * @apiSuccess {json} result 返回查到的题库信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
 router.post('/delete', (req, res) => {
    item.findByIdAndRemove({
            _id: req.body.id
        })
        .then(hero => {
            res.json(hero);
        })
        .catch(err => {
            res.json(err);
        });
})


/**
 * @api {post} /api/items/updataItem 更新题库
 * @apiDescription 更新题库
 * @apiName updataItem
 * @apiGroup item
 * @apiParam {string} _id 题库id
 * @apiParam {string} title 题库标签
 * @apiParam {string} label 题库标签
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
router.post('/updataItem', (req, res) => {
    item.findOneAndUpdate({
            _id: req.body.id
        }, {
            $set: {
                title: req.body.title,
                label: req.body.label
            }
        }, {
            new: true
        })
        .then(hero => res.json(hero))
        .catch(err => res.json(err));
})


/**
 * @api {post} /api/items/findBytitle 题库按标题查询
 * @apiDescription 题库分页查询
 * @apiName findBytitle
 * @apiGroup item
 * @apiParam {string} title 题库标题
 * @apiSuccess {json} result 返回查到的题库信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/findBytitle', (req, res) => {
    item.find({
            title: req.body.title
        })
        .then(hero => {
            res.json(hero);
        })
        .catch(err => {
            res.json(err);
        });
})


/**
 * @api {post} /api/items/findByid 题库按id查询
 * @apiDescription 题库按id查询
 * @apiName findByid
 * @apiGroup item
 * @apiParam {string} id 要查询的题库id
 * @apiSuccess {json} result 返回查到的题库信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/findByid', (req, res) => {
    item.find({
            _id: req.body.id
        })
        .then(hero => {
            res.json(hero);
        })
        .catch(err => {
            res.json(err);
        });
})

/**
 * @api {post} /api/items/findBylabel 题库按标签查询
 * @apiDescription 题库按标签查询
 * @apiName findBylabel
 * @apiGroup item
 * @apiParam {string} label 要查询的题库标签
 * @apiSuccess {json} result 返回查到的题库信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/findBylabel', (req, res) => {
    item.find({
            label: req.body.label
        })
        .then(hero => {
            res.json(hero);
        })
        .catch(err => {
            res.json(err);
        });
})

/**
 * @api {post} /api/items/find 题库分页查询
 * @apiDescription 题库分页查询
 * @apiName find
 * @apiGroup item
 * @apiParam {number} page 页数
 * @apiParam {number} rows 行号
 * @apiSuccess {json} result 返回查到的题库信息
 * @apiExample Example usage:
 * {}
 * @apiSuccessExample {json} Success-Response:
 * {}
 * @apiErrorExample {json} Error-Response:
 * {}
 * @apiVersion 0.0.0
 */
router.post('/find', (req, res) => {
    var query = item.find({});
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
            item.find(function (err, result) {
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