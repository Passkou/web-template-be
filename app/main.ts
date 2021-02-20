import Koa from 'koa';
import apiRouter from './routers/api';
import Logger from 'koa-colorful-logger';
import serveRobots from './middlewares/serve-robots';
import serveFavicon from './middlewares/serve-favicon';

const app: Koa = new Koa();

const logger = new Logger({output: false});

app.use(logger.middleware());

// robots.txt
app.use(serveRobots);

// favicon.ico
app.use(serveFavicon);

// API Router
app.use(apiRouter.routes());


app.listen(4000, 'localhost', undefined, () => {
    console.log('服务器运行在 http://localhost:4000');
});