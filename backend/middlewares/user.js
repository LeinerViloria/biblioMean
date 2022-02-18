import user from '../models/user.js';
import bcrypt from 'bcrypt';

const existingUser = async (req, res, next)=>{
    if(!req.body.email) return res.status(400).send({message:"Incomplete data"});

    const existingUser = await user.findOne({email:req.body.email});

    if(existingUser) return res.status(400).send({message:"This user is already registered"});

    next();
}

const encodePassword = async (req, res, next) =>{
    if(!req.body.password) return res.status(400).send({message:"Incomplete data"});

    const passHash = await bcrypt.hash(req.body.password, 10);

    req.body.password=passHash;
    next();
}

export default {existingUser, encodePassword};