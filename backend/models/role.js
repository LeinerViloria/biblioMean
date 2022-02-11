import mongoose from "mongoose";

const roleScheme = mongoose.Schema({
    name:String,
    registerDate:{type:Date, default:Date.now}
});

const role = mongoose.model("roles", roleScheme);

export default role;