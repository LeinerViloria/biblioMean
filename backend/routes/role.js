import role from '../controller/role.js';
import express from 'express';
import roleMiddleware from '../middlewares/role.js';

const router = express.Router();
const existingRoleName = roleMiddleware.existingRoleName;

router.post("/register", existingRoleName, role.registerRole);

export default router;