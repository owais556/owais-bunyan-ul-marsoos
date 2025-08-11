import { PropsWithChildren, useRef, useState } from "react";

interface BentoTiltProps {
  className?: string;
}

const BentoTilt = ({
  children,
  className = "",
}: PropsWithChildren<BentoTiltProps>) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
  isImage?: boolean;
}

const BentoCard = ({ src, title, description, isImage = false }: BentoCardProps) => {
  return (
    <article className="relative size-full">
      {isImage ? (
        <img
          src={src}
          alt={title?.toString() || ""}
          loading="lazy"
          className="absolute left-0 top-0 w-full h-full object-fill"
        />
      ) : (
        <video
          src={src}
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="font-black text-4xl md:text-6xl font-sans uppercase tracking-wider shadow-lg">{title}</h1>
          {description && (
            <p className="font-mono text-base mt-3 max-w-64 md:text-lg font-light italic">{description}</p>
          )}
        </div>
      </div>
    </article>
  );
};

export const Features = () => {
  return (
    <section className="bg-black py-10">
      <div className="container mx-auto px-3 md:px-10">

        <BentoTilt className="border-hsla relative mb-7 mt-8 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/js10.mp4"
            title={
              <>
                G<b>2</b>9 <span className="text-green-400">vs</span> J<b>1</b>0C
              </>
            }
            description="Strategic air defense mission engaging multiple hostile targets with precision strikes"
          />
        </BentoTilt>

        <div
          id="nexus"
          className="flex flex-col gap-7 sm:grid sm:h-[100vh] sm:grid-cols-2 sm:grid-rows-3"
        >
          <BentoTilt className="bento-tilt_1 h-64 sm:h-auto sm:row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/img/qbz.jpg"
              isImage={true}
              title={
                <>
                  <span className="text-green-500">Tribu<b>t</b>e</span>
                </>
              }
              description="Honoring fallen heroes who sacrificed everything for the mission"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 h-64 sm:h-auto sm:row-span-2 sm:ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/video-1 copy.mp4"
              title={
                <>
                  <span className="text-white">6</span>-<span className="text-green-500">0</span>
                </>
              }
              description="Advanced surface-to-air missile system neutralizing aerial threats with lethal precision"
            />
          </BentoTilt>

        </div>
      </div>
    </section>
  );
};
