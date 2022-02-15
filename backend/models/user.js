import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:String,
    email: String,
    password: String,
    registerDate:{type:Date, default:Date.now},
    roleId:{type:mongoose.Schema.ObjectId, ref:"roles"},
    dbStatus:Boolean,
    age:Number
});

const user = mongoose.model("users", userSchema);

export default user;