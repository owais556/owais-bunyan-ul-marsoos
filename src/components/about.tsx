import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/azadi.jpg"
            alt="Pakistan Army Operation"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>

      {/* Quranic Reference Section */}
      <div className="w-screen py-16 relative">
        <div className="container mx-auto px-8 text-center">
          <h3 className="text-2xl font-bold text-green-400 mb-8">Quranic Reference</h3>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl text-white font-arabic leading-relaxed mb-8" dir="rtl">
              إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يُقَاتِلُونَ فِي سَبِيلِهِ صَفًّا كَأَنَّهُم بُنْيَانٌ مَّرْصُوصٌ
            </p>
            
            <blockquote className="text-xl md:text-2xl text-gray-200 italic mb-6 leading-relaxed">
              "Indeed, Allah loves those who fight in His cause in a row as though they are a structure joined firmly."
            </blockquote>
            
            <cite className="text-lg text-green-800 font-semibold">
              (Surah As-Saff, Verse 4)
            </cite>
          </div>
        </div>
      </div>

      {/* Important Statements Section */}
      <div 
        className="min-h-screen w-screen relative bg-cover bg-center bg-no-repeat bg-fixed py-16"
        style={{ backgroundImage: "url('/img/Welcome.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-8">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Sequence <span className="text-green-800">of</span> Events</h2>
          
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 max-w-4xl">
              <div className="text-white space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-semibold text-green-400">April 22, 2025</p>
                  <p>Following an attack on Hindu pilgrims in Pahalgam, India accused Pakistan of involvement. Pakistan offered neutral investigations, which India rejected.</p>
                </div>
                
                <div className="border-l-4 border-red-400 pl-4">
                  <p className="font-semibold text-red-400">May 7, 2025</p>
                  <p>India launched "Operation Sindoor" with missile strikes on Pakistan and Azad Kashmir, resulting in 33 martyrs and over 50 wounded.</p>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="font-semibold text-blue-400">May 9-10, 2025</p>
                  <p>India attacked Pakistani air bases, prompting Pakistan to launch Operation Bunyan Al Marsous in response.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-4xl font-bold text-white text-center mb-12">Important Statements</h3>

          <div className="grid md:grid-cols-3 gap-4 mb-20 items-stretch">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 h-[320px] flex flex-col justify-between">
              <blockquote className="text-white text-lg italic mb-6">
                "Pakistan's armed forces are ready to make every sacrifice for the defense of the country. We want peace, but we are not weak."
              </blockquote>
              <div className="text-green-400">
                <p className="font-bold text-sm">General Syed Asim Munir</p>
                <p className="text-sm opacity-80">Chief of Army Staff</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 h-[320px] flex flex-col justify-between">
              <blockquote className="text-white text-lg italic mb-6">
                "This operation is a manifestation of the Pakistani nation's unity and resolve. We have proven that we stand like a solid wall."
              </blockquote>
              <div className="text-green-400">
                <p className="font-bold">Defense Analyst</p>
                <p className="text-sm opacity-80">Senior Analyst</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 h-[320px] flex flex-col justify-between">
              <blockquote className="text-white text-lg italic mb-6">
                "Operation Bunyan Al Marsous has proven Pakistan's expertise in modern warfare capabilities."
              </blockquote>
              <div className="text-green-400">
                <p className="font-bold">International Expert</p>
                <p className="text-sm opacity-80">Defense Affairs Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
