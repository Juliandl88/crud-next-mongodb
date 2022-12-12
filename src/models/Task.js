/* En SRC creamos una carpeta MODELS donde vamos a guardar los modelos de la base de datos 
dentro de un archivo llamado TASK.JS */

import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The Task title is required "],
      unique: true,
      trim: true,
      maxlength: [40, "title cannot be grater than 40 characters"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, "title cannot be grater than 200 characters"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Task || model("Task", TaskSchema);