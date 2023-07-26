import { NextFunction, Request, Response } from 'express';

export const checkNumInReqQueryMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const number = req.body.number;

  if (typeof number === 'undefined' || isNaN(number)) {
    res
      .status(400)
      .json({ error: 'The number parameter must be a valid number.' });
    return;
  }

  next();
};
