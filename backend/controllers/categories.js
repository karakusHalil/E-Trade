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

//GET CATEGORİES START

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
});

//GET CATEGORİES END





module.exports = router;
