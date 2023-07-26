import express from 'express';
import 'dotenv/config';
import { handleRoutesMiddleware } from './middlewares/handle.routes.middleware';
import { appRouter } from './routes/app.router';
import { logger } from './logger/logger';

const PORT = process.env.PORT || 3000;
const app = express();

app
  .use(express.json())
  .use(appRouter)
  .use(handleRoutesMiddleware)
  .listen(PORT, (): void => {
    logger.log('info', `App successfully run on http://localhost:${PORT}`);
  });
