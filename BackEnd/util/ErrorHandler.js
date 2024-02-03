//error handler class
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super();
    this.statusCode = statusCode || 500;
    this.message = message || "Something went wrong";
  }
}
module.exports = ErrorHandler;
