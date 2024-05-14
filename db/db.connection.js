import mongoose from "mongoose";

export const connect = async function () {
  let uri = "mongodb://127.0.0.1:27017/to-to-list";

  await mongoose.connect(uri);
};
