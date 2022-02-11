import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:String,
    registerDate:{type:Date, default:Date.now},
    roleId:{type:mongoose.Schema.ObjectId, ref="roles"},
    dbStatus:true,
    age:Number
});

const user = mongoose.model("users", userSchema);

export default user;