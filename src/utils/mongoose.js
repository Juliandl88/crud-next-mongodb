import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function dbConnect() {     // Funcion para crear la conexión con Mongodb
  const db = await connect(process.env.MONGODB_URL); // Puede ser URI
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => console.log("Mongodb connected to db")); // Evento para saber si hubo conexión

connection.on("error", (err) => console.error("Mongodb Errro:", err.message)); // Evento para saber si hubo un error