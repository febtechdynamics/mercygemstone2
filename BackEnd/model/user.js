const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//user model
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      requeired: [true, "please Enter your first Name"],
    },
    lastName: {
      type: String,
      requeired: [true, "please Enter your last Name"],
    },
    email: {
      type: String,
      required: [true, "please Enter your email"],
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "please Enter your phone Number"],
    },
    password: {
      type: String,
      required: [true, "please Enter your password"],
    },
    role: {
      type: String,
      default: "Admin",
      enum: ["Admin", "User", "user", "admin"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

//hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//compare password functiom
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//jwt token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
module.exports = mongoose.model("User", userSchema);
