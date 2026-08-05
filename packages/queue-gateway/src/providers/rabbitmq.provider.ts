import amqp from "amqplib";
import { QueueAdapter, QueueJobPayload } from "../types";

export class RabbitMQProvider implements QueueAdapter {
  constructor(private amqpUrl: string) {}

  async publishJob<T>(queueName: string, payload: QueueJobPayload<T>): Promise<void> {
    const conn = await amqp.connect(this.amqpUrl);
    const channel = await conn.createChannel();

    await channel.assertQueue(queueName, { durable: true });
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(payload.data)), {
      persistent: true,
      messageId: payload.id,
    });

    await channel.close();
    await conn.close();
  }

  async consumeJobs<T>(queueName: string, handler: (data: T) => Promise<void>): Promise<void> {
    const conn = await amqp.connect(this.amqpUrl);
    const channel = await conn.createChannel();

    await channel.assertQueue(queueName, { durable: true });
    channel.prefetch(10);

    channel.consume(queueName, async (msg) => {
      if (msg) {
        try {
          const data = JSON.parse(msg.content.toString());
          await handler(data);
          channel.ack(msg);
        } catch (err) {
          channel.nack(msg, false, false);
        }
      }
    });
  }
}
