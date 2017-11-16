const Koa = require('koa');
const koaBody = require('koa-body')();
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const homeAdData = require('./home/ad.js');

router.get('/', function (ctx, next) {
    // ctx.router available
    ctx.body = '11111';
});
router.get('/api/home/ad', function (ctx, next) {
    // ctx.router available
    ctx.body = homeAdData;
});

// 首页 —— 推荐列表（猜你喜欢）
const homeListData = require('./home/list.js');
router.get('/api/home/list/:city/:page', koaBody, function (ctx, next) {
    // 参数
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = parseInt(params.page, 10);

    console.log('当前城市：' + paramsCity);
    console.log('当前页数：' + paramsPage);

    homeListData.page = paramsPage;

    ctx.body = homeListData
});
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen('8080');

console.log('listen: 8080');