// Directive indicating that this component should only be used on the client-side
'use client';

// Imports from 'framer-motion' for animation and 'react' for component functionality
import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react';

// Defines the props type for the Paragraph component, expecting a 'value' prop of type string
interface ParagraphProps {
  value: string;
}

// Functional component definition accepting ParagraphProps
const Paragraph: React.FC<ParagraphProps> = ({ value }) => {
  // Creates a ref to attach to the paragraph element for scroll tracking
  const element = useRef(null);

  // Hooks into the scroll position related to the element ref, configuring the start and end offsets for scroll tracking
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'start start'],
  });

  // Returns a paragraph element animated by framer-motion, with opacity controlled by the scroll position
  return (
    <motion.p
      className='flex text-6xl leading-none max-w-screen-xl text-[white] flex-wrap p-10'
      ref={element}
      style={{ opacity: scrollYProgress }}>
      {value} {/* Displays the passed text value within the paragraph */}
    </motion.p>
  );
};

// Exports the component for use in other parts of the application
export default Paragraph;
