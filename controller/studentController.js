// controllers/studentController.js

const StudentService = require('../helper/StudentService');

class StudentController {
  constructor() {
    this.studentService = new StudentService();
  }

  getAllStudents = async (req, res) => {
    try {
      const students = await this.studentService.getAllStudents();
      res.status(200).json(students);
    } catch (error) {
      console.error('Error retrieving students:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  createStudent = async (req, res) => {
    try {
      const newStudent = await this.studentService.createStudent(req.body);
      res.status(200).json(newStudent);
    } catch (error) {
      console.error('Error creating student:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getStudentsStartingWithA = async (req, res) => {
    try {
      const studentsWithA = await this.studentService.getStudentsStartingWithA();
      res.status(200).json(studentsWithA);
    } catch (error) {
      console.error('Error retrieving students starting with A:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}

module.exports = new StudentController();
