import { dbConnect } from "utils/mongoose";
import Task from "models/Task";

dbConnect();

export default async function handler(req, res) {

  const { method, body } = req  // Desustructuro los req.method

  switch (method) {
    case "GET":
      const tasks = await Task.find();
      return res.status(200).json(tasks);

    case "POST":
      const newTask = new Task(body) // Creamos un objeto con el título de la descripción
      const savedTask = await newTask.save(); // Guardamos el objeto en una constante del
      return res.status(201).json(savedTask); // Retornamos el objeto guardado

    default:
      return res.status(404).json({ msg: "This method is not supported" });
  }
}
