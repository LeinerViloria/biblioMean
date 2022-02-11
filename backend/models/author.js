import mongoose from 'mongoose';

const authorSchema = mongoose.Schema({
    name:String,
    nacionality:String,
    born:Date
});

const author = mongoose.model("authors", authorSchema);

export default author;