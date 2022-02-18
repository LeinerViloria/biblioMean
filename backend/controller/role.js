import role from '../models/role.js';

const registerRole = async (req, res) => {

    const schema = new role({
        name:req.body.name
    });

    const result = await schema.save();

    if(!result) return res.status(500).send({message:"Internal error"});

    res.status(200).send({message:result});
}

export default {registerRole};