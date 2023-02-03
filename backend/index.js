import dotenv from "dotenv";
dotenv.config();
const express = require("express"); // express import
const app = express(); // app
const port = 5000;

app.get("/", function (req, res) {
  res.send("hello world!!");
});

app.listen(port, () => console.log(`${port}포트입니다.`));

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log(err);
  });
