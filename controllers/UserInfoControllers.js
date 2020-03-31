const Login = require("../models/Login");

class UserInfoControllers {
    constructor() {

    }

    async actionUserInfo(ctx, next) {
        const {userId = ""} = ctx.request.body;
        const login = new Login();
        ctx.body = await login.userInfo(userId);
    }
}

module.exports = UserInfoControllers;
