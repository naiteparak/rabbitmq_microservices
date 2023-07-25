import { Request, Response } from 'express';
import { ERROR_MESSAGES } from '../responses/messages';
import { STATUS_CODES } from '../responses/status-codes';

export const handleRoutesMiddleware = function (
  req: Request,
  res: Response,
): void {
  res
    .status(STATUS_CODES.NOT_FOUND)
    .send({ response: ERROR_MESSAGES.ENDPOINT_NOT_FOUND });
  return;
};
