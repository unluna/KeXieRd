const Msg = require("../models/Msg");

class MsgControllers {
    constructor() {

    }

    async actionMsg(ctx, next) {
        const {
            msgAuthorId = "",
            msgAuthorName = "",
            departments = [],
            labels = [],
            msgTitle="",
            msgContent = ""
        } = ctx.request.body;
        if (!msgAuthorId||!msgAuthorName) {
            ctx.body = {code: 1, msg: "无效的用户！"};
        } else if (departments.length === 0) {
            ctx.body = {code: 1, msg: "分类不能为空！"};
        } else if (labels.length === 0) {
            ctx.body = {code: 1, msg: "标签不能为空！"};
        } else if (!msgTitle || msgTitle.length > 20) {
            ctx.body = {code: 1, msg: "文章标题不能为空，且不能超过20个字！"};
        } else if (!msgContent.length) {
            ctx.body = {code: 1, msg: "内容不能为空！"};
        } else if (msgContent.length > 15000) {
            ctx.body = {code: 1, msg: "内容不能超过1万5000字！"};
        } else {
            const msg = new Msg();
            ctx.body = await msg.getData(msgAuthorId,msgAuthorName, departments, labels, msgTitle, msgContent);
        }
    }
}

module.exports = MsgControllers;
