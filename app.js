// import modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const upload = multer();
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");

require("dotenv").config();

//port
const port = process.env.PORT;
//initialise app

const app = express();

// Connect to database
mongoose.connect(process.env.MONGODB_URL);
const mongoDbConnection = mongoose.connection;
//on error
mongoDbConnection.on("error", (err) => {
  console.log(err.message);
});

// on connect
mongoDbConnection.once("connected", () => {
  console.log("mongodb connection done");
});

//middileware
app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes

app.use(require("./routes/todo"));
// server config

// Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
// Set static folder
app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`server is running on port ${port}`));
