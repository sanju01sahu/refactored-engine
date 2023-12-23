const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
  {
    
    type: {
      type: String,
      enum: ["javascript", "react", "node", "fullstack"],
      required: true,
    },
    chatHistory: {
      type: Array,
      required: true,
    },

  
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);


const InterviewModel = mongoose.model("Interview", interviewSchema);

module.exports = { InterviewModel };