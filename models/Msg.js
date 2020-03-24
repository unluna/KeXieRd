/**
 * @fileOverView 实现 Books 数据模型
 * @author BaiShiyu
 */
const MsgModel = require("../db/msg");

/**
 * Books 类 获取后台有关图书相关的数据类
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
     * 获取后台全部图书列表
     * @example
     * return new Promise
     */
    getData(msgAuthorId,msgAuthorName, departments,
            labels, msgTitle, msgContent) {
        return new Promise(resolve => {
            new MsgModel({
                msgAuthorId,msgAuthorName, departments, labels, msgTitle, msgContent
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
