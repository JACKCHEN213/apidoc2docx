# -*- coding: utf-8 -*-


def get_user(uid):
    """
    @api {get} user/:id Request User information
    @apiName GetUser
    @apiGroup User

    @apiParam {Number} id Users unique ID.

    @apiParamExample {json} Request-example:
    {"id": 1}

    @apiSuccess {String} firstname Firstname of the User.
    @apiSuccess {String} lastname  Lastname of the User.

    @apiSuccessExample {json} Response-example:
    {"firstname":"Mickey", "lastname": "James"}
    """
    pass


def delete_user(uid):
    """
    @api {delete} user/:id Delete User
    @apiName DeleteUser
    @apiGroup User

    @apiParam {Number} id Users unique ID.

    @apiParamExample {json} Request-example:
    {"id": 1}

    @apiSuccess {String} result  Delete Result

    @apiSuccessExample {json} Response-success:
    {"result":"success"}
    @apiSuccessExample {json} Response-failure:
    {"result":"User not exist"}
    """
    pass


def users():
    """
    @api {get} user Request User List
    @apiName GetUsers
    @apiGroup User

    @apiSuccess {Object[]} users User List
    @apiSuccess {String} users.firstname Firstname of the User.
    @apiSuccess {String} users.lastname  Lastname of the User.

    @apiSuccessExample {json} Response-example:
    [{"firstname":"Mickey", "lastname": "James"},{"firstname":"Mary", "lastname": "Jeff"}]
    """
    pass
