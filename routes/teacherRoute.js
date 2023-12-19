const express = require('express');
const router = express.Router();
const TeacherController = require('../controller/teacherController');
const TeacherValidator = require('../validator/teacherValidator');



/**
 * @swagger
 * /api/teacher/all:
 *   get:
 *     summary: Create a new teacher
 *     tags: [Teacher] 
 *     description: Create a new teacher record.
 *     responses:
 *       200:
 *         description: Successful response after creating the teacher.
 */
router.get('/all' , TeacherController.getAllTeachers);


/**
 * @swagger
 * /api/teacher/create:
 *   post:
 *     summary: Create a new teacher
 *     tags: [Teacher] 
 *     description: Create a new teacher record.
 *     responses:
 *       200:
 *         description: Successful response after creating the teacher.
 */
router.post('/create', (req, res) => {
    const { error } = TeacherValidator.createTeacherValidation(req.body);
    if (error) {
      return res.status(400).json({message: error.details[0].message});
    }
  return TeacherController.createTeacher(req, res);
});

module.exports = router;
