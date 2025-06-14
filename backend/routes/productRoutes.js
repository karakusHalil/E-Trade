const express = require("express");
const router = express.Router();
const products = require("../controllers/products");

router.get("/", products.getAllProducts);
router.get("/:productId", products.getProductById);
router.post("/", products.createProduct);
router.put("/:productId", products.updateProduct);
router.delete("/:productId", products.deleteProduct);

module.exports = router;
