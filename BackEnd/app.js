const express = require("express");
const connectDB = require("./config/database");
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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(ErrorHandler);

module.exports = app;
