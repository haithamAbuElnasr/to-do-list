import express from "express";
import userRouter from "./modules/user/user.router.js";
import { connect } from "./db/db.connection.js";
import taskRouter from "./modules/task/task.router.js";

const app = express();
app.use(express.json());
app.use("/task", taskRouter);
app.use("/user", userRouter);

app.listen(8080, (err) => {
  console.log("connected to port 8080");
  connect();
});
