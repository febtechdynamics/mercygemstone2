const ErrorHandler = require("../util/ErrorHandler");

//error handler function
const error = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found with this id. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = "Json Web Token is invalid. Try again";
    err = new ErrorHandler(message, 400);
  }

  //JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = "Json Web Token is expired. Try again";
    err = new ErrorHandler(message, 400);
  }
  // duplicate key error
  if (err.code === 11000) {
    const message = "Duplicate key. This resource already exists.";
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
module.exports = error;
