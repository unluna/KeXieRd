/**
 * @fileOverView 实现 用户数据 数据模型
 * @author BaiShiyu
 */
const UserModel = require("../db/users");

/**
 * Login 类 获取用户数据相关的数据类
 * @class
 */
class Login {
    /**
     * @constructor
     * @param {object} app Koa2执行上下文
     */
    constructor() {

    }

    /**
     * 登录
     * @param {String} username 用户名
     * @param {String} password 密码
     * @example
     * return new Promise
     */
    getData(username, password) {
        return new Promise(resolve => {
            UserModel.findOne({username}, (err, userDoc) => {
                if (!err) {
                    if (userDoc === null) {
                        resolve({code: 1, msg: '用户不存在！'});
                    } else if (userDoc.password !== password) {
                        resolve({code: 1, msg: '密码错误！'});
                    } else {
                        resolve({
                            code: 0, msg: '登陆成功！', data: {
                                userId: userDoc._id,
                                username: userDoc.username,
                                userType: userDoc.type,
                                userHeader: userDoc.header,
                                userGrade: userDoc.grade,
                                userDepartment: userDoc.department,
                                userSex: userDoc.sex,
                                userNickname: userDoc.nickname,
                            }
                        });
                    }
                } else {
                    console.log(err);
                    resolve({code: 1, msg: err});
                }
            });
        })
    }

    /**
     * 是否含有root用户
     * @param {String} userId 用户数据库索引 ID
     * @example
     * return new Promise
     */
    hasRootUser(userId) {
        return new Promise(resolve => {
            UserModel.findOne({_id: userId, type: "root"}, (err, userDoc) => {
                if (!err) {
                    if (userDoc === null) {
                        resolve({code: 1, msg: '管理员不存在，请退出重新登录！'});
                    } else {
                        resolve({code: 0, msg: '管理员用户存在！'});
                    }
                } else {
                    console.log(err);
                    resolve({code: 1, msg: err});
                }
            });
        })
    }

    /**
     * 注册时用户名是否存在
     * @param {String} username 用户名
     * @example
     * return new Promise
     */
    hasUser(username) {
        return new Promise(resolve => {
            UserModel.findOne({username}, (err, userDoc) => {
                if (!err) {
                    if (userDoc === null) {
                        resolve({code: 0, msg: '用户不存在，可以注册！'});
                    } else {
                        resolve({code: 1, msg: '账号已存在！'});
                    }
                } else {
                    console.log(err);
                    resolve({code: 1, msg: err});
                }
            });
        })
    }
    /**
     * 用户是否存在
     * @param {String} userId 用户数据库索引 ID
     * @example
     * return new Promise
     */
    hasUserId(userId) {
        return new Promise(resolve => {
            UserModel.findOne({_id: userId}, (err, userDoc) => {
                if (!err) {
                    if (userDoc === null) {
                        resolve({code: 1, msg: '用户不存在！'});
                    } else {
                        resolve({code: 0, msg: '用户存在！'});
                    }
                } else {
                    console.log(err);
                    resolve({code: 1, msg: err});
                }
            });
        })
    }

    /**
     * 返回用户信息
     * @param {String} userId 用户数据库索引 ID
     * @example
     * return new Promise
     */
    userInfo(userId) {
        return new Promise(resolve => {

            UserModel.findOne({_id: userId}, {password: 0}, (err, userDoc) => {
                if (!err) {
                    if (userDoc === null) {
                        resolve({code: 1, msg: '用户不存在！'});
                    } else {
                        resolve({
                            code: 0,
                            msg: 'success！',
                            data: userDoc
                        });
                    }
                } else {
                    console.log(err);
                    resolve({code: 1, msg: err});
                }
            });
        })
    }

    /**
     * 更改用户信息
     * @param {String} userId 用户数据库索引 ID
     * @param {String} modifyType 用户要修改的信息名（比如：昵称）
     * @param {String} modifyValue 用户要修改的信息名 对应的值（比如：镜子大师）
     * @example
     * return new Promise
     */
    modifyUser(userId, modifyType, modifyValue) {
        return new Promise(resolve => {
            UserModel.updateOne(
                {'_id': userId}, {[modifyType]: modifyValue}, (err, userDoc) => {
                    if (!err) {
                        if (userDoc.ok === 1) {
                            resolve({code: 0, msg: '修改成功！'});
                        } else {
                            resolve({code: 1, msg: '修改失败！'});
                        }
                    } else {
                        console.log(err);
                        resolve({code: 1, msg: err});
                    }
                }
            )
        })
    }
}

module.exports = Login;
