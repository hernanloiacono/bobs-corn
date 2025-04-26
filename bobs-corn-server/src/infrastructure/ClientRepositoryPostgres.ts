import { Client } from "../domain/models/Client";
import { IClientRepository } from "../domain/repositories/ClientRepository";
import { Pool } from "pg";

export class ClientRepositoryPostgres implements IClientRepository {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async findById(clientId: string): Promise<Client | null> {
    const result = await this.pool.query(
      "SELECT id, last_purchase FROM clients WHERE id = $1",
      [clientId]
    );

    if (result.rows.length === 0) {
      return null;
    }

    const { id, last_purchase } = result.rows[0];
    return new Client(id, last_purchase ? new Date(last_purchase) : null);
  }

  async save(client: Client): Promise<void> {
    await this.pool.query(
      "INSERT INTO clients (id, last_purchase) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET last_purchase = $2",
      [client.id, client.lastPurchase]
    );
  }
}
