require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const exampleForm = require("./routes/exampleForm");
app.use("/example", exampleForm);

app.listen(3000, () => console.log("Server Started"));
