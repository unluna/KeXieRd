/**
 * @fileOverView 实现 文章列表 数据模型
 * @author BaiShiyu
 */
const MsgModel = require("../db/msg");
const _ = require("lodash");
/**
 * MsgList 类 获取文章列表的数据类
 * @class
 */
class MsgList {
    /**
     * @constructor
     * @param {object} app Koa2执行上下文
     */
    constructor() {

    }

    /**
     * 获取后台全部文章列表
     * @example
     * return new Promise
     */
    getRecommendData(navType) {
        return new Promise(resolve => {
            switch (navType) {
                case "hot":
                    MsgModel.find( (err, msgDoc) => {
                        if (!err) {
                            if(msgDoc.length){
                                const arr= _.sortBy(msgDoc, item=> {
                                    return -item.goodNum;
                                });
                                resolve({code: 0, msg: "success", data: arr});
                            }else {
                                resolve({code: 0, msg: "success", data: msgDoc});
                            }
                        } else {
                            console.log(err);
                            resolve({code: 1, msg: err});
                        }
                    });
                    break;
                case "new":
                    MsgModel.find( (err, msgDoc) => {
                        if (!err) {
                            if(msgDoc.length){
                                const arr= _.sortBy(msgDoc, item=> {
                                    return -item.dateTime;
                                });
                                resolve({code: 0, msg: "success", data: arr});
                            }else {
                                resolve({code: 0, msg: "success", data: msgDoc});
                            }
                        } else {
                            console.log(err);
                            resolve({code: 1, msg: err});
                        }
                    });
                    break;
                default:
                    resolve({code: 1, msg: "程序出错，请联系管理员！"});
                    break;
            }
        });
    }

    getDepartmentData(navType,urlType){
        return new Promise(resolve => {
            switch (navType) {
                case "hot":
                    MsgModel.find({departments:{$elemMatch:{$eq:urlType}}}, (err, msgDoc) => {
                        if (!err) {
                            if(msgDoc.length){
                                const arr= _.sortBy(msgDoc, item=> {
                                    return -item.goodNum;
                                });
                                resolve({code: 0, msg: "success", data: arr});
                            }else {
                                resolve({code: 0, msg: "success", data: msgDoc});
                            }
                        } else {
                            console.log(err);
                            resolve({code: 1, msg: err});
                        }
                    });
                    break;
                case "new":
                    MsgModel.find( {departments:{$elemMatch:{$eq:urlType}}},(err, msgDoc) => {
                        if (!err) {
                            if(msgDoc.length){
                                const arr= _.sortBy(msgDoc, item=> {
                                    return -item.dateTime;
                                });
                                resolve({code: 0, msg: "success", data: arr});
                            }else {
                                resolve({code: 0, msg: "success", data: msgDoc});
                            }
                        } else {
                            console.log(err);
                            resolve({code: 1, msg: err});
                        }
                    });
                    break;
                default:
                    resolve({code: 1, msg: "程序出错，请联系管理员！"});
                    break;
            }
        });
    }
}

module.exports = MsgList;
