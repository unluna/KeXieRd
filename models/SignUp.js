/**
 * @fileOverView 实现 Books 数据模型
 * @author BaiShiyu
 */
const UserModel = require("../db/users");

/**
 * Books 类 获取后台有关图书相关的数据类
 * @class
 */
class SignUp {
    /**
     * @constructor
     * @param {object} app Koa2执行上下文
     */
    constructor() {

    }

    /**
     * 获取后台全部图书列表
     * @example
     * return new Promise
     */
    getData(sendUsername, sendPassword, sendType) {
        return new Promise(resolve => {
            new UserModel({
                username: sendUsername,
                password: sendPassword,
                type: sendType
            }).save((err) => {
                if (err) {
                    console.log(err);
                    resolve({code: 1, msg: "注册失败，请联系管理员！"})
                } else {
                    resolve({code: 0, msg: "注册成功！"});
                }
            });
        })
    }
}

module.exports = SignUp;
