const MsgInfoModel = require("../models/MsgInfo");
const LoginModel = require("../models/Login");

class MsgInfoControllers {
    constructor() {

    }

    async actionMsgInfo(ctx, next) {
        const {msgId} = ctx.request.body;
        const msgInfoModel = new MsgInfoModel();

        const msgInfoRes = await msgInfoModel.getData(msgId);
        if (msgInfoRes.code === 0) {
            const {data: {msgAuthorId}} = msgInfoRes;
            const loginModel = new LoginModel();
            const userInfoRes = await loginModel.userInfo(msgAuthorId);
            if (userInfoRes.code === 0) {
                ctx.body = {
                    ...msgInfoRes,
                    userData: userInfoRes
                }
            } else {
                ctx.body = userInfoRes;
            }
        } else {
            ctx.body = msgInfoRes;
        }
    }
}

module.exports = MsgInfoControllers;
