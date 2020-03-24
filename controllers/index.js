const router = require("koa-simple-router");
const IndexController = require("./IndexControllers");
const LoginControllers = require("./LoginControllers");
const MsgTypeControllers= require("./MsgTypeControllers");
const MsgControllers= require("./MsgControllers");
const MsgListControllers= require("./MsgListControllers");
const indexController = new IndexController();
const loginControllers = new LoginControllers();
const msgTypeControllers = new MsgTypeControllers();
const msgControllers = new MsgControllers();
const msgListControllers = new MsgListControllers();

module.exports = app => {
    app.use(
        router((_) => {
            _.get('/', indexController.actionIndex);
            _.get('/index.html', indexController.actionIndex);
            _.post('/login', loginControllers.actionLogin);
            _.get('/msgtype', msgTypeControllers.actionMsgType);
            _.post('/msg', msgControllers.actionMsg);
            _.post('/msgList', msgListControllers.actionMsgList);
        })
    )
};
