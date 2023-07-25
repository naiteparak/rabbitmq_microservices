import { Router } from 'express';
import { checkArrayOfNumbers } from '../middlewares/check.array.of.nums.middleware';
import { appController } from '../controllers/app.controller';

export const appRouter = Router();

appRouter.post('/sumNumbers', checkArrayOfNumbers, appController.sumNumbers);
