import { Request, Response } from 'express';
import { appService } from '../services/app.service';
import { STATUS_CODES } from '../responses/status-codes';

class AppController {
  async sumNumbers(req: Request, res: Response): Promise<Response> {
    const numbers: Array<number> = req.body.numbers;
    const sumNumbers = await appService.sumNumbers(numbers);
    return res
      .status(STATUS_CODES.OK)
      .send({ response: `Sum of numbers is ${sumNumbers}` });
  }
}

export const appController = new AppController();
