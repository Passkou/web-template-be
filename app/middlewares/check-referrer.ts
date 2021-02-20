/**
 *  @name check-referrer.ts
 *  @description 检查 Referrer 中间件
 */
import Koa from 'koa';
import config from '../../config';
import {forbidden} from './common/forbidden';

const middleware: Koa.Middleware = async (ctx, next) => {
    const referrer: string = ctx.get('Referer');
    if (referrer) {
        try {
            const referrerURL: URL = new URL(referrer.toLowerCase());
            if (!config.validHostname.includes(referrerURL.hostname)) {
                forbidden(ctx);
                return;
            }
        } catch(e) {
            forbidden(ctx);
            return;
        }
    }
    await next();
};

export default middleware;