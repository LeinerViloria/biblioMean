import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    name:String
});

const category = mongoose.model("categories", categorySchema);

export default category;