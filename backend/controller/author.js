import authorModel from '../models/author.js';

const authorRegister = async (req, res) =>{
    if(!req.body.name & !req.body.nacionality) return res.status(400).send({message:"Incomplete data"});

    let schema = new authorModel({
        name:req.body.name,
        nacionality:req.body.nacionality
    });

    let result = await schema.save();

    if(!result) return res.status(400).send({message:"Server error"});

    res.status(200).send({message:result});
}

export default {authorRegister};