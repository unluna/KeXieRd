const Login = require("../models/Login");

class LoginControllers {
    constructor() {

    }

    async actionLogin(ctx, next) {
        const {username = "", password = ""} = ctx.request.body;
        const login = new Login();
        const res = await login.getData(username, password);
        if (res.code === 0) {
            const {
                data: {
                    userId,
                    username,
                    userHeader,
                }
            } = res;
            ctx.cookies.set('userId', userId, {
                maxAge: 1000 * 60 * 60 * 24,   // cookie有效时长
                httpOnly: false,  // 是否只用于http请求中获取
            });
            ctx.cookies.set('userName', username, {
                maxAge: 1000 * 60 * 60 * 24,   // cookie有效时长
                httpOnly: false,  // 是否只用于http请求中获取
            });
            ctx.cookies.set('userHeader', userHeader, {
                maxAge: 1000 * 60 * 60 * 24,   // cookie有效时长
                httpOnly: false,  // 是否只用于http请求中获取
            });
        }
        ctx.body = res;
    }
}

module.exports = LoginControllers;
