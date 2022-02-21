import user from '../controller/user.js';
import express from 'express';
import userMiddleware from '../middlewares/user.js';
import roleMiddleware from '../middlewares/role.js';

const router = express.Router();
const existingUser = userMiddleware.existingUser;
const existingUserRole = roleMiddleware.existingUserRole;
const encodePassword = userMiddleware.encodePassword;

router.post("/register", existingUser, existingUserRole, encodePassword, user.registerUser);
router.get("/usersList/:name?", user.usersList);
router.get("/usersAdminList/:name?", user.usersListByAdmin);
router.post("/login", user.login);
router.put("/delete/:_id", user.deletingUser);
router.put("/update", user.updatingUser);

export default router;