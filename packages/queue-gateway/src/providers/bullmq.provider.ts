import { Queue, Worker } from "bullmq";
import { QueueAdapter, QueueJobPayload } from "../types";

export class BullMQProvider implements QueueAdapter {
  private queues = new Map<string, Queue>();

  constructor(private redisUrl: string) {}

  private getQueue(queueName: string): Queue {
    if (!this.queues.has(queueName)) {
      const queue = new Queue(queueName, {
        connection: { url: this.redisUrl },
      });
      this.queues.set(queueName, queue);
    }
    return this.queues.get(queueName)!;
  }

  async publishJob<T>(queueName: string, payload: QueueJobPayload<T>): Promise<void> {
    const queue = this.getQueue(queueName);
    await queue.add(payload.name, payload.data, {
      jobId: payload.id,
      delay: payload.opts?.delay,
      attempts: payload.opts?.attempts ?? 3,
    });
  }

  async consumeJobs<T>(queueName: string, handler: (data: T) => Promise<void>): Promise<void> {
    new Worker<T>(
      queueName,
      async (job) => {
        await handler(job.data);
      },
      { connection: { url: this.redisUrl } }
    );
  }
}
