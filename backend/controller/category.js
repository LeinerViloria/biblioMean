import cat from '../models/category.js';

const registerCategory = async (req, res) =>{
    const schema = new cat({
        name:req.body.name
    });
    const result = await schema.save();

    if(!result) return res.status(500).send({msg:"Internal error"});

    res.status(500).json(result);
}

const getCategories = async (req, res) =>{
    const categories = await cat.find();
    if(!categories) return res.status(400).send({msg:"No categories found"});
    res.status(200).json(categories);
}

export default {registerCategory, getCategories};