const express = require("express");
const Category = require("../models/Category");
const router = express.Router();

//CREATE CATEGORY START

router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;
    const newCategory = new Category({ name, img });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
});

//CREATE CATEGORY END

//GET ALL CATEGORİES START

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
});

//GET ALL CATEGORİES END

//GET CATEGORY BY ID START

router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    try {
      const category = await Category.findById(categoryId);
      res.status(200).json(category);
    } catch (error) {
      res.status(404).json({ error: "Kategori bulunamadı !" });
    }
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
});

//GET CATEGORY BY ID END

//PUT CATEGORY START

router.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updateInfo = req.body;

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Kategori Bulunamadı !" });
    }
    const updateCategory = await Category.findByIdAndUpdate(
      categoryId,
      updateInfo,
      { new: true }
    );
    res.status(200).json(updateCategory);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
});

//PUT CATEGORY END

//DELETE CATEGORY START

router.delete("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({ error: "Kategori Bulunamadı !" });
    }
    res.status(200).json(deletedCategory);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
});

//DELETE CATEGORY END

module.exports = router;
