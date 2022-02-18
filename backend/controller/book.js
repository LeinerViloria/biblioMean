import book from '../models/book.js';

const registerBook = async (req, res) =>{
    if(!req.body.pages || !req.body.description) return res.status(400).send({msg:"Incomplete data"});

    const schema = new book({
        name:req.body.name,
        authorID:req.body.author,
        categoryId:req.body.category,
        pages:req.body.pages,
        description:req.body.description
    });

    const result = await schema.save();

    if(!result) return res.status(500).send({msg:"Internal error"});

    res.status(200).json(result);
}

const booksList = async (req, res) => {
    const books = await book.find({name:new RegExp(req.params["name"])}).populate("authorID").exec();

    if(!books) return res.status(400).send({msg:"No data found"});

    res.status(200).json(books);
}

export default {registerBook, booksList};