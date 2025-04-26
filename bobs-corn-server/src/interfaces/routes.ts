import { Router } from "express";
import { ClientController } from "./ClientController";
import { RateLimiterService } from "../application/RateLimiterService";
import { ClientRepositoryPostgres } from "../infrastructure/ClientRepositoryPostgres";
import { pool } from "../config/database";

const clientRepository = new ClientRepositoryPostgres(pool);
const rateLimiterService = new RateLimiterService(clientRepository);
const clientController = new ClientController(rateLimiterService);

const router = Router();

router.post("/purchase-corn", (req, res) => clientController.purchaseCorn(req, res));

export { router };
