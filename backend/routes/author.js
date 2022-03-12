import express from 'express';
import authorController from '../controller/author.js';
import authorMiddleware from '../middlewares/author.js';
import auth from '../middlewares/auth.js';
import admin from '../middlewares/admin.js';

const router = express.Router();
const existingAuthor = authorMiddleware.existingAuthor;

router.post("/authorRegister", auth, admin, existingAuthor, authorController.authorRegister);
router.get("/authorsList/:name?", auth, authorController.authorsList);
router.put("/update/", auth, admin, authorController.updating);

export default router;