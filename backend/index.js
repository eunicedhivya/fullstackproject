const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = 5000;
const app = express();

dotenv.config();

app.use(express.json());

// console.log(process.env.MONGO_URL);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({
    message: "Locator App",
  });
});

app.listen(port, () => console.log(`Server is up and running at ${port}`));
