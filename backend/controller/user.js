import user from '../models/user.js';
import jwt from 'jsonwebtoken';
import moment from 'moment';

const registerUser = async (req, res) =>{
    if(!req.body.name || !req.body.age) return res.status(400).send({message:"Incomplete data"});

    const schema = new user({
        name:req.body.name.toLowerCase(),
        email:req.body.email,
        password:req.body.password,
        roleId:req.body.roleId,
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

const usersList = async (req, res) => {
    //find(->Expresion regular)
    /**
     * Expresion regular es un codigo predefinido y listo para usar
     * (va a aceptar lo que se ponga aqui)
     */
    let users = await user.find({name:new RegExp(req.params["name"])}).populate("roleId").exec(); //que se traiga la lista de todos - users es un array

    return users.length===0 ? res.status(400).send({ message: "No search results" }) : res.status(200).send({ users });
} 

export default {registerUser, usersList};