import express from "express";
import * as task from "./task.controller.js";
const taskRouter = express.Router();

taskRouter.route("/").post(task.CreateTask).get(task.getAllTasks);

taskRouter
  .route("/:id")
  .put(task.updateTask)
  .delete(task.deleteTask)
  .get(task.getTask);

export default taskRouter;
