// product router
const express = require("express");
const { upload } = require("../multer");
const { uploads } = require("../util/Cloudinary");
const auth = require("../middleware/auth");
const {
  createProduct,
  getAllProducts, // Corrected function name from getAllProduct to getAllProducts
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controller/Product.controller");
const router = express.Router(); // Corrected to call express.Router

router.post("/", auth, upload.array("file"), createProduct);
router.get("/", getAllProducts); // Corrected function name from getAllProduct to getAllProducts
router.get("/:id", getProductById);
router.patch("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

module.exports = router;
