import { Request, Response } from "express";
import { RateLimiterService } from "../application/RateLimiterService";

export class ClientController {
  private rateLimiterService: RateLimiterService;

  constructor(rateLimiterService: RateLimiterService) {
    this.rateLimiterService = rateLimiterService;
  }

  async purchaseCorn(req: Request, res: Response): Promise<void> {
    const clientId = req.body.clientId;

    if (!clientId) {
      res.status(400).send("Client ID is required");
      return;
    }

    const canPurchase = await this.rateLimiterService.canPurchase(clientId);
    if (!canPurchase) {
      res.status(429).send("Too Many Requests");
      return;
    }

    await this.rateLimiterService.registerPurchase(clientId);
    res.status(200).send("🌽 Corn purchased successfully!");
  }
}
