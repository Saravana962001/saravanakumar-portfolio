import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ParallaxBackground() {
  const { scrollY } = useScroll();
  
  // Parallax transform: as we scroll down the page (0 to 3000px max), 
  // the background moves down (0 to 800px), moving slower than the foreground.
  const y = useTransform(scrollY, [0, 3000], [0, 800]);

  return (
    <motion.div 
      style={{ y }}
      className="fixed inset-0 z-0 w-full h-[130vh] pointer-events-none opacity-[0.15]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover grayscale"
        style={{ mixBlendMode: 'screen' }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-loop-13024-large.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-background-loop-19107-large.mp4" type="video/mp4" />
      </video>
      
      {/* Heavy gradient mask to fade the video seamlessly into the background color */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/30 via-[#0A0A0B]/70 to-[#0A0A0B]" />
      
      {/* Add a subtle scanline overlay for an extra technological grit feel */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)' }}
      />
    </motion.div>
  );
}
