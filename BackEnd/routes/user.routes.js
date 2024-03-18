//user router
const express = require("express");
const auth = require("../middleware/auth");
const {
  createUser,
  loginUser,
  getUserById,
  getUser,
  editUser,
  deleteUser,
  getMe,
} = require("../controller/user.controller");
const router = express.Router();

router.post("/", auth, createUser);
router.post("/login", loginUser);
router.get("/", auth, getUser);
router.get("/:id", auth, getUserById);
router.patch("/:id", auth, editUser);
router.delete("/:id", auth, deleteUser);
router.get("/me", auth, getMe);

module.exports = router;
