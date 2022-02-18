import mongoose from 'mongoose';

const authorSchema = mongoose.Schema({
    name:String
});

const author = mongoose.model("authors", authorSchema);

export default author;