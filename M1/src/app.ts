import express from 'express';
import 'dotenv/config';
import { handleRoutesMiddleware } from './middlewares/handle.routes.middleware';

const PORT = process.env.PORT || 3000;
const app = express();

app
  .use(express.json())
  .use(handleRoutesMiddleware)
  .listen(PORT, (): void => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
