import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Home: React.FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [userResponse, setUserResponse] = useState("");

  const handleUserResponse = () => {
    setUserResponse(transcript);
    // You can perform additional actions with the user response here
  };
  
  // const speak = (text: string) => {
  //   // Currently text to speech library is not integrated so only console logging the required output
  //   console.log(text);
  // };

  const startListening = () => {
    SpeechRecognition.startListening();
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    handleUserResponse();
    resetTranscript();
  };

  return (
    <div>
      
      <button onClick={startListening} disabled={listening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!listening}>
        Stop Listening
      </button>

      <div>
        <p>User Response:</p>
        <textarea value={userResponse} readOnly />
      </div>
    </div>
  );
};

export default Home;
