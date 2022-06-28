define({ "api": [
  {
    "type": "delete",
    "url": "user/:id",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-example:",
          "content": "{\"id\": 1}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Delete Result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-success:",
          "content": "{\"result\":\"success\"}",
          "type": "json"
        },
        {
          "title": "Response-failure:",
          "content": "{\"result\":\"User not exist\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "project/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "user/:id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-example:",
          "content": "{\"id\": 1}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-example:",
          "content": "{\"firstname\":\"Mickey\", \"lastname\": \"James\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "project/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "user",
    "title": "Request User List",
    "name": "GetUsers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>User List</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-example:",
          "content": "[{\"firstname\":\"Mickey\", \"lastname\": \"James\"},{\"firstname\":\"Mary\", \"lastname\": \"Jeff\"}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "project/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/good/:id",
    "title": "获取物品",
    "name": "获取物品",
    "group": "物品",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>物品ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例:",
          "content": "{\"id\": 1324}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>物品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>物品大小</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "响应示例:",
          "content": "{\"name\": \"铅笔\", \"size\": 1}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "project/good.php",
    "groupTitle": "物品"
  },
  {
    "type": "get",
    "url": "/goods",
    "title": "获取物品列表",
    "name": "获取物品列表",
    "group": "物品",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "goods",
            "description": "<p>物品列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "goods.name",
            "description": "<p>物品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "goods.size",
            "description": "<p>物品大小</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "响应示例:",
          "content": "[{\"name\": \"铅笔\", \"size\": 1},{\"name\": \"流星\", \"size\": 9999999999}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "project/good.php",
    "groupTitle": "物品"
  }
] });
