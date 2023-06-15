const express = require("express");
const route = express.Router();
const Course = require("../models/course_model");

// CRUD -> Create, Read, Update, Delete

// Create

route.route("/").post(async (req, res) => {
  const { name, course_id, description, number_of_sections } = req.body;
  try {
    const course = await Course.create({
      name,
      course_id,
      description,
      number_of_sections,
    });

    res.status(200).json(course);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

// Read
route.route("/").get(async (req, res) => {
  try {
    // get all the course from mongodb using mongoose
    const courses = await Course.find({}).sort({ createdAt: -1 });
    res.status(200).json(courses);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

route.route("/:id").get((req, res) => {
  // get all the course from mongodb using mongoose filtered using the id
  try {
    const course = Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
  res.send("this is a specific course detail with id: " + req.params.id);
});

// Update
route.route("/:id").patch(async (req, res) => {
  // update the course with the id
  const { id } = req.params;

  const course = await Course.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!course) {
    return res.status(400).json({ error: "No such courses found" });
  }
  res.status(200).json(course);
});

// Delete
route.route("/:id").delete(async (req, res) => {
  const { id } = req.params;

  const course = await Course.findByIdAndDelete(id);
  if (!course) {
    return res.status(400).json({ error: "No such Course found" });
  }

  res.status(200).json({
    message: "Course deleted successfully",
    data: course,
  });
});

module.exports = route;
