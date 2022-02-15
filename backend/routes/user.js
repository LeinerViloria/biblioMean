import user from '../controller/user.js';
import express from 'express';

const router = express.Router();

router.post("/register", user.registerUser);

export default router;