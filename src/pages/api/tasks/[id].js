/* Este archivo se crea para generar rutas dinámicas, de esta format
podemos obtener una tarea en particular rastreandola por su ID*/

import { dbConnect } from "utils/mongoose"; // importamos la conexión a la bd
import Task from "models/Task"; // importo el modelo de tares

dbConnect(); // Conectamos a la base de datos

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  console.log(req.query); // En el argumento van los datos que varian o los de la consulta

  const {
    method,
    body,
    query: { id },
  } = req; // desustructuro para no tener que tipear de más

  switch (method) {
    case "GET": // mostrar una tarea
      try {
        const task = await Task.findById(id); // busca la tarea
      if (!task) return res.status(404).json({ msg: "Task not found" }); // si no encuentra la tarea
      return res.status(200).json(task);
      } catch (error) {
            return res.status(500).json({ msg: error.message }); // si no encuentra la tarea para mostrar
      } 

    case "PUT": // actualizar una tarea
    case "DELETE": // borrar una tarea
      try {
           const deleteTask =  await Task.findByIdAndDelete(id);
           if(!deleteTask) return res.status(404).json({msg: "Task not found"});
           return res.status(204).json()
      } catch (error) {
        return res.status(400).json({ msg: error.message }); // si no encuentra la tarea para borrar
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
