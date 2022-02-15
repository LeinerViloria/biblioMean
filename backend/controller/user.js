import user from '../models/user.js';
import role from '../models/role.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import moment from 'moment';

const registerUser = async (req, res) =>{
    if(!req.body.name || !req.body.email || !req.body.password || !req.body.age) return res.status(400).send({message:"Incomplete data"});

    const existingUser = await user.findOne({email:req.body.email});

    if(existingUser) return res.status(400).send({message:"This user is already registered"});

    const userRole = await role.findOne({name:"user"});

    if(!userRole) return res.status(500).send({message:"No role asigned"});

    const passHash = await bcrypt.hash(req.body.password, 10);

    const schema = new user({
        name:req.body.name,
        email:req.body.email,
        password:passHash,
        roleId:userRole._id,
        dbStatus:true,
        age:req.body.age
    });

    const result = await schema.save();

    if(!result) return res.status(500).send({message:"Internal error"});

    try {
        return res.status(200).json({
            token:jwt.sign({
                _id:result._id,
                name:result.name,
                age:result.age,
                roleId:result.roleId,
                iat:moment().unix()
            }, process.env.SK_JWT)
        });
    } catch (error) {
        return res.status(500).send({message:"Error with jwt"});
    }
}

export default {registerUser};