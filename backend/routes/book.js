import express from 'express';
import book from '../controller/book.js';
import bv from '../middlewares/book.js';
import av from '../middlewares/author.js';
import cv from '../middlewares/category.js';

const router = express.Router();

const existingBook = bv.existingBook;
const getAuthor = av.getAuthor;
const getCategory = cv.getCategory;

router.post("/registerBook", existingBook, getAuthor, getCategory, book.registerBook);
router.get("/booksList/:name?", book.booksList);

export default router; 