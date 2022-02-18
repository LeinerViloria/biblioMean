import cat from '../models/category.js';

const existingCategory = async (req, res, next)=>{
    if(!req.body.name) return res.status(400).send({msg:"Incomplete data"});

    req.body.name=req.body.name.toLowerCase();

    const existingName = await cat.findOne({name:req.body.name});

    if(existingName) return res.status(400).send({msg:"This category is already registered"});

    next();

} 

const getCategory = async (req, res, next) => {
    if(!req.body.category) return res.status(400).send({message:"Incomplete data"});

    const thisCat = await cat.findOne({name:req.body.category});

    if(!thisCat) return res.status(400).send({msg:"No category found"});

    req.body.category = thisCat._id;
    
    next();
}

export default {existingCategory, getCategory};