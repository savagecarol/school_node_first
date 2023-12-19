const Student = require('../models/studentModel');

class StudentService {

  async getAllStudents() {
    try {
      return await Student.find();
    } catch (error) {
      throw error;
    }
  }

  async createStudent(studentData) {

    try {
      return await Student.create(studentData);
    } catch (error) {
      throw error;
    }
  }

  async getStudentsStartingWithA() {

    try {
      return await Student.find({ name: { $regex: /^a/i } });
    } catch (error) {
      throw error;
    }
  }

}

module.exports = StudentService;
