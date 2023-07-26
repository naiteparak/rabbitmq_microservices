import { Request, Response } from 'express';
import { ERROR_MESSAGES } from '../responses/messages';
import { STATUS_CODES } from '../responses/status-codes';
import { logger } from '../logger/logger';

export const handleRoutesMiddleware = function (
  req: Request,
  res: Response,
): void {
  logger.log('error', {
    error: ERROR_MESSAGES.ENDPOINT_NOT_FOUND,
  });
  res
    .status(STATUS_CODES.NOT_FOUND)
    .send({ response: ERROR_MESSAGES.ENDPOINT_NOT_FOUND });
  return;
};
