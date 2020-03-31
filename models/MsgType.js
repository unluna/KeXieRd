/**
 * @fileOverView 实现 Books 数据模型
 * @author BaiShiyu
 */
const MsgTypeModel = require("../db/msgType");

/**
 * Books 类 获取后台有关图书相关的数据类
 * @class
 */
class MsgType {
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
    getData() {
        return new Promise(resolve => {
            MsgTypeModel.find((err, msgDoc) => {
                if (!err) {
                    resolve({code: 0, msg: "success", data: msgDoc});
                } else {
                    console.log(err);
                    resolve({code: 1, msg: err});
                }
            });
        })
    }

    getDataById(id) {
        return new Promise(resolve => {
            MsgTypeModel.find({_id: id}, (err, msgDoc) => {
                if (!err&&msgDoc.length) {
                    resolve(true);
                } else {
                    console.log(err);
                    resolve(false);
                }
            });
        })
    }
}

module.exports = MsgType;
