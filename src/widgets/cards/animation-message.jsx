import React, { useState, useEffect } from 'react';

export function AnimationMessage({ text }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 10); // Adjust the interval to control the typing speed
    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default AnimationMessage;
