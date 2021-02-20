import Koa from 'koa';
import apiRouter from './routers/api';
import Logger from 'koa-colorful-logger';
import serveRobots from './middlewares/serve-robots';
import serveFavicon from './middlewares/serve-favicon';
import koaEjs from 'koa-ejs';
import * as errorHandler from './middlewares/error-handler';
import path from 'path';

const app: Koa = new Koa();

const logger = new Logger({output: false});

app.use(logger.middleware());

// Error
errorHandler.appError(app);

// robots.txt
app.use(serveRobots);

// favicon.ico
app.use(serveFavicon);

// ejs
koaEjs(app, {
    root: path.join(__dirname, 'view'),
    viewExt: 'ejs',
    layout: false,
    debug: process.env.NODE_ENV === 'development'
});

// API Router
app.use(apiRouter.routes());

// 404
app.use(errorHandler.err404);

app.listen(4000, 'localhost', undefined, () => {
    console.log('服务器运行在 http://localhost:4000');
});