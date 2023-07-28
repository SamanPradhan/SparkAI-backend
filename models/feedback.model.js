const mongoose = require("mongoose");

const FeedbackSchema = mongoose.Schema({
  email: { required: true, type: String },
  question: { required: true, type: String },
  answer: String,
  feedback: { required: true, type: String },
});
const FeedbackModel = mongoose.model("feedback", FeedbackSchema);
module.exports = { FeedbackModel };

// {
//   "topic": "React",
//   "question: "Explain react in your language"
// }
