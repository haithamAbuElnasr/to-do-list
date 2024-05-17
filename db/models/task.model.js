import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.ObjectId,
    ref: "user",
  },
});
const taskModel = mongoose.model("note", taskSchema);
export default taskModel;
