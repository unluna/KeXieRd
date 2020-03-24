const MsgListModel = require("../models/MsgList");
const MsgTypeModel = require("../models/MsgType");

class MsgListControllers {
    constructor() {

    }

    async actionMsgList(ctx, next) {
        // const aUrlTypeFirst = ["recommend", "follow", "fe", "rd", "game", "ui", "read"];
        const aUrlTypeSecond = ["recommend", "follow", "department"];
        const aNavType = ["hot", "new"];

        const {urlType = [], navType = ""} = ctx.request.body;

        const msgTypeModel = new MsgTypeModel();
        const typeRes = await msgTypeModel.getDataById(urlType[0]);

        if (!typeRes || aUrlTypeSecond.indexOf(urlType[1]) === -1) {
            ctx.body = {code: 1, msg: "无效的 urlType !"};
        } else if (aNavType.indexOf(navType) === -1) {
            ctx.body = {code: 1, msg: "无效的 navType ！"};
        } else {
            switch (urlType[1]) {
                case "recommend":
                    const recommendMsgList = new MsgListModel();
                    ctx.body = await recommendMsgList.getRecommendData(navType);
                    break;
                case "follow":
                    break;
                case "department":
                    const departmentMsgList = new MsgListModel();
                    ctx.body = await departmentMsgList.getDepartmentData(navType,urlType[0]);
                    break;
                default:
                    break;
            }
        }
    }
}

module.exports = MsgListControllers;
