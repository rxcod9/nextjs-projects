import { QueueAdapter } from "./types";
import { BullMQProvider } from "./providers/bullmq.provider";
import { RabbitMQProvider } from "./providers/rabbitmq.provider";

export * from "./types";

export function getQueueProvider(): QueueAdapter {
  const provider = process.env.QUEUE_PROVIDER || "bullmq";

  if (provider === "rabbitmq") {
    return new RabbitMQProvider(process.env.RABBITMQ_URL || "amqp://rabbitadmin:rabbitpassword@localhost:5672");
  }

  return new BullMQProvider(process.env.REDIS_URL || "redis://:redispassword@localhost:6379");
}
