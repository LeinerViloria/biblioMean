import authorModel from '../models/author.js';

const authorRegister = async (req, res) =>{

    let schema = new authorModel({
        name:req.body.name
    });

    let result = await schema.save();

    if(!result) return res.status(400).send({message:"Server error"});

    res.status(200).send({message:result});
}

const authorsList = async (req, res) =>{
    const authors = await authorModel.find({name:new RegExp(req.params["name"])});

    if(!authors) return res.status(400).send({msg:"No data found"});

    res.status(200).json(authors);
}

export default {authorRegister, authorsList};