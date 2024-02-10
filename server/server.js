require("dotenv").config();
const express = require("express");
const app = express();

const router = require("./router/auth-router");
const connectDatabase = require("./database/db");

// USE MIDDLEWARE
app.use(express.json()); //to convert all thedata into json format
app.use("/api/v1", router); //define a path

const PORT = process.env.PORT || 5000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server run at: http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log("Error in database & server");
  });
