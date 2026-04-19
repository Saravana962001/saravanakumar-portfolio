/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParallaxBackground } from './components/ParallaxBackground';
import { CursorSparkles } from './components/CursorSparkles';

export default function App() {
  return (
    <div className="min-h-screen relative w-full bg-[#0A0A0B] text-white overflow-x-hidden">
      <CursorSparkles />
      <ParallaxBackground />
      
      <div className="relative z-10 max-w-[1024px] mx-auto px-5 md:px-8 py-10 w-full flex flex-col">
        <Header />
        
        <main className="flex flex-col gap-16">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
