const Login = require("../models/Login");

class LoginControllers {
    constructor() {

    }

    async actionLogin(ctx, next) {
        const {username = "", password = ""} = ctx.request.body;
        const login = new Login();
        const res = await login.getData(username, password);
        if (res.code === 0) {
            ctx.cookies.set(
                'userId',
                res.data.userId,
                {
                    // domain: 'localhost', // 写cookie所在的域名
                    // path: '/index',       // 写cookie所在的路径
                    maxAge: 1000 * 60 * 60 * 24,   // cookie有效时长
                    // expires: new Date('2019-2-12'), // cookie失效时间
                    httpOnly: false,  // 是否只用于http请求中获取
                    // overwrite: false  // 是否允许重写
                }
            );
            ctx.cookies.set(
                'userName',
                res.data.username,
                {
                    maxAge: 1000 * 60 * 60 * 24,   // cookie有效时长
                    httpOnly: false,  // 是否只用于http请求中获取
                }
            );
        }
        ctx.body = res;
    }
}

module.exports = LoginControllers;
