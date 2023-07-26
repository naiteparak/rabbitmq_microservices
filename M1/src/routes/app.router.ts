import { Router } from 'express';
import { checkArrayOfNumbers } from '../middlewares/check.array.of.nums.middleware';
import { appController } from '../controllers/app.controller';
import { checkNumInReqQueryMiddleware } from '../middlewares/check.num.in.req.query.middleware';

export const appRouter = Router();

appRouter
  .post('/sumNumbers', checkArrayOfNumbers, appController.sumNumbers)
  .post('/fibonacci', checkNumInReqQueryMiddleware, appController.fibonacci);
