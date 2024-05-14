import userModel from "../../db/models/user.model.js";

export const createUser = async function (req, res, next) {
    console.log(req.body)
  try {
    const result = await userModel.insertMany(req.body);
    res.json(result);
  } catch (err) {
    res.json({ err });
  }
};
