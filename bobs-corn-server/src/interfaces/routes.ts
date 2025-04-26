import { Router } from "express";
import { ClientController } from "./ClientController";
import { RateLimiterService } from "../application/RateLimiterService";
import { ClientRepositoryPostgres } from "../infrastructure/ClientRepositoryPostgres";
import { Pool } from "pg";

const pool = new Pool(); // Ajusta las configuraciones para tu base de datos

const clientRepository = new ClientRepositoryPostgres(pool);
const rateLimiterService = new RateLimiterService(clientRepository);
const clientController = new ClientController(rateLimiterService);

const router = Router();

router.post("/purchase-corn", (req, res) => clientController.purchaseCorn(req, res));

export { router };
