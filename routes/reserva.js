import express from "express"
import { crearReserva } from "../controllers/reservaController.js"

const router = express.Router();

router.post("/reservar", crearReserva);

export default router;