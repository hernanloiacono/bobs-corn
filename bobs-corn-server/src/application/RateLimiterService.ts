import { ClientRepositoryPostgres } from "../infrastructure/ClientRepositoryPostgres";
import { RateLimiter } from "../domain/services/RateLimiter";
import { Client } from "../domain/models/Client";

export class RateLimiterService {
  private clientRepository: ClientRepositoryPostgres;

  constructor(clientRepository: ClientRepositoryPostgres) {
    this.clientRepository = clientRepository;
  }

  async canPurchase(clientId: string): Promise<boolean> {
    const client = await this.clientRepository.findById(clientId);
    if (!client) {
      return true; // Si el cliente no existe, puede comprar sin restricciones
    }

    return RateLimiter.canPurchase(client);
  }

  async registerPurchase(clientId: string): Promise<void> {
    const client = await this.clientRepository.findById(clientId) || new Client(clientId);
    RateLimiter.updatePurchase(client);
    await this.clientRepository.save(client);
  }
}
