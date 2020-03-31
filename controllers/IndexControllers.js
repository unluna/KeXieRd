class IndexControllers {
    constructor() {

    }

    async actionIndex(ctx, next) {
        ctx.body = await ctx.render('books/index.html', {
            content: "hello world!"
        });
    }
}

module.exports = IndexControllers;
