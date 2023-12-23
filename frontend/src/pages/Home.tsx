import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Home: React.FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [userResponse, setUserResponse] = useState('');

  const startListening = () => {
    SpeechRecognition.startListening();
  };

  const stopListening = () => {
    // SpeechRecognition.stopListening();
  };

  const handleUserResponse = () => {
    // setUserResponse(transcript);
    // You can perform additional actions with the user response here
  };

  const speak = (text: string) => {
    // Use a text-to-speech library of your choice here
    // For simplicity, we'll use console.log to simulate text-to-speech
    console.log(text);
  };

  return (
    <div>
      <h1>Interview Simulator</h1>
      <button onClick={startListening} disabled={listening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!listening}>
        Stop Listening
      </button>
      <button onClick={handleUserResponse}>
        Capture Response
      </button>
      <div>
        <p>User Response:</p>
        <textarea value={userResponse} readOnly />
      </div>
      <button onClick={() => speak('Hello! How can I help you?')}>
        Speak to User
      </button>
    </div>
  );
};

export default Home;
