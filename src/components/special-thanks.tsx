export const SpecialThanks = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
            Special <span className="text-green-400">Thanks</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 max-w-6xl mx-auto">
            {/* University & Competition Card */}
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20 min-h-[300px] md:min-h-[320px] grid grid-rows-[1fr_auto] gap-6">
              <div className="text-white text-lg md:text-xl leading-relaxed font-medium">
                Special thanks to <strong className="text-green-300 font-bold">The University for Modern Sciences</strong> for 
                organizing this prestigious competition and providing an exceptional platform for innovation and creativity.
              </div>
              <div className="text-green-400">
                <p className="font-bold text-sm md:text-base">University for Modern Sciences</p>
                <p className="text-xs md:text-sm opacity-80">Competition Organizer & Theme</p>
              </div>
            </div>

            {/* Training Card */}
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20 min-h-[300px] md:min-h-[320px] grid grid-rows-[1fr_auto] gap-6">
              <div className="text-white text-lg md:text-xl leading-relaxed font-medium">
                I am deeply grateful to <strong className="text-green-300 font-bold">Lyceumerce Private Ltd</strong> for 
                providing exceptional training and skills necessary to create this project.
              </div>
              <div className="text-green-400">
                <p className="font-bold text-sm md:text-base">Lyceumerce Private Ltd</p>
                <p className="text-xs md:text-sm opacity-80">Training & Development Partner</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};