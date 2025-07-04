const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  text: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const questionSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  answers: [answerSchema]
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
