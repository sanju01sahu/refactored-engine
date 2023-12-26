const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, //userid
  interviewType: String,
  conversation: [],
  feedback: { type: mongoose.Schema.Types.ObjectId, ref: "Feedback" }
});

const Interview = mongoose.model("Interview", interviewSchema);

module.exports = Interview;
