import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Arrownect",
    role: "Trading Infrastructure Platform",
    link: "https://arrownect.com/",
    tech: ["AngularJS", "Node.js", "MySQL", "Bootstrap", "REST APIs"],
    bullets: [
      "Developed a scalable trading infrastructure platform providing secure, low-latency environments for API-based trading and multi-broker integration.",
      "Built responsive user interfaces using AngularJS and Bootstrap, enabling seamless client management and real-time trading operations.",
      "Designed and implemented RESTful APIs with Node.js and optimized MySQL queries for efficient data handling, security, and high-performance system operations."
    ]
  },
  {
    title: "AlgoNinja",
    role: "Algo Trading SaaS Platform",
    link: "https://www.algoninja.in/#/",
    tech: ["AngularJS", "Node.js", "MySQL", "Bootstrap", "REST APIs"],
    bullets: [
      "Developed a multi-tenant SaaS-based algo trading platform with multi-broker integration, client management, and Telegram-based trade automation.",
      "Implemented REST APIs, optimized database operations, and ensured secure, low-latency order execution for scalable system performance."
    ]
  }
];

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yCol1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="projects" ref={containerRef} className="pt-8 border-t border-white/10 w-full relative z-10 scroll-m-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-10">
        <motion.div style={{ y: yCol1 }}>
          <span className="text-[10px] uppercase tracking-[3px] text-[#666] mb-6 block">PROJECTS</span>
          
          <div className="flex flex-col gap-12">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="mb-8 bg-[#0A0A0B]/50 p-6 border border-white/5 backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-2">
                  <div>
                    <h3 className="text-[24px] font-[600] mb-1 text-white">{project.title}</h3>
                    <p className="text-[14px] text-[#00E5FF] font-serif italic leading-[1.5] mb-3">{project.role}</p>
                  </div>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2px] bg-white text-black px-4 py-2 font-bold hover:bg-[#00E5FF] hover:text-black transition-colors"
                  >
                    View Project
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-[10px] mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[11px] px-[12px] py-[6px] border border-[#333] bg-[#0A0A0B]/80 rounded-[100px] text-[#AAA] cursor-pointer backdrop-blur-sm transition-all duration-500 ease-out hover:bg-[#00E5FF] hover:text-[#0A0A0B] hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] hover:scale-110 hover:rounded-[12px_24px_12px_24px]">
                      {t}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-2 mt-4 text-[14px] text-[#AAA] leading-[1.6]">
                  {project.bullets.map((bullet, i) => (
                    <li key={i}>❖ {bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div style={{ y: yCol2 }} className="border-l border-white/10 pl-10">
           <span className="text-[10px] uppercase tracking-[3px] text-[#666] mb-6 block">Impact Stats</span>
           <div className="flex flex-col gap-8 bg-[#0A0A0B]/50 p-6 border border-white/5 backdrop-blur-sm">
             <div className="stat-item">
               <span className="text-[50px] leading-[1] font-[900] tracking-[-2px] block text-white">02</span>
               <span className="text-[11px] uppercase tracking-[1px] text-[#666]">Major Platforms Delivered</span>
             </div>
             <div className="stat-item">
               <span className="text-[50px] leading-[1] font-[900] tracking-[-2px] block text-white">REST</span>
               <span className="text-[11px] uppercase tracking-[1px] text-[#666]">API Architecture</span>
             </div>
             <div className="stat-item">
               <span className="text-[50px] leading-[1] font-[900] tracking-[-2px] block text-[#00E5FF]">++</span>
               <span className="text-[11px] uppercase tracking-[1px] text-[#666]">Broker Integrations</span>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
