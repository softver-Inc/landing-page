"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NextPage } from 'next';

const Title: NextPage = () => {
  const [text, setText] = useState('');
  const [dotVisible, setDotVisible] = useState(false);

  useEffect(() => {
    const message = 'Unnlocking potential through technology.';
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
    <div className="text-lg 2xl:text-6xl font-bold  z-50">
      <motion.span
        className="inline-block bg-gradient-to-r text-transparent bg-clip-text from-[#0056a4] to-[#00427e] w-[15em] h-[20em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default Title;
