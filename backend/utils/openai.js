const axios = require("axios");
const { InterviewModel } = require("../models/intreview");



const jsInterviewPost = async (req, res) => {
   const userId=req.body
  const chatHistory = [];
  try {
    chatHistory.push({
      role: "system",
      content: `You are an artificial intelligence named "Aman" You are conducting a JavaScript interview with a candidate.ask any five question`,
    });

    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: chatHistory,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${"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"}`,
          },
        }
      );
   

  
      if (response.data.choices[0].message) {
        chatHistory.push(response.data.choices[0].message);
      }
    let Interview = new InterviewModel({
      userId,
      type: "javascript",
      chatHistory: chatHistory,
    });
    let newInterview = await Interview.save();

    // Send response to the client
    res.status(200).json({
      status: "success",
      message: "Chat message processed successfully",
      data: {
        interviewDetails: newInterview,
      },
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      message: err.message,
    });
  }
};
const jsIntervieEndPost=async (req, res) => {
    const userId=req.body
    const chatHistory = [];
   try {
     chatHistory.push({
       role: "system",
       content: `${req.body}  evaluate them on the basisc of communication skill,tec skill and problem solving skills and mark them  out of  10 `,
     });
 
     const response = await axios.post(
         "https://api.openai.com/v1/chat/completions",
         {
           model: "gpt-3.5-turbo",
           messages: chatHistory,
         },
         {
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${"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"}`,
           },
         }
       );
   
       if (response.data.choices[0].message) {
         res.status(200).json({
            status: "success",
            message: "Chat message processed successfully",
            data: {
              "interviewDetails": response.data.choices[0].message,
            },
          });
       }
     
 
     // Send response to the client
    
   } catch (err) {
     res.status(500).send({
       status: "fail",
       message: err.message,
     });
   }
 };


const reactInterviewPost = async (req, res) => {
    const userId=req.body
  const chatHistory = [];
  try {
    chatHistory.push({
      role: "system",
      content: `You are an artificial intelligence named "Virat Kholi." You are conducting a React interview with a candidate. Here is a template for your interview behavior:

      1. **Introduction:**
         - Start the interview by introducing yourself. For example:
           "Hello, I'm Virat Kholi, here to conduct your React interview. I'll be asking you a series of questions and providing feedback on your answers. Let's get started."
      
      2. **Questioning:**
         - Ask a total of five React-related questions, waiting for the candidate to respond before moving on to the next question. Provide brief explanations (one or two lines) for any improvements you think the candidate can make after each answer and then ask the next question.
      
      3. **Ending the Interview:**
         - If the candidate requests to end the interview, conclude the interview gracefully. Provide feedback along with the conclusion.
      
      4. **Evaluation:**
         - After the fifth question, provide a rating out of 10 for two aspects: communication skills, subject matter expertise and problem solving skills. For example:
         "Communication Skills: [Single Number Rating out of 10]"
         "Subject Matter Expertise: [Single Number Rating out of 10]"
         "Problem Solving Skills: [Single Number Rating out of 10]"
      
      5. **Hiring Status:**
         - Finally, give a hiring status verdict. This could be one of the following:
           - "No Hire"
           - "Hire"
           - "Strong Hire"
      
      Remember to simulate the interview process naturally, ask only one question at a time, and wait for the candidate to answer before moving to the next question.
      when I give you the phrase "end the interview" give the feedback as mentioned in instructions. If you can't evaluate the candidate skills please give 0 marks for all the criteria. 
      example:
      "Communication Skills: 0"
      "Subject Matter Expertise: 0"
      "Problem Solving Skills: 0"
      
      Let's start the interview!
      
      `,
    });

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: chatHistory,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"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"}`,
        },
      }
    );

    if (response.data.choices[0].message) {
      chatHistory.push(response.data.choices[0].message);
    }

    let Interview = new InterviewModel({
     userId,
      type: "react",
      chatHistory: chatHistory,
    });
    let newInterview = await Interview.save();

    // Send response to the client
    res.status(200).json({
      status: "success",
      message: "Chat message processed successfully",
      data: {
        interviewDetails: newInterview,
      },
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      message: err.message,
    });
  }
};

// const reactInterviewPatch = async (req, res) => {
//   const { interviewId, userReply } = req.body;

//   try {
//     // Update chat history with the latest user reply
//     const interview = await InterviewModel.findOneAndUpdate(
//       { _id: interviewId },
//       {
//         $push: {
//           chatHistory: {
//             role: "user",
//             content: userReply,
//           },
//         },
//       },
//       { new: true }
//     );

//     // Get response from chatGPT
//     const response = await axios.post(
//       process.env.OPENAI_CHAT_ENDPOINT,
//       {
//         model: "gpt-3.5-turbo",
//         messages: interview.chatHistory,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//       }
//     );

//     const gptMessage = response.data.choices[0].message;

//     if (gptMessage) {
//       const interview = await InterviewModel.findOneAndUpdate(
//         { _id: interviewId },
//         {
//           $push: {
//             chatHistory: gptMessage,
//           },
//         },
//         { new: true }
//       );

//       const hasFeedback = gptMessage.content.includes("Communication Skills");

//       if (hasFeedback) {
//         const communication = parseInt(
//           gptMessage.content.match(/Communication Skills: (\d+)/)[1],
//           10
//         );
//         const subjectExpertise = parseInt(
//           gptMessage.content.match(/Subject Matter Expertise: (\d+)/)[1],
//           10
//         );
//         const problemSolving = parseInt(
//           gptMessage.content.match(/Problem Solving Skills: (\d+)/)[1],
//           10
//         );
//         await InterviewModel.findOneAndUpdate(
//           { _id: interviewId },
//           { communication, subjectExpertise, problemSolving }
//         );
//       }

//       // Send response to the client
//       res.status(200).json({
//         status: "success",
//         message: "Chat message processed successfully",
//         data: {
//           chatHistory: interview.chatHistory,
//         },
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       status: "fail",
//       message: err.message,
//     });
//   }
// };

// Node Controllers
const nodeInterviewPost = async (req, res) => {
    const userId=req.body
  const chatHistory = [];
  try {
    chatHistory.push({
      role: "system",
      content: `You are an artificial intelligence named "Christiano Ronaldo." You are conducting a Nodejs, express, mongo interview with a candidate. Here is a template for your interview behavior:

      1. **Introduction:**
         - Start the interview by introducing yourself. For example:
           "Hello, I'm Christiano Ronaldo, here to conduct your Nodejs, express, mongo interview. I'll be asking you a series of questions and providing feedback on your answers. Let's get started."
      
      2. **Questioning:**
         - Ask a total of five Nodejs, express, mongo-related questions, waiting for the candidate to respond before moving on to the next question. Provide brief explanations (one or two lines) for any improvements you think the candidate can make after each answer and then ask the next question.
      
      3. **Ending the Interview:**
         - If the candidate requests to end the interview, conclude the interview gracefully. Provide feedback along with the conclusion.
      
      4. **Evaluation:**
         - After the fifth question, provide a rating out of 10 for two aspects: communication skills, subject matter expertise and problem solving skills. For example:
         "Communication Skills: [Single Number Rating out of 10]"
         "Subject Matter Expertise: [Single Number Rating out of 10]"
         "Problem Solving Skills: [Single Number Rating out of 10]"
      
      5. **Hiring Status:**
         - Finally, give a hiring status verdict. This could be one of the following:
           - "No Hire"
           - "Hire"
           - "Strong Hire"
      
      Remember to simulate the interview process naturally, ask only one question at a time, and wait for the candidate to answer before moving to the next question.
      when I give you the phrase "end the interview" give the feedback as mentioned in instructions. If you can't evaluate the candidate skills please give 0 marks for all the criteria. 
      example:
      "Communication Skills: 0"
      "Subject Matter Expertise: 0"
      "Problem Solving Skills: 0"
      
      Let's start the interview!
      
      `,
    });
  
    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: chatHistory,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${"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"}`,
          },
        }
      );
  
      if (response.data.choices[0].message) {
        chatHistory.push(response.data.choices[0].message);
      }
    let Interview = new InterviewModel({
      userId,
      type: "node",
      chatHistory: chatHistory,
    });
    let newInterview = await Interview.save();


    if (response.data.choices[0].message) {
      chatHistory.push(response.data.choices[0].message);
    }


    // Send response to the client
    res.status(200).json({
      status: "success",
      message: "Chat message processed successfully",
      data: {
        interviewDetails: newInterview,
      },
    });
  } catch (err) {
    res.status(500).send({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports={jsInterviewPost,jsIntervieEndPost,nodeInterviewPost,reactInterviewPost}