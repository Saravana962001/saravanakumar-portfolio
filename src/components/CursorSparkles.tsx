import React, { useEffect, useRef } from 'react';

export function CursorSparkles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastMouseSpawn = 0;
    let lastScrollSpawn = 0;
    
    // Default off-screen until mouse moves
    let mouseX = -100;
    let mouseY = -100;

    const createSparkle = (x: number, y: number) => {
      if (!containerRef.current) return;

      const sparkle = document.createElement('div');
      const isBlue = Math.random() > 0.5;
      
      sparkle.style.backgroundColor = isBlue ? '#00E5FF' : '#FFFFFF';
      
      const size = Math.random() * 5 + 3; 
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.position = 'absolute';
      // Add slight random offset to scatter them around the cursor
      const offsetX = (Math.random() - 0.5) * 20;
      const offsetY = (Math.random() - 0.5) * 20;
      sparkle.style.left = `${x + offsetX}px`;
      sparkle.style.top = `${y + offsetY}px`;
      sparkle.style.pointerEvents = 'none';

      if (Math.random() > 0.5) {
        sparkle.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
      } else {
        sparkle.style.borderRadius = '50%';
      }
      
      if (isBlue) {
        sparkle.style.filter = 'drop-shadow(0 0 4px rgba(0, 229, 255, 0.8)) drop-shadow(0 0 8px rgba(0, 229, 255, 0.4))';
      } else {
        sparkle.style.filter = 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))';
      }

      containerRef.current.appendChild(sparkle);

      const distance = Math.random() * 80 + 20;
      const angle = Math.random() * Math.PI * 2;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance + 30; // added gravity down-drift

      const animation = sparkle.animate([
        { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)', opacity: 1 },
        { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0) rotate(${Math.random() * 180}deg)`, opacity: 0 }
      ], {
        duration: 600 + Math.random() * 600,
        easing: 'cubic-bezier(0, .9, .57, 1)',
      });

      animation.onfinish = () => {
        sparkle.remove();
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      const now = performance.now();
      if (now - lastMouseSpawn < 30) return;
      lastMouseSpawn = now;

      // Spawn 1 sparkle on normal mouse movement
      createSparkle(mouseX, mouseY);
    };

    const handleScroll = () => {
      // Don't spawn if user hasn't moved the mouse yet
      if (mouseX < 0 || mouseY < 0) return;

      const now = performance.now();
      if (now - lastScrollSpawn < 20) return; // Throttled to allow bursts, but prevent performance dipping
      lastScrollSpawn = now;

      // Spawn 2-3 extra sparkles in a burst to visualize scrolling speed
      const burstCount = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < burstCount; i++) {
        createSparkle(mouseX, mouseY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[100]" />;
}
