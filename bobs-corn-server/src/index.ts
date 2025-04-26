import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./interfaces/routes";

dotenv.config();

const app = express();

app.set('trust proxy', true);

const PORT = Number(process.env.PORT);

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST"]
}));

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});