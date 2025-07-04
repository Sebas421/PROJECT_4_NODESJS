const Question = require('../models/Question');

exports.getCategories = async (req, res) => {
  const categories = await Question.distinct('category');
  res.json(categories);
};

exports.getQuestionsByCategory = async (req, res) => {
  const questions = await Question.find({ category: req.params.category }).sort({ createdAt: -1 });
  res.json(questions);
};

exports.createQuestion = async (req, res) => {
  const { title, content, category } = req.body;
  const question = new Question({ title, content, category, user: req.user });
  await question.save();
  res.status(201).json(question);
};

exports.answerQuestion = async (req, res) => {
  const { text } = req.body;
  const question = await Question.findById(req.params.id);
  question.answers.push({ text, user: req.user });
  await question.save();
  res.status(201).json(question);
};