"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NextPage } from 'next';

const Title: NextPage = () => {
  const [text, setText] = useState('');
  const [dotVisible, setDotVisible] = useState(true);

  useEffect(() => {
    const message = 'Tailored Solutions for Your Unique Needs';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setText((prevText) => prevText + (message[currentIndex] ? message[currentIndex]: ''));
      currentIndex++;

      if (currentIndex === message.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setDotVisible((prevState) => !prevState);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-6xl font-bold p-8">
      <motion.span
        className="inline-block bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-blue-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.span>
      <span className={`text-blue-300 text-6xl ${dotVisible ? 'opacity-100' : 'opacity-0'}`}>.</span>
    </div>
  );
};

export default Title;
