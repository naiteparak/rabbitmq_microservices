import { connect } from 'amqplib';
import { randomUUID } from 'crypto';
import 'dotenv/config';
import { logger } from '../logger/logger';

class AppService {
  private connectionString =
    `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@` +
    `${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`;
  private queue = 'rpc_queue';

  async sumNumbers(numbers: Array<number>): Promise<number> {
    const connection = await connect(this.connectionString);
    const channel = await connection.createChannel();
    const replyQueue = await channel.assertQueue('', { exclusive: true });
    const correlationId = randomUUID();

    logger.log('info', `[x] Requesting for sum of numbers: ${numbers}`);

    channel.sendToQueue(this.queue, Buffer.from(JSON.stringify(numbers)), {
      correlationId: correlationId,
      replyTo: replyQueue.queue,
      type: 'sum',
    });

    return new Promise((resolve): void => {
      channel.consume(
        replyQueue.queue,
        (msg): void => {
          if (msg?.properties.correlationId === correlationId) {
            const sum = parseInt(msg.content.toString(), 10);
            logger.log('info', `[.] Got sum: ${sum}`);
            connection.close();
            resolve(sum);
          }
        },
        { noAck: true },
      );
    });
  }

  async fibonacci(number: number) {
    const connection = await connect(this.connectionString);
    const channel = await connection.createChannel();
    const replyQueue = await channel.assertQueue('', { exclusive: true });
    const correlationId = randomUUID();

    logger.log('info', `[x] Requesting for fibonacci of number: ${number}`);

    channel.sendToQueue(this.queue, Buffer.from(JSON.stringify(number)), {
      correlationId: correlationId,
      replyTo: replyQueue.queue,
      type: 'fib',
    });

    return new Promise((resolve): void => {
      channel.consume(
        replyQueue.queue,
        (msg): void => {
          if (msg?.properties.correlationId === correlationId) {
            const sum = parseInt(msg.content.toString(), 10);
            logger.log('info', `[.] Got fibonacci: ${sum}`);

            connection.close();
            resolve(sum);
          }
        },
        { noAck: true },
      );
    });
  }
}

export const appService = new AppService();
