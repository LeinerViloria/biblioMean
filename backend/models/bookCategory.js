import mongoose from 'mongoose';

/**
 * Un libro puede pertenecer a muchas categorias
 */

const bookCategorySchema = mongoose.Schema({
    bookId:{type:mongoose.Schema.ObjectId, ref="books"},
    categoryId:{type:mongoose.Schema.ObjectId, ref="categories"}
});

const bookCategory = mongoose.model("booksCategories", bookCategorySchema);

export default bookCategory;