import { PropsWithChildren, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
  containerClass?: string;
}

export const AnimatedTitle = ({
  children,
  containerClass,
}: PropsWithChildren<AnimatedTitleProps>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set all animated words to be visible immediately without animation
    const words = document.querySelectorAll('.animated-word');
    words.forEach(word => {
      (word as HTMLElement).style.opacity = '1';
      (word as HTMLElement).style.transform = 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)';
    });
  }, []);

  return (
    <div ref={containerRef} className={cn("animated-title", containerClass)}>
      {children
        ?.toString()
        .split("<br />")
        .map((line) => (
          <h1
            key={line}
            className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          >
            {line.split(" ").map((word) => (
              <span
                key={`${line}-${word}`}
                className="animated-word"
                dangerouslySetInnerHTML={{ __html: word }}
              />
            ))}
          </h1>
        ))}
    </div>
  );
};
