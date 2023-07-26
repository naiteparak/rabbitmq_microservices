import { NextFunction, Request, Response } from 'express';
import { STATUS_CODES } from '../responses/status-codes';
import { ERROR_MESSAGES } from '../responses/messages';
import { logger } from '../logger/logger';

export const checkArrayOfNumbers = function (
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const arrayOfNums = req.body.numbers;
  if (!Array.isArray(arrayOfNums)) {
    logger.log('error', {
      error: ERROR_MESSAGES.ARRAY_ERR,
    });
    res
      .status(STATUS_CODES.BAD_REQUEST)
      .send({ response: ERROR_MESSAGES.ARRAY_ERR });
    return;
  }

  for (const element of arrayOfNums) {
    if (typeof element !== 'number' || isNaN(element)) {
      logger.log('error', {
        error: ERROR_MESSAGES.ARRAY_ERR,
      });
      res
        .status(STATUS_CODES.BAD_REQUEST)
        .send({ response: ERROR_MESSAGES.ARRAY_ERR });
      return;
    }
  }

  next();
};
