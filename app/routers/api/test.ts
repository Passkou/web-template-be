import Router from '@koa/router';

const router: Router = new Router();

router.get('/test', async (ctx, next) => {
    const resp = {code: 'OK', msg: '', data: '测试API调用成功'};
    ctx.body = resp;
});

export default router;