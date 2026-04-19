import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Linkedin, Phone } from 'lucide-react';

export function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yCol1 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="contact" ref={containerRef} className="pt-8 border-t border-white/10 w-full mb-12 relative z-10 scroll-m-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-10">
        <motion.div style={{ y: yCol1 }}>
          <span className="text-[10px] uppercase tracking-[3px] text-[#666] mb-6 block">Contact</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Email */}
            <motion.a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=saravanakumar962001@gmail.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0A0A0B]/50 p-6 border border-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-4 hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all cursor-pointer group"
            >
              <div className="p-4 bg-white/5 rounded-full group-hover:bg-[#00E5FF]/20 transition-colors">
                <Mail className="w-8 h-8 text-white group-hover:text-[#00E5FF] transition-colors" />
              </div>
              <div className="text-center">
                <h3 className="text-[16px] font-[600] mb-1 text-white">Email</h3>
                <p className="text-[12px] text-[#AAA] break-all">saravanakumar962001@gmail.com</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a 
              href="https://linkedin.com/in/saravana-kumar-software-developer"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0A0A0B]/50 p-6 border border-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-4 hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all cursor-pointer group"
            >
              <div className="p-4 bg-white/5 rounded-full group-hover:bg-[#00E5FF]/20 transition-colors">
                <Linkedin className="w-8 h-8 text-white group-hover:text-[#00E5FF] transition-colors" />
              </div>
              <div className="text-center">
                <h3 className="text-[16px] font-[600] mb-1 text-white">LinkedIn</h3>
                <p className="text-[12px] text-[#AAA] truncate w-full">Connect with me</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a 
              href="tel:7397146751"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#0A0A0B]/50 p-6 border border-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-4 hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all cursor-pointer group"
            >
              <div className="p-4 bg-white/5 rounded-full group-hover:bg-[#00E5FF]/20 transition-colors">
                <Phone className="w-8 h-8 text-white group-hover:text-[#00E5FF] transition-colors" />
              </div>
              <div className="text-center">
                <h3 className="text-[16px] font-[600] mb-1 text-white">Phone</h3>
                <p className="text-[12px] text-[#AAA]">+91 7397146751</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
        
        <div className="hidden md:block border-l border-white/10 pl-10" />
      </div>
    </section>
  );
}
