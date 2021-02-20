/**
 *  @name check-ua.ts
 *  @description 检查 UA 中间件，只是简单检查
 */
import Koa from 'koa';
import {forbidden} from './common/forbidden';

const middleware: Koa.Middleware = async (ctx, next) => {
    const ua: string = ctx.get('User-Agent');
    if (ua && !ua.startsWith('Mozilla')) {
        forbidden(ctx);
        return;
    }
    await next();
};

export default middleware;