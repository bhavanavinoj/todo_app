const express = require("express");
const router = express.Router();
const examController = require("../Controller/Exam/examController");

router.get("/exam", examController.getExams);
router.get("/exam/:id", examController.getExamById);
router.post("/createExam", examController.createExam);
router.put("/updateExam/:id", examController.updateExam);
router.delete("/deleteExam/:id", examController.deleteExam);

module.exports = router;