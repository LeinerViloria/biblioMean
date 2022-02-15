import role from '../controller/role.js';
import express from 'express';

const router = express.Router();

router.post("/register", role.registerRole);

export default router;