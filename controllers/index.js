const router = require("koa-simple-router");
const IndexController = require("./IndexControllers");
const LoginControllers = require("./LoginControllers");
const MsgTypeControllers= require("./MsgTypeControllers");
const MsgControllers= require("./MsgControllers");
const MsgListControllers= require("./MsgListControllers");
const SignUpControllers= require("./SignUpControllers");
const ModifyControllers= require("./ModifyControllers");
const UserInfoControllers= require("./UserInfoControllers");
const MsgInfoControllers= require("./MsgInfoControllers");
const indexController = new IndexController();
const loginControllers = new LoginControllers();
const msgTypeControllers = new MsgTypeControllers();
const msgControllers = new MsgControllers();
const msgListControllers = new MsgListControllers();
const signUpControllers = new SignUpControllers();
const modifyControllers = new ModifyControllers();
const userInfoControllers = new UserInfoControllers();
const msgInfoControllers = new MsgInfoControllers();

module.exports = app => {
    app.use(
        router((_) => {
            _.get('/', indexController.actionIndex);
            _.get('/index.html', indexController.actionIndex);
            _.post('/login', loginControllers.actionLogin);
            _.get('/msgtype', msgTypeControllers.actionMsgType);
            _.post('/msg', msgControllers.actionMsg);
            _.post('/msglist', msgListControllers.actionMsgList);
            _.post('/signup', signUpControllers.actionSignUp);
            _.post('/modify', modifyControllers.actionModify);
            _.post('/userinfo', userInfoControllers.actionUserInfo);
            _.post('/msginfo', msgInfoControllers.actionMsgInfo);
        })
    )
};
