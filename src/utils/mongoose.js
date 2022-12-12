/* Dentro de la carpeta SRC creamos una nueva denominada UTILS o se puede llamar CONFIG 
donde vamos a crear un archivo para configurar a la base de datos, lo vamos a llamar MONGOOSE.JS e 
importamos un módulo para conectarse a la base de datos y creamos una función DBCONNECT para iniciarlizar 
la conexión, avisando cuando conecta y cuando genera un error. */



import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function dbConnect() {     // Funcion para crear la conexión con Mongodb
  const db = await connect(process.env.MONGODB_URI); // Puede ser URI
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => console.log("Mongodb connected to db")); // Evento para saber si hubo conexión

connection.on("error", (err) => console.error("Mongodb Errro:", err.message)); // Evento para saber si hubo un error