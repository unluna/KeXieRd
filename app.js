const Koa = require("koa");
const serve = require("koa-static");
const render = require("koa-swig");
const co = require("co");
const log4js = require('log4js');
const bodyParser = require('koa-bodyparser');
const config = require("./config");
const errorHandler = require("./middlewares/errorHandler");

const app = new Koa();

log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: './logs/koa.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
});
const logger = log4js.getLogger('cheese');
app.use(bodyParser());
app.use(serve(config.staticDir));

app.context.render = co.wrap(render({
    varControls: ["[[", "]]"],
    root: config.viewDir,
    autoescape: true,
    cache: false, // 缓存
    ext: 'html',
    writeBody: false
}));
// 先让他next 然后再次判断当前的业务情况
errorHandler.error(app, logger);
require("./controllers")(app);

app.listen(config.port, () => {
    console.log("科技创新协会系统启动成功...");
});
