const express = require('express');
const teachersRouter = express.Router();
const { getAllTeachers, getOneTeacher, createTeacher, updateTeacher, deleteOneTeacher } = require('../controllers/teachers');

teachersRouter.route("/").get(getAllTeachers).post(createTeacher);
teachersRouter.route("/:id").get(getOneTeacher).put(updateTeacher).delete(deleteOneTeacher)

module.exports = teachersRouter;