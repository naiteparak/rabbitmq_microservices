import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger/logger';
import { ERROR_MESSAGES } from '../responses/messages';

export const checkNumInReqQueryMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const number = req.body.number;

  if (typeof number === 'undefined' || isNaN(number)) {
    logger.log('error', {
      error: ERROR_MESSAGES.NUMBER_ERR,
    });
    res.status(400).json({ error: ERROR_MESSAGES.NUMBER_ERR });
    return;
  }

  next();
};
