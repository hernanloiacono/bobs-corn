import { Client } from "../domain/models/Client";
import { IClientRepository } from "../domain/repositories/ClientRepository";
import { Pool } from "pg";

export class ClientRepositoryPostgres implements IClientRepository {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async findByIp(ip: string): Promise<Client | null> {
    const result = await this.pool.query(
      "SELECT id, ip, last_purchase FROM clients WHERE ip = $1",
      [ip]
    );

    if (result.rows.length === 0) {
      return null;
    }

    const { id, ip: clientIp, last_purchase } = result.rows[0];
    return new Client(id, clientIp, last_purchase ? new Date(last_purchase) : null);
  }

  async save(client: Client): Promise<void> {
    await this.pool.query(
      `INSERT INTO clients (ip, last_purchase)
      VALUES ($1, $2)
      ON CONFLICT (ip) DO UPDATE
      SET last_purchase = $2`,
      [client.ip, client.lastPurchase]
    );
  }
}
