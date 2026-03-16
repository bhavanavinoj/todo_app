const express = require("express");
const router = express.Router();

const courseController = require("../Controller/course/courseController");
const upload = require("../middleware/upload");

router.post("/createCourse",upload.single("thumbnail"),courseController.createCourse);
router.get("/course", courseController.getCourses);
router.get("/course/:id", courseController.getCourseById);
router.put("/updateCourse/:id", courseController.updateCourse);
router.delete("/deleteCourse/:id", courseController.deleteCourse);

module.exports = router;