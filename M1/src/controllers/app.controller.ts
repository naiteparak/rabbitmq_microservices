import { Request, Response } from 'express';

class AppController {
  async sumNumbers(req: Request, res: Response): Promise<void> {
    res.send('111');
  }
}

export const appController = new AppController();
