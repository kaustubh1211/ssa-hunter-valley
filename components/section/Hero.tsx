import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/hero/background.gif"
        alt="Hero Background"
        fill
        unoptimized
        className="object-cover"
        priority
      />
      
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 text-center text-white px-[5vw] max-w-[80vw]">
        <p className="text-[1.1vw] tracking-[0.4em] font-normal mb-[1.5vw]">
          SSA HUNTER VALLEY
        </p>
        
        <h1 className="text-[4.2vw] font-normal leading-[1.3] mb-[2.5vw]">
          GROW YOUR GAME WITH THE<br />
          <span className="font-bold">PROFESSIONALS</span>
        </h1>

        <div className="relative inline-block mb-[3vw]">
          <div 
            className="absolute inset-0 blur-[2px]"
            style={{
              background: 'linear-gradient(90deg, rgba(205, 237, 78, 0) 3.45%, #D2F24F 50.62%, rgba(210, 242, 79, 0) 91.38%)'
            }}
          ></div>
          
          <div className="relative flex items-center justify-center gap-[2.5vw] px-[3.5vw] py-[0.8vw]">
            <span className="text-[1.3vw] font-medium">ADOPT</span>
            <span className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#D2F24F]"></span>
            <span className="text-[1.3vw] font-medium">NURTURE</span>
            <span className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#D2F24F]"></span>
            <span className="text-[1.3vw] font-medium">DELIVER</span>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="border-[0.15vw] border-white text-white px-[2.5vw] py-[0.7vw] rounded-full text-[1.1vw] font-normal hover:bg-white hover:text-black transition-colors">
            Register Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-[3vw] left-1/2 -translate-x-1/2 hidden md:block">
        <Image
          src="/icons/arrow-down.svg" 
          alt="Scroll" 
          width={40} 
          height={40}
        />
      </div>

      {/* Desktop Right Side Widgets */}
      <div className="absolute right-0 top-[50%] -translate-y-1/2 flex flex-col gap-[3vw] hidden lg:flex">
        
        {/* Weather Widget */}
        <div className="relative">
          {/* Arrows and line */}
          <div className="absolute left-0 top-[50%] -translate-y-1/2 w-[4vw] flex items-center gap-[0.2vw]">
            <svg className="w-[0.8vw] h-[0.8vw]" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg className="w-[0.8vw] h-[0.8vw]" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute left-[2vw] top-[50%] -translate-y-1/2 w-[3.5vw] h-[0.08vw] bg-white"></div>
          
          {/* Weather content */}
          <div className="ml-[5.5vw] bg-[#99B81B]/80 backdrop-blur-sm rounded-l-[0.6vw] overflow-hidden w-[20vw]">
            {/* Header */}
            <div className="bg-[#99B81B] px-[1.5vw] py-[0.6vw] flex items-center justify-between">
              <span className="text-[0.85vw] font-bold tracking-[0.15em] text-white">WEATHER</span>
            </div>
            
            {/* Body */}
            <div className="px-[1.5vw] py-[1.2vw]">
              <p className="text-[1.1vw] font-bold text-white mb-[0.8vw]">Hunter Valley</p>
              
              <div className="flex items-start gap-[1.2vw]">
                <span className="text-[4vw] font-bold leading-none text-white">19°C</span>
                <div className="pt-[0.3vw]">
                  <p className="text-[1.1vw] font-bold text-white mb-[0.1vw]">Weather</p>
                  <p className="text-[0.85vw] font-normal text-white/90">Saturday, 8 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Matches Widget */}
        <div className="relative">
          {/* Arrows and line */}
          <div className="absolute left-0 top-[50%] -translate-y-1/2 w-[4vw] flex items-center gap-[0.2vw]">
            <svg className="w-[0.8vw] h-[0.8vw]" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg className="w-[0.8vw] h-[0.8vw]" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute left-[2vw] top-[50%] -translate-y-1/2 w-[3.5vw] h-[0.08vw] bg-white"></div>
          
          <div className="ml-[5.5vw] px-[1.5vw] py-[0.8vw]">
            <span className="text-[0.85vw] font-bold tracking-[0.15em] text-white">ONGOING MATCHES</span>
          </div>
        </div>

        {/* Score Widget */}
        <div className="relative">
          {/* Arrows and line */}
          <div className="absolute left-0 top-[50%] -translate-y-1/2 w-[4vw] flex items-center gap-[0.2vw]">
            <svg className="w-[0.8vw] h-[0.8vw]" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg className="w-[0.8vw] h-[0.8vw]" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute left-[2vw] top-[50%] -translate-y-1/2 w-[3.5vw] h-[0.08vw] bg-white"></div>
          
          <div className="ml-[5.5vw] px-[1.5vw] py-[0.8vw]">
            <span className="text-[0.85vw] font-bold tracking-[0.15em] text-white">SCORE</span>
          </div>
        </div>

      </div>
      
      {/* Mobile version */}
      <div className="absolute right-4 bottom-20 flex flex-col gap-4 lg:hidden">
        <div className="bg-[#99B81B]/80 backdrop-blur-sm rounded-l-lg overflow-hidden w-48">
          <div className="bg-[#99B81B] px-4 py-2">
            <span className="text-xs font-bold tracking-wider text-white">WEATHER</span>
          </div>
          <div className="px-4 py-3">
            <p className="text-sm font-bold text-white mb-2">Hunter Valley</p>
            <div className="flex items-start gap-3">
              <span className="text-4xl font-bold leading-none text-white">19°C</span>
              <div className="pt-1">
                <p className="text-sm font-bold text-white">Weather</p>
                <p className="text-xs text-white/90">Saturday, 8 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}