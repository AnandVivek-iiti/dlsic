import mongoose from "mongoose";

const upload = new  mongoose.Schema({
upload : {
    NoteFile : String,

}


})
export const Notes = mongoose.model('Notes', upload);