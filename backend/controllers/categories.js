const CategoryRepository = require("../repositories/CategoryRepository");

//CREATE CATEGORY START
const createCategory = async (req, res) => {
  try {
    const { name, img } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Kategori Adı Zorunlu !" });
    }

    const newCategory = await CategoryRepository.create({ name, img });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};
//CREATE CATEGORY END

//GET ALL CATEGORİES START

const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryRepository.getAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//GET ALL CATEGORİES END

//GET CATEGORY BY ID START

const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await CategoryRepository.getById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Kategori Bulunamadı !" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//GET CATEGORY BY ID END

//PUT CATEGORY START

const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updateData = req.body;
    const updatedCategory = await CategoryRepository.update(
      categoryId,
      updateData
    );
    if (!updatedCategory) {
      return res.status(404).json({ error: "Kategori Bulunamadı !" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//PUT CATEGORY END

//DELETE CATEGORY START

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const deletedCategory = await CategoryRepository.delete(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({ error: "Kategori Bulunamadı !" });
    }
    res.status(200).json(deletedCategory);
  } catch (error) {
    res.status(500).json({ error: "Sunucu Hatası !" });
  }
};

//DELETE CATEGORY END

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
