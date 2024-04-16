import React, { useEffect, useState } from "react";

function Heading() {
  const text = " real, actual, everyday life";
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let typingInterval;
    if (typedText.length < text.length) {
      typingInterval = setInterval(() => {
        setTypedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
      }, 100);
    } else {
      setTimeout(() => {
        setTypedText("");
        setCurrentIndex(0);
      }, 1000);
    }

    return () => clearInterval(typingInterval);
  }, [typedText, currentIndex, text]);

  return (
    <center className="heading">
      <span className="typing-effect">
        | Simple recipe made for {typedText}
      </span>
      <span className="blink">|</span>
    </center>
  );
}

export default Heading;
