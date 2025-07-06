import express from "express";
import Reserva from "../models/reserva.js";

const router = express.Router();

// GET - Ver todos los números reservados
router.get("/reservas", async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener reservas" });
  }
});

// POST - Reservar un número
router.post("/reservar", async (req, res) => {
  const { numero, nombre, telefono } = req.body;

  if (!numero || !nombre || !telefono) {
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }

  try {
    const existe = await Reserva.findOne({ numero });
    if (existe) {
      return res.status(400).json({ error: "Número ya reservado" });
    }

    const nuevaReserva = new Reserva({ numero, nombre, telefono });
    await nuevaReserva.save();
    res.status(201).json(nuevaReserva);
  } catch (error) {
    res.status(500).json({ error: "Error al reservar el número" });
  }
});

export default router;
