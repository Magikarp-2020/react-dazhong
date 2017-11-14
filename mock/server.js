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

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen('8080');

console.log('listen: 8080');