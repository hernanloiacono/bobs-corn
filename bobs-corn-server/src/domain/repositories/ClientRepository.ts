import { Client } from "../models/Client";

export interface IClientRepository {
  findById(clientId: string): Promise<Client | null>;
  save(client: Client): Promise<void>;
}
