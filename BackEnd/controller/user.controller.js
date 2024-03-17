// user controller
const User = require("../model/user");
const catchAsync = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../util/ErrorHandler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//create user
exports.createUser = catchAsync(async (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  try {
    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      return next(new ErrorHandler("Please fill all fields", 400));
    }
    const existUser = await User.find({ email });
    if (existUser.length > 0) {
      //   console.log(existUser);
      return next(new ErrorHandler("Email Already Exists", 400));
    }

    const newUser = await User.create(req.body);
    if (newUser) {
      res.status(201).json({
        success: true,
        message: "user creater successfully",
        _id: newUser._id,
        firstName: newUser.firstNameame,
        email: newUser.email,
      });
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
//login
exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return next(new Error("please fill all the fields", 400));
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      const pass = await bcrypt.compare(password, userExists.password);

      if (pass) {
        const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE,
        });
        res.status(200).json({
          message: "User Successfully logged",
          _id: userExists._id,
          firstName: userExists.firstName,
          lastName: userExists.lastName,
          email: userExists.email,
          token,
        });
      } else {
        return next(new ErrorHandler("Invalid Credentials", 401));
      }
    } else {
      return next(new ErrorHandler("Invalid Credentials", 401));
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
    // return next(new ErrorHandler(error.message, 500));
  }
});
// get user
exports.getUser = catchAsync(async (req, res, next) => {
  try {
    const perPage = parseInt(req.query.perPage) || 6; // Number of user per page, defaulting to 10
    const page = parseInt(req.query.page) || 1; // Page number, defaulting to 1

    const users = await User.find()
      .skip((page - 1) * perPage)
      .limit(perPage);
    res.status(200).json({
      success: true,
      message: "users fetched successfully",
      users,
      Page: page,
      PerPage: perPage,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
// get user by id
exports.getUserById = catchAsync(async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(new ErrorHandler("user not found", 404));
    }
    res.status(200).json({
      success: true,
      message: "user fetched successfully",
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
// edit user
exports.editUser = catchAsync(async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "user updated successfully",
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

//delete user
exports.deleteUser = catchAsync(async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      return res.status(200).json({
        success: true,
        message: "user deleted successfully",
        user,
      });
    }
    return next(new ErrorHandler("user not found", 404));
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
