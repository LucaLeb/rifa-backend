import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import reservaRoutes from "./routes/reserva.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", reservaRoutes);

// Conexion a MongoDB y arranque del servidor
mongoose.connect(process.env.MONGO_URI)
