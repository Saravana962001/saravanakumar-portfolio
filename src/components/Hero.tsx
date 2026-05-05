import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import portImage from '../portimage.png';

export function Hero() {
  const { scrollY } = useScroll();
  // Hero text scrolls up slower than page, giving deep parallax
  const yTitle = useTransform(scrollY, [0, 1000], [0, 300]);
  const yDesc = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-center py-20 relative"
    >
      <motion.div style={{ y: yTitle }} className="relative w-full flex items-center min-h-[250px] sm:min-h-[300px] md:min-h-[450px]">
        {/* Background Image overlapping behind the text */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="absolute -right-[20%] sm:-right-[25%] md:-right-[15%] lg:-right-[5%] xl:-right-[10%] top-[40%] md:top-[35%] transform -translate-y-1/2 z-0 opacity-40 md:opacity-60 xl:opacity-80 pointer-events-none"
        >
          <img 
            src={portImage} 
            alt="Developer Graphic"
            className="w-[300px] sm:w-[450px] md:w-[650px] lg:w-[800px] xl:w-[950px] object-contain drop-shadow-[0_0_50px_rgba(0,229,255,0.3)]"
          />
        </motion.div>

        {/* Foreground Text */}
        <motion.h1 
          className="text-[40px] sm:text-[50px] md:text-[90px] lg:text-[100px] xl:text-[110px] leading-[0.85] font-[900] tracking-[-2px] md:tracking-[-4px] uppercase mb-5 text-white z-10 relative whitespace-nowrap drop-shadow-2xl"
        >
          <span className="block">SARAVANA</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">KUMAR M</span>
        </motion.h1>
      </motion.div>
      
      <motion.div style={{ y: yDesc }}>
        <div className="font-serif italic text-3xl md:text-[36px] text-[#00E5FF] mb-10 max-w-3xl">
          Crafting efficient, high-performance web applications.
        </div>
        
        <p className="text-[14px] leading-[1.5] max-w-2xl font-sans text-white border-l border-white/10 pl-6">
          Software Developer skilled in React.js, AngularJS, JavaScript (ES6+), Node.js, and MySQL. 
          Experienced in building responsive web applications with REST API integration using HTML5, CSS3, and Bootstrap. 
          Focused on contributing to robust end-to-end software solutions.
        </p>
      </motion.div>
    </motion.section>
  );
}
