const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send([]);
});

router.route("/:id").get((req, res) => {
  res.send("this is a specific student detail with id: " + req.params.id);
});

router.route("/").post((req, res) => {
  const { name, age, email, phone } = req.body;
  res.send({
    name,
    age,
    email,
    phone,
  });
});

router.route("/:id").patch((req, res) => {
  // update the student with the id of req.params.id
  res.send(req.body);
});

router.route("/:id").delete((req, res) => {
  // delete the student with the id of req.params.id
  res.send("Student Deleted with the id: " + req.params.id);
});

module.exports = router;
