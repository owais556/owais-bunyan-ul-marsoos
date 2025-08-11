export const Contact = () => {
  return (
    <section id="contact" className="my-4 sm:my-8 min-h-dvh w-screen px-4 sm:px-10">
      <div className="relative rounded-lg bg-black py-12 sm:py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-70"
            src="/videos/last.mp4"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        

        <div className="flex flex-col items-center text-center relative z-10">
          
          <p className="font-general text-[10px] uppercase text-green-400 font-bold relative z-10">Join the Spirit</p>

          <p className="special-font mt-6 sm:mt-10 w-full font-zentry text-3xl sm:text-5xl leading-[0.9] md:text-[6rem] text-white drop-shadow-2xl px-4 relative z-10">
            Let&apos;s b<b className="text-green-400">u</b>ild the
            <br /> future of a secure <br /> and sovereign Pakistan t<b className="text-green-400">o</b>gether
          </p>

        </div>
      </div>
    </section>
  );
};
