const Course = require("../../models/courseModel");

exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

exports.getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(course);
};

exports.createCourse = async (req, res) => {
  const course = new Course({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    instructur_id: req.body.instructur_id,
    thumbnail: req.file.filename
  });
  await course.save();
  res.json({
    message: "Course created successfully",
    course
  });
};

exports.updateCourse = async (req, res) => {
  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedCourse);
};

exports.deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted successfully" });
};