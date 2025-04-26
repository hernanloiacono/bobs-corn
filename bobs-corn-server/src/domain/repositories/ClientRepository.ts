import { Client } from "../models/Client";

export interface IClientRepository {
  findByIp(ip: string): Promise<Client | null>;
  save(client: Client): Promise<void>;
}