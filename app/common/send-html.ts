import config from '../../config';
import Koa from 'koa';
import send from 'koa-send';
import path from 'path';
import fs from 'fs';

export async function sendHtml(name: string, ctx: Koa.Context): Promise<void> {
    const htmlPath: string = path.resolve(config.htmlPath, name);
    if (fs.existsSync(htmlPath)) {
        await send(ctx, htmlPath);
    } else {
        // 静默失败
        return;
    }
}