import express from 'express';
import category from '../controller/category.js';
import cv from '../middlewares/category.js';
import auth from '../middlewares/auth.js';
import admin from '../middlewares/admin.js';

const router = express.Router();
const existingCategory = cv.existingCategory;

router.post("/registerCategory", auth, admin, existingCategory, category.registerCategory);
router.get("/categoriesList", auth, category.getCategories);

export default router;
