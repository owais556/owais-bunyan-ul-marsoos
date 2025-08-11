import gsap from "gsap";
import { useRef } from "react";

import { AnimatedTitle } from "./animated-title";

export const Story = () => {
  const frameRef = useRef<HTMLVideoElement>(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (!element) return;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLVideoElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-40"
          src="/videos/hbg.mp4"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="flex size-full flex-col items-center pt-2 pb-24 relative z-10">
        <p className="font-general text-sm uppercase md:text-[12px] text-green-400 font-bold">
          ON 10 May 2025
        </p>

        <div className="flex flex-col items-center w-full max-w-4xl mx-auto -mt-2">
          <AnimatedTitle containerClass="mt-8 pointer-events-none relative z-10 !text-white text-4xl md:text-5xl lg:text-6xl text-center">
            {"Cyber Attack During <br /> Operation <br /> Bunyan Al Mars<b>o</b><b>o</b>s"}
          </AnimatedTitle>

          <div className="mt-10 flex justify-center">
            <div className="relative rounded-[30px] p-2 shadow-2xl border-4 border-gray-800 max-w-[600px] w-fit">
              <video
                ref={frameRef}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseEnter={handleMouseLeave}
                onMouseMove={handleMouseMove}
                src="/videos/cyberattack.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-auto h-auto max-w-[580px] max-h-[400px] rounded-[26px] bg-black"
                style={{ imageRendering: 'auto' as const }}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center px-4">
            <p className="max-w-2xl text-center font-circular-web text-gray-200 font-medium">
              Pakistan's cyber offensive targeted India's critical infrastructure, hacking BJP's website, power grids (Maharashtra outages), and 2,500+ CCTV cameras. Sensitive data from HAL, UIDAI, and BSF was breached. While Pakistan claimed 70% power grid disruption, India called it limited. Attacks used Crimson RAT malware and DDoS strikes, costing millions. India responded with upgraded cyber defenses. Global bodies raised concerns over cyber-warfare escalation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
