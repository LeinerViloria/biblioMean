import role from '../controller/role.js';
import express from 'express';
import roleMiddleware from '../middlewares/role.js';
import auth from '../middlewares/auth.js';
import admin from '../middlewares/admin.js';

const router = express.Router();
const existingRoleName = roleMiddleware.existingRoleName;

router.post("/register",  auth, admin, existingRoleName, role.registerRole);
//Me traera el rol del usuario
router.get("/userRole", auth, role.userRole);

export default router;