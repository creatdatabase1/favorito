const express = require('express');
const router = express.Router();
const {getAllcourses, getCourseById, createCourse, updateCourse, deleteCourse} = require('../controllers/courseController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, getAllcourses);
router.get('/:id', authenticateToken, getCourseById);
router.post('/', authenticateToken, createCourse);
router.put('/:id', authenticateToken, updateCourse);
router.delete('/:id', authenticateToken, deleteCourse);

module.exports = router;