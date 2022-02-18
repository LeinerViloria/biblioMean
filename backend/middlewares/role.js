import role from '../models/role.js';

const existingRoleName = async (req, res, next) => {
    if(!req.body.name) return res.status(400).send({message:"Incomplete data"});

    req.body.name=req.body.name.toLowerCase();
    
    //Verifico que ese rol no esté
    const existingRole = await role.findOne({name:req.body.name});

    if(existingRole) return res.status(400).send({message:"This role is already registered"});

    next();
}

const existingUserRole = async (req, res, next) =>{
    const userRole = await role.findOne({name:"user"});

    if(!userRole) return res.status(500).send({message:"No role asigned"});

    req.body.roleId = userRole._id;

    next();
}

export default {existingRoleName, existingUserRole};