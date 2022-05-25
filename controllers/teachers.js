const Teachers = require('../models/teacher')

const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teachers.find();
        res.status(200).json({
            data: teachers //what ze heck is that
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err
        })
    }
}

const getOneTeacher = async (req, res) => {
    try{
        const teacher = await Teachers.findById(req.params.id);
        res.status(200).json({
            data: teacher
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err,
            message: `User with id ${req.params.id} not found`
        })
    }
}

const createTeacher = async (req, res) => {
    try {
        const { name, lastName, age, faculty, email, password, address, gender, veteran } = req.body;
        console.log(req.body);
        const teacher = await Teachers.create({ name, lastName, age, faculty, email, password, address, gender, veteran })
        res.json({
            teacher: teacher
        })
    } catch(err) {
        res.json({
            success: false,
            error: err
        })
    }
}

const updateTeacher = async (req, res) => {
    try{
        const teacher = await Teachers.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json({
            teacher: teacher
        })
    } catch(err) {
        res.json({
            success: false,
            error: err
        })
    }
}

const deleteOneTeacher = async (req, res) => {
    try {
        await Teachers.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: "Teacher deleted"
        })
    } catch(err) {
        res.json({
            success: false,
            error: err
        })
    }
}

module.exports = {
    getAllTeachers,
    getOneTeacher,
    createTeacher,
    updateTeacher,
    deleteOneTeacher
};