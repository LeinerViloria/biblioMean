import express from 'express';
import category from '../controller/category.js';
import cv from '../middlewares/category.js';

const router = express.Router();
const existingCategory = cv.existingCategory;

router.post("/registerCategory", existingCategory, category.registerCategory);
router.get("/categoriesList", category.getCategories);

export default router;
