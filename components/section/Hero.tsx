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
        <p className="text-[3vw] md:text-[0.9vw] tracking-[0.3em] font-normal mb-[3vw] md:mb-[1.5vw]">
          SSA HUNTER VALLEY
        </p>
        
        <h1 className="text-[7vw] md:text-[3.5vw] font-normal leading-[1.3] mb-[4vw] md:mb-[2.5vw]">
          GROW YOUR GAME WITH THE<br />
          <span className="font-bold">PROFESSIONALS</span>
        </h1>

        <div className="relative inline-block mb-[5vw] md:mb-[3vw]">
          <div 
            className="absolute inset-0 blur-[2px]"
            style={{
              background: 'linear-gradient(90deg, rgba(205, 237, 78, 0) 3.45%, #D2F24F 50.62%, rgba(210, 242, 79, 0) 91.38%)'
            }}
          ></div>
          
          <div className="relative flex items-center justify-center gap-[4vw] md:gap-[2.5vw] px-[5vw] md:px-[3.5vw] py-[1.5vw] md:py-[0.8vw]">
            <span className="text-[2.5vw] md:text-[1.1vw] font-medium">ADOPT</span>
            <span className="w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] rounded-full bg-[#D2F24F]"></span>
            <span className="text-[2.5vw] md:text-[1.1vw] font-medium">NURTURE</span>
            <span className="w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] rounded-full bg-[#D2F24F]"></span>
            <span className="text-[2.5vw] md:text-[1.1vw] font-medium">DELIVER</span>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="border-[0.2vw] border-white text-white px-[5vw] md:px-[2.5vw] py-[1.5vw] md:py-[0.7vw] rounded-full text-[3vw] md:text-[1vw] font-normal hover:bg-white hover:text-black transition-colors">
            Register Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-[3vw] left-1/2 -translate-x-1/2 hidden md:block">
        <Image
          src="/icons/down-arrow.svg" 
          alt="Scroll" 
          width={20} 
          height={40}
        />
      </div>

{/* Desktop Right Side Widgets */}
<div className="absolute right-0 top-[70%] -translate-y-1/2 hidden lg:flex flex-col gap-[2vw] items-end">
  
  {/* Weather Widget */}

    {/* Left side: Arrows */}
    <div className="flex  items-center gap-[0.5vw]">
    {/* Left side: Arrows */}
    <div className="flex items-center gap-[0.2vw]">
      <Image src="/icons/left-arrow.svg" alt="" width={12} height={12} className="w-[0.7vw] h-[0.7vw]" />
      <Image src="/icons/left-arrow.svg" alt="" width={12} height={12} className="w-[0.7vw] h-[0.7vw]" />
    </div>
    
    {/* Label + Line */}
    <div className="flex items-center gap-[1vw]">
      <span className="text-[0.8vw] font-bold tracking-[0.2em] text-white whitespace-nowrap">SCORE</span>
      <div className="w-full">
        <Image src="/icons/line.svg" alt="" width={100} height={1} className="w-full h-[0.05vw]" />
      </div>
    </div>
  </div>
      
      {/* Weather Card with More Transparency */}
      <div 
        className=" overflow-hidden w-[18vw] "
        style={{
          background: 'linear-gradient(135deg, rgba(153, 184, 27, 0.5) 0%, rgba(153, 184, 27, 0.3) 100%)'
        }}
      >
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
   


  {/* Ongoing Matches Widget */}
  <div className="flex items-center gap-[0.5vw]">
    {/* Left side: Arrows */}
    <div className="flex items-center gap-[0.2vw]">
      <Image src="/icons/left-arrow.svg" alt="" width={12} height={12} className="w-[0.7vw] h-[0.7vw]" />
      <Image src="/icons/left-arrow.svg" alt="" width={12} height={12} className="w-[0.7vw] h-[0.7vw]" />
    </div>
    
    {/* Label + Line */}
    <div className="flex items-center gap-[1vw]">
      <span className="text-[0.8vw] font-bold tracking-[0.2em] text-white whitespace-nowrap">ONGOING MATCHES</span>
      <div className="w-full">
        <Image src="/icons/line.svg" alt="" width={100} height={1} className="w-full h-[0.05vw]" />
      </div>
    </div>
  </div>

  {/* Score Widget */}
  <div className="flex items-center gap-[0.5vw]">
    {/* Left side: Arrows */}
    <div className="flex items-center gap-[0.2vw]">
      <Image src="/icons/left-arrow.svg" alt="" width={12} height={12} className="w-[0.7vw] h-[0.7vw]" />
      <Image src="/icons/left-arrow.svg" alt="" width={12} height={12} className="w-[0.7vw] h-[0.7vw]" />
    </div>
    
    {/* Label + Line */}
    <div className="flex items-center gap-[1vw]">
      <span className="text-[0.8vw] font-bold tracking-[0.2em] text-white whitespace-nowrap">SCORE</span>
      <div className="w-full">
        <Image src="/icons/line.svg" alt="" width={100} height={1} className="w-full h-[0.05vw]" />
      </div>
    </div>
  </div>

</div>
    </section>
  );
}