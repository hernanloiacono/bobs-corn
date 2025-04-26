import { IClientRepository } from "../domain/repositories/ClientRepository";
import { RateLimiter } from "../domain/services/RateLimiter";
import { Client } from "../domain/models/Client";

export class RateLimiterService {
  private clientRepository: IClientRepository;

  constructor(clientRepository: IClientRepository) {
    this.clientRepository = clientRepository;
  }

  async canPurchase(clientIp: string): Promise<boolean> {
    const client = await this.clientRepository.findByIp(clientIp);
    if (!client) {
      return true;
    }

    return RateLimiter.canPurchase(client);
  }

  async registerPurchase(clientIp: string): Promise<void> {
    const client = await this.clientRepository.findByIp(clientIp) || new Client(null, clientIp);
    RateLimiter.updatePurchase(client);
    await this.clientRepository.save(client);
  }
}
