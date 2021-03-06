define({ "api": [
  {
    "type": "post",
    "url": "/api/users/code",
    "title": "发送验证码",
    "description": "<p>这是个为指定手机号发送验证码的接口</p>",
    "name": "code",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>验证码发送成功后的消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n     \"mobile\": \"18154786352\"\n}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users/code"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/Android/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/find",
    "title": "用户查询",
    "description": "<p>按照用户name查询用户信息</p>",
    "name": "find",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>登录成功后的信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>登录成功后的信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n{\n  \"result\": {\n    \"_id\": \"61a34bd7fcb9d513dfcfd261\",\n    \"name\": \"gongwuhui\",\n    \"emil\": \"gongwuhui@qq.com\",\n    \"password\": \"$2b$10$.5AaipqRI.a3fEL5aaHBKOi0edvp5TE8l2xsp4qPFDAbCX6h9YkeC\",\n    \"__v\": 0\n  },\n  \"message\": \"登录成功\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"message\": \"密码无效\"\n}\n{\n\"message\": \"用户不存在\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users/login"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/Android/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "用户注册",
    "description": "<p>用户注册</p>",
    "name": "register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "emil",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>注册成功后的信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n{\n  \"message\": \"注册成功\",\n  \"user\": {\n    \"name\": \"gongwuh\",\n    \"emil\": \"gongwuhu@qq.com\",\n    \"password\": \"$2b$10$j/GdQy.ZH7PA0aYmTPAV6uDyZVo8OkcOk.FzEIclCxM14Zn9H7Du2\",\n    \"_id\": \"61a35d040b1042de431ff186\",\n    \"__v\": 0\n  }\n}\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n{\n  \"message\": \"输入错误\",\n  \"err\": {\n    \"index\": 0,\n    \"code\": 11000,\n    \"keyPattern\": {\n      \"name\": 1\n    },\n    \"keyValue\": {\n      \"name\": \"gongwuhui\"\n    }\n  }\n}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users/register"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/Android/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/update",
    "title": "用户更新",
    "description": "<p>更新用户信息</p>",
    "name": "update",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "emil",
            "description": "<p>用户邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>更新成功后的信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/comments/addComment",
    "title": "添加评论",
    "description": "<p>添加评论</p>",
    "name": "addComment",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "item_question_id",
            "description": "<p>题库或题目id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "conten",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/comment.js",
    "groupTitle": "comment"
  },
  {
    "type": "post",
    "url": "/api/comments/delete",
    "title": "删除评论",
    "description": "<p>删除评论</p>",
    "name": "delete",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>评论id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/comment.js",
    "groupTitle": "comment"
  },
  {
    "type": "post",
    "url": "/api/comments/find",
    "title": "评论分页查询",
    "description": "<p>评论分页查询</p>",
    "name": "find",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "rows",
            "description": "<p>行号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的评论信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/comment.js",
    "groupTitle": "comment"
  },
  {
    "type": "post",
    "url": "/api/comments/findByid",
    "title": "评论按id查询",
    "description": "<p>评论按id查询</p>",
    "name": "findByid",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>要查询的评论id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的评论信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/comment.js",
    "groupTitle": "comment"
  },
  {
    "type": "post",
    "url": "/api/comments/updataComment",
    "title": "更新评论",
    "description": "<p>更新评论</p>",
    "name": "updataComment",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "item_question_id",
            "description": "<p>题库或问题id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/comment.js",
    "groupTitle": "comment"
  },
  {
    "type": "post",
    "url": "/api/favorites/addFavorite",
    "title": "添加收藏",
    "description": "<p>添加收藏</p>",
    "name": "addFavorite",
    "group": "favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "favorite_id",
            "description": "<p>题库id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "question_id",
            "description": "<p>题目id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"user_id\": \"61a2ef738fa143c820f51cab\",\n\"favorite_id\": \"61a2ef738fa143c820f51cab\",\n\"question_id\": \"61a2ef738fa143c820f51cab\",\n\"_id\": \"61a31555bae378e7a7ed2c69\",\n\"createTime\": \"2021-11-28T05:36:21.018Z\",\n\"updateTime\": \"2021-11-28T05:36:21.018Z\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/favorite.js",
    "groupTitle": "favorite"
  },
  {
    "type": "post",
    "url": "/api/favorites/delete",
    "title": "收藏夹删除",
    "description": "<p>收藏夹删除</p>",
    "name": "delete",
    "group": "favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>收藏夹id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的收藏夹信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/favorite.js",
    "groupTitle": "favorite"
  },
  {
    "type": "post",
    "url": "/api/favorites/find",
    "title": "收藏夹分页查询",
    "description": "<p>收藏夹分页查询</p>",
    "name": "find",
    "group": "favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "rows",
            "description": "<p>行号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的收藏夹信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/favorite.js",
    "groupTitle": "favorite"
  },
  {
    "type": "post",
    "url": "/api/favorites/findByid",
    "title": "收藏夹按id查询",
    "description": "<p>收藏夹按id查询</p>",
    "name": "findByid",
    "group": "favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>要查询的收藏夹id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的收藏夹信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/favorite.js",
    "groupTitle": "favorite"
  },
  {
    "type": "post",
    "url": "/api/favorites/updatafavorite",
    "title": "更新收藏夹",
    "description": "<p>更新收藏夹</p>",
    "name": "updatafavorite",
    "group": "favorite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>收藏夹id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>收藏夹标签</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>收藏夹标签</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/favorite.js",
    "groupTitle": "favorite"
  },
  {
    "type": "post",
    "url": "/api/items/addItem",
    "title": "添加题库",
    "description": "<p>添加题库</p>",
    "name": "addItem",
    "group": "item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>题库标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>题库标签</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"title\": \"2018年下半年 软件设计师\",\n\"label\": \"软考真题\",\n\"_id\": \"61a2ee41b914d74455ee8ba8\",\n\"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/item.js",
    "groupTitle": "item"
  },
  {
    "type": "post",
    "url": "/api/items/delete",
    "title": "题库删除",
    "description": "<p>题库删除</p>",
    "name": "delete",
    "group": "item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>题库id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的题库信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/item.js",
    "groupTitle": "item"
  },
  {
    "type": "post",
    "url": "/api/items/find",
    "title": "题库分页查询",
    "description": "<p>题库分页查询</p>",
    "name": "find",
    "group": "item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "rows",
            "description": "<p>行号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的题库信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/item.js",
    "groupTitle": "item"
  },
  {
    "type": "post",
    "url": "/api/items/findByid",
    "title": "题库按id查询",
    "description": "<p>题库按id查询</p>",
    "name": "findByid",
    "group": "item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>要查询的题库id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的题库信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/item.js",
    "groupTitle": "item"
  },
  {
    "type": "post",
    "url": "/api/items/findBylabel",
    "title": "题库按标签查询",
    "description": "<p>题库按标签查询</p>",
    "name": "findBylabel",
    "group": "item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>要查询的题库标签</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的题库信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/item.js",
    "groupTitle": "item"
  },
  {
    "type": "post",
    "url": "/api/items/findBytitle",
    "title": "题库按标题查询",
    "description": "<p>题库分页查询</p>",
    "name": "findBytitle",
    "group": "item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>题库标题</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的题库信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/item.js",
    "groupTitle": "item"
  },
  {
    "type": "post",
    "url": "/api/items/updataItem",
    "title": "更新题库",
    "description": "<p>更新题库</p>",
    "name": "updataItem",
    "group": "item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>题库id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>题库标签</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>题库标签</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/item.js",
    "groupTitle": "item"
  },
  {
    "type": "post",
    "url": "/api/questions/addQuestion",
    "title": "新增问题",
    "description": "<p>新增问题</p>",
    "name": "addQuestion",
    "group": "question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "problem",
            "description": "<p>问题描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "answer",
            "description": "<p>问题答案</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "analysis",
            "description": "<p>问题解析</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>问题类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/question.js",
    "groupTitle": "question"
  },
  {
    "type": "post",
    "url": "/api/questions/delete",
    "title": "删除问题",
    "description": "<p>删除问题</p>",
    "name": "delete",
    "group": "question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>问题id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/question.js",
    "groupTitle": "question"
  },
  {
    "type": "post",
    "url": "/api/questions/find",
    "title": "问题分页查询",
    "description": "<p>问题分页查询</p>",
    "name": "find",
    "group": "question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "rows",
            "description": "<p>行号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的问题信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/question.js",
    "groupTitle": "question"
  },
  {
    "type": "post",
    "url": "/api/questions/findByid",
    "title": "问题按id查询",
    "description": "<p>问题按id查询</p>",
    "name": "findByid",
    "group": "question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>要查询的问题id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的问题信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/question.js",
    "groupTitle": "question"
  },
  {
    "type": "post",
    "url": "/api/questions/findByproblem",
    "title": "问题按标题查询",
    "description": "<p>问题按标题查询</p>",
    "name": "findByproblem",
    "group": "question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "problem",
            "description": "<p>问题标题</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的问题信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/question.js",
    "groupTitle": "question"
  },
  {
    "type": "post",
    "url": "/api/questions/updataQuestion",
    "title": "更新问题",
    "description": "<p>更新问题</p>",
    "name": "updataQuestion",
    "group": "question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "problem",
            "description": "<p>问题描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "answer",
            "description": "<p>问题答案</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "analysis",
            "description": "<p>问题解析</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>问题类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/question.js",
    "groupTitle": "question"
  },
  {
    "type": "post",
    "url": "/api/wrongs/addWrong",
    "title": "添加错题",
    "description": "<p>添加错题</p>",
    "name": "addWrong",
    "group": "wrong",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wrong_id",
            "description": "<p>题目id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/wrong.js",
    "groupTitle": "wrong"
  },
  {
    "type": "post",
    "url": "/api/wrongs/delete",
    "title": "删除错题",
    "description": "<p>删除错题</p>",
    "name": "delete",
    "group": "wrong",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>错题id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/wrong.js",
    "groupTitle": "wrong"
  },
  {
    "type": "post",
    "url": "/api/wrongs/find",
    "title": "错题分页查询",
    "description": "<p>错题分页查询</p>",
    "name": "find",
    "group": "wrong",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "rows",
            "description": "<p>行号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的错题信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/wrong.js",
    "groupTitle": "wrong"
  },
  {
    "type": "post",
    "url": "/api/wrongs/findByid",
    "title": "错题按id查询",
    "description": "<p>错题按id查询</p>",
    "name": "findByid",
    "group": "wrong",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>要查询的错题id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回查到的错题信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/wrong.js",
    "groupTitle": "wrong"
  },
  {
    "type": "post",
    "url": "/api/wrongs/updataWrong",
    "title": "更新错题",
    "description": "<p>更新错题</p>",
    "name": "updatawrong",
    "group": "wrong",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "question_id",
            "description": "<p>问题id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>返回结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/Android/wrong.js",
    "groupTitle": "wrong"
  }
] });
