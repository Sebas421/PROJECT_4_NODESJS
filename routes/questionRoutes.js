const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  getCategories,
  getQuestionsByCategory,
  createQuestion,
  answerQuestion
} = require('../controllers/questionController');

router.get('/categories', getCategories);
router.get('/:category', getQuestionsByCategory);
router.post('/', auth, createQuestion);
router.post('/:id/answer', auth, answerQuestion);

module.exports = router;
