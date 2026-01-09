import Image from "next/image";

export default function Quote() {
  return (
    <section className="relative w-full h-[50vw] md:h-[25vw] flex items-center  px-[6vw] md:px-[18vw] ">
      <Image 
        src="/quote/quote-bg.svg" 
        alt="" 
        fill
        className="object-cover"
      />
      
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 text-white max-w-[400vw] md:max-w-[100vw]">
        <p className="text-[4vw] md:text-[1.8vw] font-semibold leading-[1.4] mb-[3vw] md:mb-[2vw] ">
          " We have created an environment ideal for building craft. Our goal is to be recognized as the best tennis performance centre in the world. "
        </p>

        <div className="w-[70vw] md:w-[70vw] h-[0.2vw] md:h-[0.1vw] bg-white mb-[2vw] md:mb-[1vw] items-center"></div>

        <div>
          <p className="text-[3.5vw] md:text-[1.2vw] font-bold mb-[0.5vw]">John Doe</p>
          <p className="text-[3vw] md:text-[1vw] ">Chairman</p>
        </div>
      </div>
    </section>
  );
}