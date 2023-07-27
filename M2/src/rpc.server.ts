import amqp from 'amqplib';
import 'dotenv/config';
import { taskDistributor } from './helpers/task.distributor';
import { logger } from './logger/logger';

const main = async function (): Promise<void> {
  try {
    const connectionString =
      `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@` +
      `${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`;
    const connection = await amqp.connect(connectionString);
    const channel = await connection.createChannel();
    const QUEUE_NAME = 'rpc_queue';

    await channel.assertQueue(QUEUE_NAME, { durable: false });

    await channel.consume(QUEUE_NAME, (msg): void => {
      if (msg) {
        logger.log(
          'info',
          `Got new message: ${msg.content.toString()}, with type ${
            msg.properties.type
          }`,
        );
        const result = taskDistributor(msg);
        logger.log('info', `Fibonacci is: ${result}`);
        channel.sendToQueue(
          msg?.properties.replyTo,
          Buffer.from(result.toString()),
          { correlationId: msg?.properties.correlationId },
        );
        channel.ack(msg);
      }
    });
  } catch (error) {
    logger.log('error', error);
  }
};

main();
