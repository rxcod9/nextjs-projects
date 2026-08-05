export interface QueueJobPayload<T = any> {
  id: string;
  name: string;
  data: T;
  opts?: {
    delay?: number;
    attempts?: number;
    backoff?: { type: "fixed" | "exponential"; delay: number };
  };
}

export interface QueueAdapter {
  publishJob<T>(queueName: string, payload: QueueJobPayload<T>): Promise<void>;
  consumeJobs<T>(queueName: string, handler: (data: T) => Promise<void>): Promise<void>;
}
