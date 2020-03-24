/*
* 错误处理中间件
* */
const errorHandler = {
    error(app,logger) {
        app.use(async (ctx, next) => {
            try {
                await next();
            } catch (err) {
                // 如果挂了，及时差错
                // 这里可以判断是不是生产环境
                // 业务变动长时间的 500 （挂） 会被 SEO 降权
                // ctx.status = err.status || 200; => 贱不贱
                ctx.status = err.status || 500;
                // 打电话，发短信
                logger.error(err);
                ctx.body = "出错了~";
            }
        });
        app.use(async (ctx, next) => {
            await next();
            if (ctx.status !== 404) {
                return;
            }
            // 业务变动长时间的 404 （挂） 会被 SEO 降权
            // ctx.status = 200; => 贱不贱
            ctx.status = 404;
            ctx.body = '<script type="text/javascript"  src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="http://localhost:3000" homePageName="回到我的主页"></script>" charset="utf-8"></script>';
        });
    }
};

module.exports = errorHandler;
