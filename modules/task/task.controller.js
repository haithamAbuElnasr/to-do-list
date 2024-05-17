import taskModel from "../../db/models/task.model.js";
import { catchAsyncError } from "../../middleware/catchAsyncError.js";

const CreateTask = catchAsyncError(async (req, res, next) => {
  const { title, desc } = req.body;
  const result = await taskModel.insertMany({ title, desc });
  res.json(result);
});

const updateTask = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let result = await taskModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  !result &&
    next(
      new AppError(
        "Task not found or you are not authorized to perform this action"
      ),
      404
    );
  result && res.json({ message: "Success", result });
});

const getAllTasks = catchAsyncError(async (req, res) => {
  let result = await taskModel.find({});
  res.json({ message: "Success", result });
});

const getTask = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let result = await taskModel.findById(id);
  !result && next(new AppError("Task not found"), 404);
  result && res.json({ message: "Success", result });
});

const deleteTask = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let result = await taskModel.findByIdAndDelete(id);
  !result && next(new AppError("Task not found"), 404);
  result && res.json({ message: "Success", result });
});

export { CreateTask, updateTask, getAllTasks, getTask, deleteTask };
