import mongoose from "mongoose";
const noteSchema = new mongoose.Schema({
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
const noteModel = mongoose.model("note", noteSchema);
export default noteModel;
