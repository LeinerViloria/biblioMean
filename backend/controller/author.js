import authorModel from '../models/author.js';

const authorRegister = async (req, res) =>{

    let schema = new authorModel({
        name:req.body.name
    });

    let result = await schema.save();

    if(!result) return res.status(500).send({message:"Server error"});

    res.status(200).send({message:result});
}

const authorsList = async (req, res) =>{
    const authors = await authorModel.find({name:new RegExp(req.params["name"])});

    if(!authors) return res.status(400).send({msg:"No data found"});

    res.status(200).json(authors);
}

const updating = async (req, res) => {
    if(!req.body._id || req.body.name) return res.status(400).send({message:"Incomplete data"});

    const authorToUpdate = await authorModel.findByIdAndUpdate(req.body._id, {
        name:req.body.name
    });

    return !authorToUpdate ? res.status(500).send({message:"Internal error"}) : res.status(200).send({message:"Updated successfully"});
}

export default {authorRegister, authorsList, updating};