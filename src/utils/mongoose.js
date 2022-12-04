import { connect, connection } from "mongoose";

export async function  dbConnect(){ // Funcion para conectar

    const db = await connect(process.env.MONGODB_URL)
    
    console.log(db.connection[0].readyState)
}

connection.on("connected", ()=>{
    console.log("MongoDB is connected")
})

connection.on("error", (err)=>{
    console.log(err)
})