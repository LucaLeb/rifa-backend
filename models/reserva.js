import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
    nombre: String,
    dni: String,
    numeros: [Number],
    estado: { type: String, default: "pendiente"},
    mp_preference_id: String
});

export default mongoose.model("reserva". reservaSchema);
