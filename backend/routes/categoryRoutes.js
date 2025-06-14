const express = require("express");
const router = express.Router();
const categories = require("../controllers/categories");

router.get("/", categories.getAllCategories);
router.get("/:categoryId", categories.getCategoryById);
router.post("/", categories.createCategory);
router.put("/:categoryId", categories.updateCategory);
router.delete("/:categoryId", categories.deleteCategory);

module.exports = router;
