import Image from "next/image";
import Button from "../ui/Button";

export default function AboutUs() {
  const tabs = ["About Us", "Coaches", "Vision", "Mission"];
  
  return (
    <section className="bg-white py-[12vw] md:py-[8vw] px-[6vw] md:px-[5vw] relative overflow-hidden">
      
      <div className="absolute left-0 top-[5vw] w-[25vw] md:w-[15vw] h-[30vw] md:h-[20vw]">
        <Image 
          src="/about/Vector.svg" 
          alt="" 
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[90vw] mx-auto relative z-10">
        
        <div className="text-center mb-[8vw] md:mb-[4vw]">
          <p className="text-[4vw] md:text-[1.7vw] font-medium leading-tight mb-[6vw] md:mb-[3vw] max-w-[90vw] md:max-w-[50vw] mx-auto">
            To be the first venue in the world to have{" "}
            <span className="text-[#99B81B]">60 multi surface courts</span>{" "}
            at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.
          </p>

          <div className="flex items-center justify-center gap-[6vw] md:gap-[3vw] mb-[8vw] md:mb-[4vw] overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`text-[3.5vw] md:text-[1.2vw] font-bold pb-[1vw] md:pb-[0.5vw] whitespace-nowrap ${
                  index === 0
                    ? "text-black border-b-[0.3vw] md:border-b-[0.2vw] border-black"
                    : "text-[#D1D1D1]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8vw] md:gap-[4vw] items-start">
          
          <div className="flex items-start gap-[3vw] md:gap-[1.5vw]">
            <div className="w-[1vw] h-[1vw] md:w-[0.4vw] md:h-[0.4vw] bg-[#99B81B] rounded-full mt-[1vw] md:mt-[0.5vw] flex-shrink-0"></div>
            
            <div>
              <h2 className="text-[6vw] md:text-[2.5vw] font-bold mb-[4vw] md:mb-[2vw]">About Us</h2>
              
              <p className="text-[3.5vw] md:text-[1.1vw] font-light leading-[1.6] mb-[6vw] md:mb-[3vw] text-gray-700">
                To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.
              </p>

              <div className="grid grid-cols-4 gap-[4vw] md:gap-[2vw] mb-[6vw] md:mb-[3vw]">
                <div>
                  <p className="text-[7vw] md:text-[3vw] font-bold text-[#99B81B] mb-[1vw] md:mb-[0.5vw]">20</p>
                  <p className="text-[2.5vw] md:text-[1vw] text-gray-600">courts</p>
                </div>
                <div>
                  <p className="text-[7vw] md:text-[3vw] font-bold text-[#99B81B] mb-[1vw] md:mb-[0.5vw]">12</p>
                  <p className="text-[2.5vw] md:text-[1vw] text-gray-600">coaches</p>
                </div>
                <div>
                  <p className="text-[7vw] md:text-[3vw] font-bold text-[#99B81B] mb-[1vw] md:mb-[0.5vw]">17</p>
                  <p className="text-[2.5vw] md:text-[1vw] text-gray-600">years</p>
                </div>
                <div>
                  <p className="text-[7vw] md:text-[3vw] font-bold text-[#99B81B] mb-[1vw] md:mb-[0.5vw]">10</p>
                  <p className="text-[2.5vw] md:text-[1vw] text-gray-600">clubs</p>
                </div>
              </div>

              <Button>Read More</Button>
            </div>
          </div>
<div className="grid grid-cols-[2fr_1fr] gap-[2vw] md:gap-[1vw]">
  <div className="relative h-[40vw] md:h-[14vw]">
    <Image 
      src="/about/about1.png" 
      alt="Tennis coaching" 
      fill
      className="object-cover rounded-[2vw] md:rounded-[1vw]"
    />
  </div>
  <div className="relative h-[40vw] md:h-[14vw]">
    <Image 
      src="/about/about2.png" 
      alt="Tennis player" 
      fill
      className="object-cover rounded-[2vw] md:rounded-[1vw]"
    />
  </div>

  <div className="relative h-[40vw] md:h-[14vw]">
    <Image 
      src="/about/about-3.png" 
      alt="Tennis court" 
      fill
      className="object-cover rounded-[2vw] md:rounded-[1vw]"
    />
  </div>
  <div className="relative h-[40vw] md:h-[14vw]">
    <Image 
      src="/about/about-4.png" 
      alt="Tennis player" 
      fill
      className="object-cover rounded-[2vw] md:rounded-[1vw]"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}