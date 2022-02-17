//import express module
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// create instance from express
const app = express();

//connect database
mongoose.connect(process.env.MONGO_URL)
    .then(() =>
        console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });

app.get("/api/test", () => {
    console.log("Testing successfull")
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running");
});