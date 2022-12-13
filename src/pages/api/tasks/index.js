/* Dentro de la carpeta API, creo otra carpeta denominada TASKS, donde vamos a guardar las distintas 
funciones del CRUD, CREAR, MODIFICAR, ELIMINAR y BORRAR. */

import { dbConnect } from "utils/mongoose";
import Task from "models/Task";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req; // Desustructuro los req.method

  switch (method) {
    case "GET": // MOSTRAR OBJETOS
      try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "POST": // CREAR OBJETOS
      try {
        const newTask = new Task(body); // Creamos un objeto con el título de la descripción
        const savedTask = await newTask.save(); // Guardamos el objeto en una constante del
        return res.status(201).json(savedTask); // Retornamos el objeto guardado, el 201 es para cuando se crea un objeto nuevo en el backend
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
      
    default:
      return res.status(404).json({ msg: "This method is not supported" });
  }
}
