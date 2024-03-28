// Directive indicating that this component should only be used on the client-side
'use client';

// Imports necessary functionalities from 'framer-motion' and 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

// Defines the props for the Character component, which includes a 'value' prop of type string
interface CharacterProps {
  value: string;
}

// Functional component for displaying the characters of a string with animation based on scroll position
const Character: React.FC<CharacterProps> = ({ value }) => {
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
            {word}
          </WordComponent>
        );
      })}
    </p>
  );
};

// Component to wrap each word, taking children, an animation range, and the scroll progress as props
const WordComponent: React.FC<{
  children: string;
  range: [number, number];
  progress: any;
}> = ({ children, range, progress }) => {
  // Calculates the animation step for each character in the word
  const amount = range[1] - range[0];
  const step = amount / children.length;

  // Returns a span for the word, with each character wrapped in a CharacterComponent
  return (
    <span className='relative mr-3 mt-3'>
      {children.split('').map((char, index) => {
        // Calculates the animation range for each character
        const start = range[0] + index * step;
        const end = start + step;

        return (
          <CharacterComponent
            key={`char_${index}`}
            progress={progress}
            range={[start, end]}>
            {char}
          </CharacterComponent>
        );
      })}
    </span>
  );
};

// Component to animate individual characters based on the scroll progress
const CharacterComponent: React.FC<{
  children: React.ReactNode;
  range: [number, number];
  progress: any;
}> = ({ children, range, progress }) => {
  // Uses the useTransform hook to interpolate the scroll progress into opacity values
  const opacity = useTransform(progress, range, [0, 1]);
  // Returns a character with varying opacity based on scroll position
  return (
    <span>
      <span className='absolute opacity-[20%]'>{children}</span>
      {/* Base, low-opacity character */}
      <motion.span style={{ opacity }}>{children}</motion.span>
      {/* Animated character */}
    </span>
  );
};

// Exports the Character component for use elsewhere
export default Character;
