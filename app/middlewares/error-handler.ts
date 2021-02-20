/**
 * @name error-handle.ts
 * @description 错误处理
 */
import Koa from 'koa';

/**
 * 处理全局错误
 * @param app Koa 实例
 */
export function appError(app: Koa): void {
    app.on('error', async (err: Error, ctx: Koa.Context) => {
        console.error(err.message);
        console.error(err.stack);
        await ctx.render('error');
        ctx.status = 500;
    });
};

/**
 * 处理 404 错误
 * @param ctx 
 * @param next 
 */
export const err404: Koa.Middleware = async (ctx, next) => {
    await ctx.render('404', {path: ctx.path});
    ctx.status = 404;
};
