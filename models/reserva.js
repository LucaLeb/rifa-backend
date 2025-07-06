import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
  numero: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  telefono: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

export default mongoose.model("Reserva", reservaSchema);