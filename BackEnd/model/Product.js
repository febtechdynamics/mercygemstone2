//product schema
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    productName: {
      type: String,
      required: [true, "Please add a product name"],
    },
    productPrice: {
      type: Number,
    },
    productDescription: {
      type: String,
      required: [true, "Please add a product description"],
    },
    productCategory: {
      type: String,
      required: [true, "Please add a product category"],
      enum: ["GemStone", "Industrial Materials", "Jewelry", "Others"],
    },
    productImage: [
      {
        urls: {
          type: String,
          required: true,
        },
        public_id: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
