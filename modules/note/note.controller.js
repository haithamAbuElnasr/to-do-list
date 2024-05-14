
import noteModel from '../../db/models/note.model.js'
export const createNote= async function  createNote(req,res,next) {
    const {title,desc}=req.body;
    const result= await noteModel.insertMany({title,desc});
    res.json(result);

}