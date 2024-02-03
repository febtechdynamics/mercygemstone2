// product controller
const Product = require("../model/Product");
const catchAsync = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../util/ErrorHandler");
const { uploads, deleteImage } = require("../util/Cloudinary");
const fs = require("fs");
const path = require("path");

// create product
exports.createProduct = catchAsync(async (req, res, next) => {
  try {
    const { productName, productPrice, productDescription, productCategory } =
      req.body;

    if (!productName || !productDescription || !productCategory) {
      return next(new ErrorHandler("Please enter all fields", 400));
    }

    const uploader = async (path) => await uploads(path, "Images");
    const urls = [];
    if (req.method === "POST") {
      const files = req.files;

      for (const file of files) {
        const { path } = file;
        try {
          const newpath = await uploader(path);
          urls.push(newpath);
          fs.unlinkSync(path);
        } catch (error) {
          console.error("Error uploading to Cloudinary:", error);
          return next(
            new ErrorHandler("Error uploading image to Cloudinary", 500)
          );
        }
      }
    }
    // console.log(urls);

    const product = await Product.create({
      productName,
      productPrice,
      productDescription,
      productCategory,
      productImage: urls.map((urlInfo) => ({
        urls: urlInfo.url,
        public_id: urlInfo.id,
      })),
    });

    // Send response to the client
    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
      url: urls, // Make sure to declare urls outside the if block if needed
    });
  } catch (error) {
    urls.map((urlInfo) => {
      deleteImage(urlInfo.public_id);
    });

    return next(new ErrorHandler(error.message, 500));
  }
});

// get products

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const perPage = parseInt(req.query.perPage) || 4; // Number of products per page, defaulting to 10
  const page = parseInt(req.query.page) || 1; // Page number, defaulting to 1
  const category = req.query.category; // Category filter
  const search = req.query.search; // Search filter

  let query = {};

  // Apply category filter if provided
  if (category) {
    query.productCategory = category;
  }

  // Apply search filter if provided
  if (search) {
    // Use a regular expression for case-insensitive partial matching
    query.$or = [
      { productName: { $regex: new RegExp(search, "i") } },
      { productDescription: { $regex: new RegExp(search, "i") } },
    ];
  }

  try {
    const products = await Product.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    return new ErrorHandler(error.message, 500);
  }
});

//get product by id

exports.getProductById = catchAsync(async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    return new ErrorHandler(error.message, 500);
  }
});

//edit product

exports.updateProduct = catchAsync(async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  } catch (error) {
    return new ErrorHandler(error.message, 500);
  }
});

// delete product
exports.deleteProduct = catchAsync(async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    ids = product.productImage.map((image) => image.public_id);
    // ids.map((id) => {
    //   deleteImage(id);
    // });
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return new ErrorHandler(error.message, 500);
  }
});
