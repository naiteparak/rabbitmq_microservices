import { Request, Response } from 'express';

class AppController {
  async sumNumbers(req: Request, res: Response): Promise<void> {}
}

export const appController = new AppController();
