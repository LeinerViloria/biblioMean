import book from '../models/book.js';

const registerBook = async (req, res) =>{
    if(!req.body.pages || !req.body.description) return res.status(400).send({msg:"Incomplete data"});

    const schema = new book({
        name:req.body.name,
        authorID:req.body.author,
        categoryId:req.body.category,
        pages:req.body.pages,
        description:req.body.description,
        dbStatus:"available"
    });

    const result = await schema.save();

    if(!result) return res.status(500).send({msg:"Internal error"});

    res.status(200).json(result);
}

const booksList = async (req, res) => {
    const books = await book.find({$and:[{name:new RegExp(req.params["name"])}, {dbStatus:"available"}]}).populate("authorID").exec();

    if(!books) return res.status(400).send({msg:"No data found"});

    res.status(200).json(books);
}

const deleting = async (req, res) => {
    if(!req.params["_id"]) return res.status(400).send({msg:"Incomplete data"});

    const bookToDelete = await book.findByIdAndUpdate(req.params["_id"], {
        dbStatus:"no available"
    });

    return !bookToDelete ? res.status(500).send({msg:"Internal error"}) : res.status(200).send({msg:"Deleted successfully"});
}

const updatingBook = async (req, res) => {

    if(!req.body._id || !req.body.name || !req.body.pages || !req.body.description) return res.status(400).send({msg:"Incomplete data"});

    const userToUpdate = await book.findByIdAndUpdate(req.body._id, {
        name:req.body.name,
        pages:req.body.pages,
        description:req.body.description
    });

    return !userToUpdate ? res.status(500).send({msg:"Internal error"}) : res.status(200).send({msg:"Updated successfully"});

}

export default {registerBook, booksList, deleting, updatingBook};