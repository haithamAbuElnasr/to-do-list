import userModel from "../../db/models/user.model.js";
import { catchAsyncError } from "../../middleware/catchAsyncError.js";

const createUser = catchAsyncError(async (req, res, next) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (user) return next(new AppError("User already exist", 409));
  let result = await userModel.insetMany(req.body);
  res.json({ message: "Success", result });
});

export { createUser };
