import Image from "next/image";

export default function CoachesEvents() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[20vw]">
      
      <div className="relative h-[60vw] md:h-full overflow-hidden group cursor-pointer">
        <Image 
          src="/coches&event/coches-1.png" 
          alt="Our Coaches" 
          fill
          className="object-cover"
        />
        
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 h-full flex flex-col justify-center px-[8vw] md:px-[5vw] text-white">
          <div className="flex items-center gap-[1vw] mb-[2vw] md:mb-[1vw]">
            <h2 className="text-[6vw] md:text-[2.5vw] font-bold">Our Coaches</h2>
            <div className="w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] bg-[#99B81B] rounded-full"></div>
          </div>

          <p className="text-[3.5vw] md:text-[0.95vw] font-light mb-[4vw] md:mb-[2vw] max-w-[80vw] md:max-w-[20vw] leading-[1.6]">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          <button className="flex items-center gap-[2vw] md:gap-[0.8vw] text-[3.5vw] md:text-[0.95vw] font-medium group-hover:gap-[3vw] md:group-hover:gap-[1.2vw] transition-all">
            Read More
            <span className="text-[4vw] md:text-[1.5vw]">→</span>
          </button>
        </div>
      </div>

      <div className="relative h-[60vw] md:h-full overflow-hidden group cursor-pointer bg-[#99B81B]">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/coches&event/coches-2.png" 
            alt="Events" 
            fill
            className="object-cover " 
          />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-[8vw] md:px-[5vw] text-white">
          <div className="flex items-center gap-[1vw] mb-[2vw] md:mb-[1vw]">
            <h2 className="text-[6vw] md:text-[2.5vw] font-bold">Events</h2>
            <div className="w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] bg-white rounded-full"></div>
          </div>

          <p className="text-[3.5vw] md:text-[0.95vw] font-light mb-[4vw] md:mb-[2vw] max-w-[80vw] md:max-w-[20vw] leading-[1.6]">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          <button className="flex items-center gap-[2vw] md:gap-[0.8vw] text-[3.5vw] md:text-[0.95vw] font-medium group-hover:gap-[3vw] md:group-hover:gap-[1.2vw] transition-all">
            Read More
            <span className="text-[4vw] md:text-[1.5vw]">→</span>
          </button>
        </div>
      </div>

    </section>
  );
}