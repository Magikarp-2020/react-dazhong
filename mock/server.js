const Koa = require('koa');
const koaBody = require('koa-body')();
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


router.get('/', function (next) {
    this.body = '123123'
});

router.get('/api', function (next) {
    this.body = 'api...'
});

router.post('/api/post', koaBody, function () {
    this.body = JSON.stringify(this.request.body);
});


app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen('8080');

console.log('listen: 8080');