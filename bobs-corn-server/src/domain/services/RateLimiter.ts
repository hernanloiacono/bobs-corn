import { Client } from "../models/Client";

export class RateLimiter {
  private static rateLimit = 60 * 1000;//ms

  static canPurchase(client: Client): boolean {
    if (!client.lastPurchase) {
      return true;
    }

    const now = new Date();
    const timeDifference = now.getTime() - client.lastPurchase.getTime();

    return timeDifference >= RateLimiter.rateLimit;
  }

  static updatePurchase(client: Client): void {
    client.lastPurchase = new Date();
  }
}
