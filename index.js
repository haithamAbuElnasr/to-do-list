import express from 'express';
import noteRouter from './modules/note/note.router.js';
import userRouter from './modules/user/user.router.js';
import { connect } from './db/db.connection.js';

const app=express();
app.use(express.json());
app.use('/note',noteRouter);
app.use('/user',userRouter);

app.listen(8080,err=>{
    console.log("connected to port 8080");
   connect()})