import { useEffect, useState } from "react";


let recognition: any = null;

if("webkitSpeechRecognition" in window){
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-us";
}

const useSpeechRecognition = () => {
    const [text, setText] = useState("");
    const [isListening, setIsListening] = useState(false);


    useEffect(()=>{
        if(!recognition) return;

        recognition.onresult = (event: SpeechRecognitionEvent)=>{
            // console.log("onresult Event: ", event);
            setText(event.results[0][0].transcript)
            recognition.stop();
            setIsListening(false);
        }
    },[]);

    const startListening = ()=>{
        setText("");
        setIsListening(true);
        recognition.start();
    }
    const stopListening = ()=>{
        setText("");
        setIsListening(false);
        recognition.stop();
    }
    const resetRecognintion = ()=>{
        setText("");
        setIsListening(false);
        recognition.stop();
    }

    return {
        text,
        isListening,
        startListening,
        stopListening,
        resetRecognintion,
        hasRecognitionSupport: !!recognition,
    }
}

export default useSpeechRecognition