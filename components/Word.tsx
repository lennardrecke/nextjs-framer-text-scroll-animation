// Directive indicating that this component should only be used on the client-side
'use client';

// Imports necessary for animations and React functionality
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

// Defines the props for the Word component, expecting a 'value' prop of type string
interface WordProps {
  value: string;
}

// Functional component for displaying words with an animation effect based on scroll position
const Word: React.FC<WordProps> = ({ value }) => {
  // Reference to the component's DOM element for scroll interaction
  const element = useRef(null);
  // Hook to monitor the scroll progress within a specific range related to this component
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25'],
  });

  // Splits the passed string into words
  const words = value.split(' ');

  // Returns a paragraph with each word wrapped in a WordComponent
  return (
    <p
      className='flex text-6xl leading-none max-w-screen-xl text-[white] flex-wrap p-10'
      ref={element}>
      {words.map((word, index) => {
        // Calculates the start and end range for each word's animation
        const start = index / words.length;
        const end = start + 1 / words.length;

        return (
          <WordComponent
            key={index}
            progress={scrollYProgress}
            range={[start, end]}>
            {word} {/* Word content */}
          </WordComponent>
        );
      })}
    </p>
  );
};

// Component to animate each word based on the scroll progress
const WordComponent: React.FC<{
  children: React.ReactNode;
  range: [number, number];
  progress: any;
}> = ({ children, range, progress }) => {
  // Uses the useTransform hook to interpolate the scroll progress into opacity values
  const opacity = useTransform(progress, range, [0, 1]);
  // Returns a word with varying opacity based on scroll position
  return (
    <span className='relative mr-3 mt-3'>
      <span className='absolute opacity-[20%]'>{children}</span>{' '}
      {/* Base, low-opacity word */}
      <motion.span style={{ opacity }}>{children}</motion.span>{' '}
      {/* Animated word */}
    </span>
  );
};

// Exports the Word component for use elsewhere
export default Word;
