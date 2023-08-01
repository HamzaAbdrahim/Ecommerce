const express = require("express");
const connectDB = require("./config/database");
const app = express();
connectDB();
require("dotenv").config();


app.get("/", (req, res) => {
  res.status(200).json({ status: true });
});
app.listen(process.env.PORT, () => {
  console.log(`Server running on port :${process.env.PORT} `);
});
