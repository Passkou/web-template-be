/**
 *  @name check-csrf.ts
 *  @description 检查 CSRF 中间件
 */
import Koa from 'koa';
import {CsrfErrorResponse} from '../types/api';

/**
 * 检查 CSRF 是否合法，在这编写代码
 * @param csrf X-CSRF-Token 头的值
 */
async function checkCsrf(csrf: string): Promise<boolean> {
    return true;
}


function forbidden(ctx: Koa.Context): void {
    const resp: CsrfErrorResponse = {
        code: 'CsrfError',
        msg: 'CSRF 错误',
        data: null
    };
    ctx.status = 403;
    ctx.body = resp;
}

const middleware: Koa.Middleware = async (ctx, next) => {
    if (['POST', 'DELETE', 'PATCH', 'PUT'].includes(ctx.method)) {
        const csrfHeader: string = ctx.get('X-CSRF-Token');
        if (!csrfHeader || !await checkCsrf(csrfHeader)) {
            forbidden(ctx);
            return;
        }
    }
    await next();
};

export default middleware;