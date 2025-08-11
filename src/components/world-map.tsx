'use client';

import { useEffect, useRef } from 'react';

export const WorldMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const boxes = container.querySelectorAll('.service-box');
    
    boxes.forEach((box) => {
      const handleMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = box.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        
        // Create cursor trail effect
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
          position: absolute;
          left: ${x}px;
          top: ${y}px;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, #22c55e 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10;
          animation: fadeOut 0.8s ease-out forwards;
        `;
        
        box.appendChild(trail);
        
        // Remove trail after animation
        setTimeout(() => {
          if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
          }
        }, 800);
      };

      box.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        box.removeEventListener('mousemove', handleMouseMove);
      };
    });

    // Add CSS animation for trail fade out
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeOut {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(0.3);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
    </div>
  );
};