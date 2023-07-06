const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// const studentsRouter = require("./routes/students.route");
const coursesRouter = require("./routes/courses.route");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use("/students", studentsRouter);
app.use("/courses", coursesRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(
        `Database is connected and the server is running on PORT:  ${process.env.PORT}!`
      )
    );
  })
  .catch((error) => {
    console.log(error);
  });
