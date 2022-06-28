<a name="top"></a>
# 测试项目 v1.0.0

用于测试的项目

# 目录

- [物品](#物品)
  - [获取物品](#获取物品)
- [物品_#apiSuccess_{Object[]}_goods_物品列表](#物品_#apiSuccess_{Object[]}_goods_物品列表)
  - [获取物品列表](#获取物品列表)
- [User](#User)
  - [Delete User](#Delete-User)
  - [Request User information](#Request-User-information)
  - [Request User List](#Request-User-List)

___


# <a name='物品'>物品</a>

## <a name='获取物品'>获取物品</a>
[Back to top](#top)


<span style="color: #fff; line-height:1.7;background: #4070ec; border-radius: 6px;font-size: 15px;padding: 4px 5px;text-transform: uppercase;font-weight: 600">GET</span>
```
http://ip:port/<project>//good/:id
```

### 参数 - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id<span style="color: #fff;float: right; line-height:1.7;background: #90f; border-radius: 5px;font-size: 75%;padding: 0 10px;font-weight:bold;">必填</span> | `Number` | <p>物品ID</p> |

### 参数示例
`json` - 请求示例:

[object Object] 
```json
{
  "id": 1324
}
```

### 响应参数

#### 响应参数 - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| name | `String` | <p>物品名称</p> |
| size | `Number` | <p>物品大小</p> |

### 响应示例

#### 响应示例 - 响应示例:

<!-- [object Object] -->
```json
{
  "name": "铅笔",
  "size": 1
}
```

# <a name='物品_#apiSuccess_{Object[]}_goods_物品列表'>物品_#apiSuccess_{Object[]}_goods_物品列表</a>

## <a name='获取物品列表'>获取物品列表</a>
[Back to top](#top)


<span style="color: #fff; line-height:1.7;background: #4070ec; border-radius: 6px;font-size: 15px;padding: 4px 5px;text-transform: uppercase;font-weight: 600">GET</span>
```
http://ip:port/<project>//goods
```

### 响应参数

#### 响应参数 - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| goods.name | `String` | <p>物品名称</p> |
| goods.size | `Number` | <p>物品大小</p> |

### 响应示例

#### 响应示例 - 响应示例:

<!-- [object Object],[object Object] -->
```json
[
  {
    "name": "铅笔",
    "size": 1
  },
  {
    "name": "流星",
    "size": 9999999999
  }
]
```

# <a name='User'>User</a>

## <a name='Delete-User'>Delete User</a>
[Back to top](#top)


<span style="color: #fff; line-height:1.7;background: #4070ec; border-radius: 6px;font-size: 15px;padding: 4px 5px;text-transform: uppercase;font-weight: 600">DELETE</span>
```
http://ip:port/<project>/user/:id
```

### 参数 - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id<span style="color: #fff;float: right; line-height:1.7;background: #90f; border-radius: 5px;font-size: 75%;padding: 0 10px;font-weight:bold;">必填</span> | `Number` | <p>Users unique ID.</p> |

### 参数示例
`json` - Request-example:

[object Object] 
```json
{
  "id": 1
}
```

### 响应参数

#### 响应参数 - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| result | `String` | <p>Delete Result</p> |

### 响应示例

#### 响应示例 - Response-success:

<!-- [object Object] -->
```json
{
  "result": "success"
}
```

#### 响应示例 - Response-failure:

<!-- [object Object] -->
```json
{
  "result": "User not exist"
}
```

## <a name='Request-User-information'>Request User information</a>
[Back to top](#top)


<span style="color: #fff; line-height:1.7;background: #4070ec; border-radius: 6px;font-size: 15px;padding: 4px 5px;text-transform: uppercase;font-weight: 600">GET</span>
```
http://ip:port/<project>/user/:id
```

### 参数 - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id<span style="color: #fff;float: right; line-height:1.7;background: #90f; border-radius: 5px;font-size: 75%;padding: 0 10px;font-weight:bold;">必填</span> | `Number` | <p>Users unique ID.</p> |

### 参数示例
`json` - Request-example:

[object Object] 
```json
{
  "id": 1
}
```

### 响应参数

#### 响应参数 - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| firstname | `String` | <p>Firstname of the User.</p> |
| lastname | `String` | <p>Lastname of the User.</p> |

### 响应示例

#### 响应示例 - Response-example:

<!-- [object Object] -->
```json
{
  "firstname": "Mickey",
  "lastname": "James"
}
```

## <a name='Request-User-List'>Request User List</a>
[Back to top](#top)


<span style="color: #fff; line-height:1.7;background: #4070ec; border-radius: 6px;font-size: 15px;padding: 4px 5px;text-transform: uppercase;font-weight: 600">GET</span>
```
http://ip:port/<project>/user
```

### 响应参数

#### 响应参数 - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| users | `Object[]` | <p>User List</p> |
| users.firstname | `String` | <p>Firstname of the User.</p> |
| users.lastname | `String` | <p>Lastname of the User.</p> |

### 响应示例

#### 响应示例 - Response-example:

<!-- [object Object],[object Object] -->
```json
[
  {
    "firstname": "Mickey",
    "lastname": "James"
  },
  {
    "firstname": "Mary",
    "lastname": "Jeff"
  }
]
```


