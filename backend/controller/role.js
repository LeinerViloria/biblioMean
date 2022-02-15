import role from '../models/role.js';

const registerRole = async (req, res) => {
    if(!req.body.name) return res.status(400).send({message:"Incomplete data"});

    //Verifico que ese rol no esté
    const existingRole = await role.findOne({name:req.body.name});

    if(existingRole) return res.status(400).send({message:"This role is already registered"});

    const schema = new role({
        name:req.body.name
    });

    const result = await schema.save();

    if(!result) return res.status(500).send({message:"Internal error"});

    res.status(200).send({message:result});
}

export default {registerRole};