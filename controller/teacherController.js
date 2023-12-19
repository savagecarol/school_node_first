const Teacher = require('../models/teacherModel');

class TeacherController {

  static async getAllTeachers(req, res) {
    try {
      const teachers = await Teacher.find();
      res.json(teachers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createTeacher(req, res) {
    const { name, subject } = req.body;
    const newTeacher = new Teacher({ name, subject });
    try {
      const savedTeacher = await newTeacher.save();
      res.status(201).json(savedTeacher);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
module.exports = TeacherController;
