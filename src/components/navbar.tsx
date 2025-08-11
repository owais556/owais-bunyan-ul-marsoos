import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";

import { cn } from "@/lib/utils";

export const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const { y: currentScrollY } = useWindowScroll();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prevAudioPlaying) => !prevAudioPlaying);
    setIsIndicatorActive((prevIndicatorActive) => !prevIndicatorActive);
  };

  useEffect(() => {
    if (isAudioPlaying) void audioElementRef.current?.play();
    else audioElementRef.current?.pause();
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <header
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <div className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <a href="#hero" className="transition hover:opacity-75">
              <img src="/img/logoicon.png" alt="Pakistan Army Logo" loading="eager" className="w-10" />
            </a>
            
            <h1 className="special-font text-xs sm:text-sm md:text-xl font-bold text-white drop-shadow-lg">
              Operation <span className="text-green-400">Bunyan</span> ul Marsoos
            </h1>
          </div>

          <div className="flex h-full items-center">

            <div className="flex items-center gap-4">
              <button
                onClick={toggleAudioIndicator}
                className="ml-10 flex items-center space-x-1 p-2 transition hover:opacity-75"
                title="Play Audio"
              >
                <audio
                  ref={audioElementRef}
                  src="/audio/loop.mp3"
                  className="hidden"
                  loop
                />

                {Array(4)
                  .fill("")
                  .map((_, i) => {
                    return (
                      <div
                        key={i + 1}
                        className={cn(
                          "indicator-line",
                          isIndicatorActive && "active"
                        )}
                        style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                      />
                    );
                  })}
              </button>

            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
