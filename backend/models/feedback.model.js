const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  interview: { type: mongoose.Schema.Types.ObjectId, ref: "Interview" },
  strength: [{ String}], 
  improvementss: [{ String }], 
  score: { Number }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
