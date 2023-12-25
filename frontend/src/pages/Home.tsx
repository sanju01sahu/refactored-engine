import useSpeechRecognition from "../hook/useSpeechRecognition";


const Home:React.FC = () => {
  const {
    text,
    isListening,
    startListening,
    stopListening,
    resetRecognintion,
    hasRecognitionSupport,
  } = useSpeechRecognition();

  return (
    <>
      <div>
        {hasRecognitionSupport ? (
          <>
          <div>
            <button onClick={startListening} >Start Listening</button>
            <button onClick={stopListening}>Stop Listening</button>
            <button onClick={resetRecognintion}>Stop Listening</button>
          </div>
          {isListening ? <div>browser is listening </div> : null}
          {text}
          </>
        ): (
          <h1>Your Browser has no speech recognition support</h1>
        )}
      </div>
    </>
  );
};

export default Home;
