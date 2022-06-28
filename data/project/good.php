<?php

/**
 * @api {get} /good/:id 获取物品
 * @apiName 获取物品
 * @apiGroup 物品
 *
 * @apiParam {Number} id 物品ID
 *
 * @apiParamExample {json}  请求示例:
 * {"id": 1324}
 *
 * @apiSuccess {String} name 物品名称
 * @apiSuccess {Number} size 物品大小
 * @apiSuccessExample   {json}  响应示例:
 * {"name": "铅笔", "size": 1}
 */
function get_good($id)
{
}

/**
 * @api {get} /goods 获取物品列表
 * @apiName 获取物品列表
 * @apiGroup 物品
 *
 * @apiSuccess  {Object[]} goods 物品列表
 * @apiSuccess {String} goods.name 物品名称
 * @apiSuccess {Number} goods.size 物品大小
 * @apiSuccessExample {json}  响应示例:
 * [{"name": "铅笔", "size": 1},{"name": "流星", "size": 9999999999}]
 */
function get_goods()
{
}