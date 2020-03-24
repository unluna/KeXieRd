const MsgTypeModel = require("../models/MsgType");

class MsgTypeControllers {
    constructor() {

    }

    async actionMsgType(ctx, next) {
        const msgType = new MsgTypeModel();
        ctx.body = await msgType.getData();
    }
}

module.exports = MsgTypeControllers;
