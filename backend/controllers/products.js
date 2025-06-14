const ProductRepository = require("../repositories/ProductRepository");

//CREATE PRODUCT START
const createProduct = async (req, res) => {
  try {
    const { name, images, price, description, colors, sizes, stockCode } =
      req.body;
    if (!name || !stockCode) {
      return res.status(400).json({ error: "Name ve StockCode zorunludur." });
    }
    const newProduct = await ProductRepository.create({
      name,
      images,
      price,
      description,
      colors,
      sizes,
      stockCode,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};
//CREATE PRODUCT END

//GET ALL PRODUCTS START
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductRepository.getAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};
//GET ALL PRODUCTS END

//GET PRODUCT BY ID START
const getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await ProductRepository.getById(productId);
    if (!product) {
      return res.status(404).json({ error: "Ürün Bulunamadı !" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};
//GET PRODUCT BY ID END

//PUT PRODUCT START
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const updateProduct = req.body;

    const updatedProduct = await ProductRepository.update(
      productId,
      updateProduct
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Ürün bulunamadı!" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};
//PUT PRODUCT END

//DELETE PRODUCT START
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await ProductRepository.delete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Ürün Bulunamadı !" });
    }
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};
//DELETE PRODUCT END

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
