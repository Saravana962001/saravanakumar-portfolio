import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const education = [
  {
    degree: "MCA - Computer Application",
    year: "2023 - 2025",
    institution: "SRM University",
    score: "CGPA - 9.54"
  },
  {
    degree: "Bsc - Computer Science",
    year: "2020 - 2023",
    institution: "SAASC College of Arts and Science",
    score: "CGPA - 9.00"
  }
];

export function Education() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yCol1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={containerRef} className="pt-8 border-t border-white/10 w-full mb-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-10">
        <motion.div style={{ y: yCol1 }}>
          <span className="text-[10px] uppercase tracking-[3px] text-[#666] mb-6 block">Education</span>
          
          <div className="flex flex-col gap-8">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0A0A0B]/50 p-6 border border-white/5 backdrop-blur-sm"
              >
                <h3 className="text-[24px] font-[600] mb-1 text-white">{edu.degree}</h3>
                <p className="text-[14px] text-[#666] leading-[1.5] mb-2">{edu.institution}</p>
                <div className="text-[11px] text-[#AAA] tracking-[1px] uppercase flex gap-3 items-center">
                  <span>{edu.year}</span>
                  <span className="w-1 h-1 bg-[#00E5FF] rounded-full shadow-[0_0_8px_#00E5FF]"></span>
                  <span>{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: yCol2 }} className="border-l border-white/10 pl-10">
          <span className="text-[10px] uppercase tracking-[3px] text-[#666] mb-6 block">Certification</span>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0B]/50 p-6 border border-white/5 backdrop-blur-sm"
          >
            <h3 className="text-[20px] font-[600] mb-2 text-white">
              Programming in React.js Front End Development
            </h3>
            <p className="text-[14px] text-[#00E5FF] font-serif italic leading-[1.5]">Sanjeevi Technology Solutions, Chennai</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
