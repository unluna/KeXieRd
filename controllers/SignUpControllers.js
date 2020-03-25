const SignUp = require("../models/SignUp");
const Login = require("../models/Login");

class SignUpControllers {
    constructor() {

    }

    async actionSignUp(ctx, next) {
        const {
            rootId,
            sendUsername,
            sendPassword,
            sendType
        } = ctx.request.body;

        const sendTypeList = ["root", "teacher", "student"];
        if (!rootId || typeof rootId !== "string") {
            ctx.body = {code: 1, msg: "管理员不存在，请退出重新登录！"};
        }
        if (!sendUsername || sendUsername.length > 8 || !(/^\d+$/.test(sendUsername))) {
            ctx.body = {code: 1, msg: "账号不能超过8位，且只能为数字！"};
        }
        if (!sendPassword || sendPassword.length > 20 || !(/^[A-Za-z0-9]+$/.test(sendPassword))) {
            ctx.body = {code: 1, msg: "密码不能超过20位，且只能为数字和英文！"};
        }
        if (sendTypeList.indexOf(sendType) === -1) {
            ctx.body = {code: 1, msg: "用户种类出错，请联系管理员！"};
        }
        const login = new Login();

        const hasUserRes = await login.hasUser(sendUsername);

        if (hasUserRes.code === 1) {
            ctx.body = hasUserRes;
        } else {
            const res = await login.hasRootUser(rootId);
            if (res.code === 0) {
                const signUp = new SignUp();
                ctx.body = await signUp.getData(sendUsername, sendPassword, sendType);
            } else {
                ctx.body = res;
            }
        }
    }
}

module.exports = SignUpControllers;
