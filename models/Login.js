/**
 * @fileOverView 实现 Books 数据模型
 * @author BaiShiyu
 */
const UserModel = require("../db/users");

/**
 * Books 类 获取后台有关图书相关的数据类
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
     * 是否登录
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
     * @example
     * return new Promise
     */
    hasRootUser(userId) {
        return new Promise(resolve => {
            UserModel.findOne({_id:userId, type: "root"}, (err, userDoc) => {
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
     * 用户是否存在
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
}

module.exports = Login;
// //生成一个cookie
// res.cookie('userId', userDoc._id, {maxAge: 1000 * 60 * 60 * 24})
// //响应数据中不要携带密码
// const data = {id: userDoc._id, username, type}
// res.send({code: 0, data: data})