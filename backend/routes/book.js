import express from 'express';
import book from '../controller/book.js';
import bv from '../middlewares/book.js';
import av from '../middlewares/author.js';
import cv from '../middlewares/category.js';
import admin from '../middlewares/admin.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

const existingBook = bv.existingBook;
const getAuthor = av.getAuthor;
const getCategory = cv.getCategory;

router.post("/registerBook", auth, admin, existingBook, getAuthor, getCategory, book.registerBook);
router.get("/booksList/:name?", auth, book.booksList);
router.put("/delete/:_id", auth, admin, book.deleting);
router.put("/update/", auth, admin, book.updatingBook);


export default router; 