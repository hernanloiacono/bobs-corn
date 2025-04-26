import { Request, Response } from "express";
import { RateLimiterService } from "../application/RateLimiterService";

export class ClientController {
  private rateLimiterService: RateLimiterService;

  constructor(rateLimiterService: RateLimiterService) {
    this.rateLimiterService = rateLimiterService;
  }

  async purchaseCorn(req: Request, res: Response): Promise<void> {
    
    const ip = req.ip;

    if (!ip) {
      res.status(400).send("IP address not found");
      return;
    }

    const canPurchase = await this.rateLimiterService.canPurchase(ip);
    if (!canPurchase) {
      res.status(429).send("Too Many Requests");
      return;
    }

    await this.rateLimiterService.registerPurchase(ip);
    res.status(200).send("🌽 Corn purchased successfully!");
  }
}
