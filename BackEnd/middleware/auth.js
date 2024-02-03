const jwt = require("jsonwebtoken");
const User = require("../model/user"); // Import the User model or schema
const ErrorHandler = require("../util/ErrorHandler");

const auth = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const id = decoded.id;

      const user = await User.findOne({ _id: id }); // Replace with the appropriate field or variable for the user ID in your user model

      if (!user) {
        return next(new ErrorHandler("Not Authorized ", 404));
      }
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      console.log(token);
      return next(new ErrorHandler("Not Authorized", 401));
    }
  }
  // console.log(req.headers);
  if (!token) {
    // console.log(token);
    return next(new ErrorHandler("Not Authorized ", 401));
  }
};
module.exports = auth;
