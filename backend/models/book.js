import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    name:String,
    authorID:{type: mongoose.Schema.ObjectId, ref:"authors"},
    categoryId:{type:mongoose.Schema.ObjectId, ref:"categories"},
    pages:Number,
    description:String,
    dbStatus:String,
    registerDate:{type:Date, default:Date.now}
}); 

const book = mongoose.model("books", bookSchema);

export default book;