import express from 'express';
import {createUser} from './user.controller.js'
const userRouter=express.Router();

userRouter.post('/',createUser);


export default userRouter;