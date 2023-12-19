const express = require('express');
const router = express.Router();
const StudentController = require('../controller/studentController');
const StudentValidator = require('../validator/studentValidator');

/**
 * @swagger
 * /api/student/all:
 *   get:
 *     tags: [Student] 
 *     summary: Get all students
 *     description: Retrieve a list of all students.
 *     responses:
 *       200:
 *         description: Successful response with the list of students.
 */
router.get('/all', StudentController.getAllStudents);


/**
 * @swagger
 * /api/student/students-starting-with-a:
 *   get:
 *     tags: [Student] 
 *     summary: Get all students whose name start with a
 *     description: Retrieve a list of all students.
 *     responses:
 *       200:
 *         description: Successful response with the list of students.
 */
router.get('/students-starting-with-a', StudentController.getStudentsStartingWithA);


/**
 * @swagger
 * /api/student/create:
 *   post:
 *     tags: [Student] 
 *     summary: Create a new student
 *     description: Create a new student record.
 *     responses:
 *       200:
 *         description: Successful response after creating the student.
 */
router.post('/create', (req, res) => {
    const { error } = StudentValidator.createStudentValidation(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    return StudentController.createStudent(req, res);
  });




module.exports = router;