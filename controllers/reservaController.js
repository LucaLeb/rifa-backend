import Reserva from "../models/reserva";

export async function crearReserva(req, res) {
    const { nombre, dni, numeros } = req.body;

    if (!nombre || !dni || !Array.isArray(numeros) || numeros.length === 
    0) {
        return res.status(400).json({ error: "Falta Datos"});
    }
    

    //verificamos si algun numero ya esta reservado
    const ocupados = yaReservados.flatMap(r => r.numeros.filter(n => numeros.includes(n)));

    if (ocupados.length > 0) {
        return res.status(400).json({
            error: 'Los siguientes números ya estan reservados: ${ocupados.join(", ")}'
        });
    }

    const nuevaReserva = new Reserva({
        nombre,
        dni,
        numeros,
        estado: "pendiene"
    });

    await nuevaReserva.save();

    res.json({
        mensaje: "Reserva creada con éxito",
        reserva: {
            nombre,
            dni,
            numeros
        }
    });
}
