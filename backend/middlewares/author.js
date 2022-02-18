import author from '../models/author.js';

const existingAuthor = async (req, res, next) => {
    if(!req.body.name) return res.status(400).send({message:"Incomplete data"});

    req.body.name=req.body.name.toLowerCase();

    const existingUser = await author.findOne({name:req.body.name});

    if(existingUser) return res.status(400).send({msg:"This author is already registered"});

    next();

}

const getAuthor = async (req, res, next) => {
    if(!req.body.author) return res.status(400).send({message:"Incomplete data"});

    const thisAuthor = await author.findOne({name:req.body.author});

    if(!thisAuthor) return res.status(400).send({msg:"No author found"});

    req.body.author = thisAuthor._id;
    next();
}

export default {existingAuthor, getAuthor};