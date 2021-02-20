/**
 *  @name serve-robots.ts
 *  @description robots.txt 文件服务
 */
import Koa from 'koa';
import send from 'koa-send';

const middleware: Koa.Middleware = async (ctx, next) => {
    if (ctx.path === '/robots.txt') {
        await send(ctx, './robots.txt');
    } else {
        await next();
    }
};

export default middleware;