/**
 * @name api.ts
 * @description API 路由
 */
import Router from '@koa/router';
import koaBody from 'koa-body';
import checkReferrer from '../middlewares/check-referrer';
import checkUA from '../middlewares/check-ua';
import testApi from './api/test';

const router = new Router({
    prefix: '/api'
});

router.use(checkReferrer)
    .use(checkUA)
    .use(koaBody());

router.use(testApi.routes());

export default router;