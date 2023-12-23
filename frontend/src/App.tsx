import "./App.css";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";


// import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function App() {
  // const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  

  


  return (
    <>
      <div className="app">
        <Navbar />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {/* <Home /> */}
      </div>
      <div>
      <h1>Interview Simulator</h1>
      <button  >
        Start Listening
      </button>
      <button  >
        Stop Listening
      </button>
      <div>
        <p>User Response:</p>
        <textarea  readOnly />
      </div>
      <button onClick={() =>{}}>
        Speak to User
      </button>
    </div>
    </>
  );
}

export default App;
