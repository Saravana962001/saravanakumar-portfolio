import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yCol1 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="experience" ref={containerRef} className="pt-8 border-t border-white/10 w-full relative z-10 scroll-m-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-10">
        <motion.div style={{ y: yCol1 }}>
          <span className="text-[10px] uppercase tracking-[3px] text-[#666] mb-6 block">Experience</span>
          
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0B]/50 p-6 border border-white/5 backdrop-blur-sm"
            >
              <h3 className="text-[24px] font-[600] mb-1 text-white">Software Developer</h3>
              <p className="text-[18px] text-[#00E5FF] font-serif italic leading-[1.5] mb-2">Finfolab Technologies LLP, Bangalore</p>
              <div className="text-[11px] text-[#AAA] tracking-[1px] uppercase flex gap-3 items-center mb-4">
                <span>Dec 2025 – Present</span>
              </div>
              <p className="text-[14px] leading-[1.6] text-white/80">
                Software Developer, contributing to real-world projects and building scalable web applications. Gained hands-on experience in full-stack development, improved problem-solving skills, and collaborated effectively within a team to deliver reliable and efficient solutions. Continuously adapting to new challenges and enhancing technical expertise.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Empty column to maintain the 2-column layout grid of the page */}
        <div className="hidden md:block border-l border-white/10 pl-10" />
      </div>
    </section>
  );
}
