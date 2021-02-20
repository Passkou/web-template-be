/**
 *  @name serve-favicon.ts
 *  @description favicon.ico 文件服务
 */
import Koa from 'koa';
import send from 'koa-send';
import fs from 'fs';

const middleware: Koa.Middleware = async (ctx, next) => {
    if (ctx.path === '/favicon.ico' && fs.existsSync('./favicon.ico')) {
        await send(ctx, './favicon.ico');
    } else {
        await next();
    }
};

export default middleware;