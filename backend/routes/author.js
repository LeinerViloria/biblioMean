import express from 'express';
import authorController from '../controller/author.js';
import authorMiddleware from '../middlewares/author.js';

const router = express.Router();
const existingAuthor = authorMiddleware.existingAuthor;

router.post("/authorRegister", existingAuthor, authorController.authorRegister);
router.get("/authorsList/:name?", authorController.authorsList);
router.put("/update/", authorController.updating);

export default router;