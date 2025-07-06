import moongoose from "mongoose";

const reservaSchema = new moongoose.Schema({
    nombre: String,
    dni: String,
    numeros: [Number],
    estado: { type: String, default: "pendiente"},
    mp_preference_id: String
});

export default moongoose.model("Reserva". reservaSchema);