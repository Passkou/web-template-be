/**
 * 拒绝请求
 */
import Koa from 'koa';

export function forbidden(ctx: Koa.Context): void {
    ctx.status = 403;
    ctx.body = {code: 'Forbidden', msg: '非法请求'};
}