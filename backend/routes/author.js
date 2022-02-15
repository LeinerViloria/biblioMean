import express from 'express';
import authorController from '../controller/author.js';

const router = express.Router();

router.post("/authorRegister", authorController.authorRegister);

export default router;