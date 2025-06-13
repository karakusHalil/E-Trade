const express = require("express");
const router = express.Router();
const Product = require("../models/Product");



//CREATE PRODUCT START
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
});
//CREATE PRODUCT END





//GET ALL PRODUCTS START
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
});
//GET ALL PRODUCTS END





//GET PRODUCT BY ID START
router.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ error: "Ürün Bulunamadı !" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
});
//GET PRODUCT BY ID END



//PUT PRODUCT START
router.put("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const updateProduct = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ error: "Ürün Bulunamadı !" });
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateProduct,
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
});
//PUT PRODUCT END




//DELETE PRODUCT START
router.delete("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      res.status(404).json({ error: "Ürün Bulunamadı !" });
    }
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
});
//DELETE PRODUCT END



module.exports = router;
