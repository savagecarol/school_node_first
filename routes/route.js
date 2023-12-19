const express = require('express');
const studentRoute = require('./studentRoute');
const teacherRoute = require('./teacherRoute');

const router =  express();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the /api route!' });
  });
router.use('/student' , studentRoute);
router.use('/teacher' , teacherRoute);

module.exports = router;