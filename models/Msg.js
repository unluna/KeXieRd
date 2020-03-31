/**
 * @fileOverView 实现 保存文章 数据模型
 * @author BaiShiyu
 */
const MsgModel = require("../db/msg");

/**
 * Msg 类 保存用户填写的文章的数据类
 * @class
 */
class Msg {
    /**
     * @constructor
     * @param {object} app Koa2执行上下文
     */
    constructor() {

    }

    /**
     * 用户保存文章后是否成功
     * @example
     * return new Promise
     */
    getData(msgAuthorId, departments,
            labels, msgTitle, msgContent) {
        return new Promise(resolve => {
            new MsgModel({
                msgAuthorId, departments, labels, msgTitle, msgContent
            }).save((err) => {
                if (err) {
                    console.log(err);
                    resolve({code: 1, msg: "保存失败，请联系管理员！"})
                } else {
                    resolve({code: 0, msg: "保存成功！"});
                }
            });
        })
    }
}

module.exports = Msg;
