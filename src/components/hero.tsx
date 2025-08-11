import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.oncanplaythrough = () => {
      // Small delay to ensure smooth transition
      setTimeout(() => setIsLoading(false), 300);
    };
    video.onerror = () => setIsLoading(false);
    video.src = '/videos/thishero.mp4';
    
    // Fallback timeout
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);


  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <section id="hero" className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover bg-black"
          src="/videos/thishero.mp4"
        />



        <div className="absolute left-0 top-0 z-40 size-full flex-center mt-8 md:mt-4 lg:-mt-4">
          <h1 className="text-center text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-zentry font-black uppercase px-4">
            <span className="text-green-400">Bunyan</span> <span className="text-white">ul</span> <span className="text-green-400">Marsoos</span>
          </h1>
        </div>
      </div>

    </section>
  );
};
