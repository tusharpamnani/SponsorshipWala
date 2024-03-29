const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

const userRoutes = require("./Routes/userRoutes");

app.use("/api/auth", userRoutes);

const server = app.listen(process.env.PORT || 8000, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
