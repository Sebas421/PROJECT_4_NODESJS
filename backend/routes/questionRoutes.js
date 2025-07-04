const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/categories', questionController.getCategories);
router.get('/category/:category', questionController.getQuestionsByCategory);
router.post('/', authMiddleware, questionController.createQuestion);
router.post('/:id/answer', authMiddleware, questionController.answerQuestion);

module.exports = router;
