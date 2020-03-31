const Login = require("../models/Login");

class ModifyControllers {
    constructor() {

    }

    async actionModify(ctx, next) {
        const {
            userId,
            modifyType,
            modifyValue
        } = ctx.request.body;

        const modifyTypeList = ["nickname", "sex", "header", "grade", "department"];

        if (!userId || typeof userId !== "string") {
            ctx.body = {code: 1, msg: "管理员不存在，请退出重新登录！"};
        }
        if (modifyTypeList.indexOf(modifyType) === -1) {
            ctx.body = {code: 1, msg: "参数出错，请联系管理员！"};
        }
        if (modifyType === "header" && modifyValue >= 50) {
            ctx.body = {code: 1, msg: "头像链接过长！"};
        }
        if (modifyType !== "header" && modifyValue >= 15) {
            ctx.body = {code: 1, msg: "文字过长！"};
        }

        const login = new Login();
        const hasUserRes = await login.hasUser(userId);

        if (hasUserRes.code === 1) {
            ctx.body = hasUserRes;
        } else {
            ctx.body = await login.modifyUser(userId, modifyType, modifyValue);
        }
    }
}

module.exports = ModifyControllers;
