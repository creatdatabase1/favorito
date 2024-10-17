const express = require('express');
const router = express.Router();
const {getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent} = require('../controllers/studentController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, getAllStudents);
router.get('/:id', authenticateToken, getStudentById);
router.post('/', authenticateToken, createStudent);
router.put('/:id', authenticateToken, updateStudent);
router.delete('/:id', authenticateToken, deleteStudent);

module.exports = router;