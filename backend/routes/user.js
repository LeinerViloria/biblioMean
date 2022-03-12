import user from '../controller/user.js';
import express from 'express';
import userMiddleware from '../middlewares/user.js';
import roleMiddleware from '../middlewares/role.js';
import auth from '../middlewares/auth.js';
import admin from '../middlewares/admin.js';

const router = express.Router();
const existingUser = userMiddleware.existingUser;
const existingUserRole = roleMiddleware.existingUserRole;
const encodePassword = userMiddleware.encodePassword;

router.post("/register", existingUser, existingUserRole, encodePassword, user.registerUser);
//Admin
router.get("/usersList/:name?", auth, admin, user.usersList);
//Admin
router.get("/usersAdminList/:name?", auth, admin, user.usersListByAdmin);
router.post("/login", user.login);
router.put("/delete/:_id", auth, user.deletingUser);
router.put("/update", auth, user.updatingUser);

export default router;