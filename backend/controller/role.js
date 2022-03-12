import role from '../models/role.js';

const registerRole = async (req, res) => {

    const schema = new role({
        name:req.body.name
    });

    const result = await schema.save();

    if(!result) return res.status(500).send({message:"Internal error"});

    res.status(200).send({message:result});
}

const userRole = async (req, res) => {
    const roleInfo = await role.findById(req.user.existingUser);
  
    return !roleInfo
      ? res.status(500).send({ msg: "Role not found" })
      : res.status(200).send({name: roleInfo.name});
  };

export default {registerRole, userRole};