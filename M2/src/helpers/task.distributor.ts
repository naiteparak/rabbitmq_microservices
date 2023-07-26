import { ConsumeMessage } from 'amqplib';
import { calculateSum } from './calculate.sum';
import { fibonacci } from './fibonacci';

export const taskDistributor = function (msg: ConsumeMessage): number | string {
  switch (msg.properties.type) {
    case 'sum':
      return calculateSum(JSON.parse(msg.content.toString()));
    case 'fib':
      return fibonacci(JSON.parse(msg.content.toString()));
    default:
      return 'There is no such type.';
  }
};
