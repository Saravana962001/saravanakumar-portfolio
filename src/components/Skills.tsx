import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { resumeBase64 } from '../resumeBase64';

const technicalSkills = [
  "React.js", "Angular.js", "JavaScript (ES6+)", "Node.js", "MySQL", 
  "REST API Integration", "Bootstrap", "Responsive Web Design", 
  "HTML5", "CSS3", "Git", "Postman"
];

const softSkills = [
  { name: "Communication", desc: "Effective communication to facilitate collaboration and understanding." },
  { name: "Teamwork", desc: "Strong team player with a history of successful group contributions." },
  { name: "Adaptability", desc: "Quick to adjust and thrive in changing environments." },
  { name: "Problem-Solving", desc: "Proactive in identifying and resolving complex issues." }
];

export function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yCol1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="core-stack" ref={containerRef} className="pt-20 w-full relative z-10 scroll-m-20">
      <div className="flex justify-center w-full mb-16">
        <a 
          href={`data:application/pdf;base64,${resumeBase64}`}
          download="Saravana_Kumar_Resume.pdf"
          className="bg-[#00E5FF] text-[#0A0A0B] px-8 py-3 font-[700] uppercase text-[14px] outline-none hover:bg-white transition-colors cursor-pointer border-none rounded-none inline-block text-center shadow-[0_0_20px_rgba(0,229,255,0.4)]"
        >
          Download Resume
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-10">
        <motion.div style={{ y: yCol1 }}>
          <span className="text-[10px] uppercase tracking-[3px] text-[#666] mb-6 block">Capabilities</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-4 bg-[#0A0A0B]/50 p-4 border border-white/5 backdrop-blur-sm"
              >
                <h5 className="text-[24px] font-[600] mb-1 text-white">{skill.name}</h5>
                <p className="text-[14px] text-[#666] leading-[1.5]">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div style={{ y: yCol2 }} className="border-l border-white/10 pl-10">
          <span className="text-[10px] uppercase tracking-[3px] text-[#666] mb-6 block">Core Stack</span>
          <div className="flex flex-wrap gap-[10px]">
             {technicalSkills.map((skill, index) => (
               <motion.span 
                 key={skill}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.05 }}
                 className="text-[11px] px-[12px] py-[6px] border border-[#333] bg-[#0A0A0B]/80 rounded-[100px] text-[#AAA] cursor-pointer backdrop-blur-sm transition-all duration-500 ease-out hover:bg-[#00E5FF] hover:text-[#0A0A0B] hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] hover:scale-110 hover:rounded-[12px_24px_12px_24px]"
               >
                 {skill}
               </motion.span>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
