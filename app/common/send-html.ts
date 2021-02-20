import config from '../../config';
import Koa from 'koa';
import send from 'koa-send';
import path from 'path';
import fs from 'fs';

export function sendHtml(name: string): void {
    const htmlPath: string = path.resolve(config.htmlPath, name);
    if (fs.existsSync(htmlPath)) {

    } else {
        
    }
}