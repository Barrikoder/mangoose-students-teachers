const express = require('express');
const studentsRouter = express.Router();
const { getAllStudents, getOneStudent, createStudent, updateStudent, deleteOneStudent } = require('../controllers/student');

studentsRouter.route("/").get(getAllStudents).post(createStudent);
studentsRouter.route("/:id").get(getOneStudent).put(updateStudent).delete(deleteOneStudent)

module.exports = studentsRouter;