import * as Koa from 'koa';
import * as Router from 'koa-router';

import * as logger from 'koa-logger';
import * as json from 'koa-json';

const app = new Koa();
const router = new Router();

router.get('/search', async (ctx, next) => {
    ctx.body = {
        results: ['user1', 'user2', 'user3'],
    };
    await next();
});

app.use(json());
app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Koa started');
});
