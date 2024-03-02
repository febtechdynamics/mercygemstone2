const express = require("express");
const connectDB = require("./config/database");
const path = require("path");
const ErrorHandler = require("./middleware/error");
const helmet = require("helmet");
const user = require("./routes/user.routes");
const product = require("./routes/product.routes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/user", user);
app.use("/api/product", product);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../FrontEnd/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "FrontEnd", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("please set to production");
  });
}

app.use(ErrorHandler);

module.exports = app;
