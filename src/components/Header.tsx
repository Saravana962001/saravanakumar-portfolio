import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 mb-12 gap-6">
      <div className="font-[800] text-[18px] tracking-[-0.5px] text-white">
        SOFTWARE <span className="text-[#00E5FF]">DEVELOPER</span>
      </div>

      <nav className="flex flex-col sm:flex-row gap-8 text-[12px] uppercase tracking-[2px] text-white">
        <a href="#core-stack" onClick={(e) => {
          e.preventDefault();
          document.getElementById('core-stack')?.scrollIntoView({ behavior: 'smooth' });
        }} className="hover:text-accent transition-colors">Core Stack</a>
        <a href="#projects" onClick={(e) => {
          e.preventDefault();
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }} className="hover:text-accent transition-colors">Projects</a>
        <a href="#experience" onClick={(e) => {
          e.preventDefault();
          document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        }} className="hover:text-accent transition-colors">Experience</a>
        <a href="#contact" onClick={(e) => {
          e.preventDefault();
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }} className="hover:text-accent transition-colors">Contact</a>
      </nav>
    </header>
  );
}
