import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  const textShadowStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div className='font-xl absolute top-0 -z-10 w-full flex justify-center flex-col text-center mt-20 home-page'>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', damping: 6 }}
        className='text-3xl font-bold text-white font-mono'
        style={textShadowStyle}
      >
        Hey There!
      </motion.div>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', damping: 8 }}
        className='lg:text-5xl md:text-3xl  font-bold text-white font-mono'
        style={textShadowStyle}
      >
        My Name is Anirudh! I'm a Full-stack Developer
      </motion.div>
    </div>
  );
}

export default Home;
