import Image from "next/image";
import Button from "../ui/Button";

export default function AboutUs() {
  const tabs = ["About Us", "Coaches", "Vision", "Mission"];
  
  return (
    <section className="bg-white py-[12vw] md:py-[8vw] px-[6vw] md:px-[5vw] relative overflow-hidden">
      
      <div className="absolute left-0 top-[1vw] w-[25vw] md:w-[15vw] h-[30vw] md:h-[20vw]">
        <Image 
          src="/about/vector.svg" 
          alt="" 
          fill
          className="object-contain "
        />
      </div>

      <div className="max-w-[90vw] md:max-w-[85vw] mx-auto relative z-10">
        
        <div className="text-center  mb-[8vw] md:mb-[4vw]">
          <p className="text-[4vw] md:text-[1.5vw] font-medium leading-tight mb-[6vw] md:mb-[3vw] max-w-[90vw] md:max-w-[50vw] mx-auto">
            To be the first venue in the world to have{" "}
            <span className="text-[#99B81B]">60 multi surface courts</span>{" "}
            at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.
          </p>

          <div className="flex items-center mt-[7vw] justify-center gap-[6vw] md:gap-[3vw] mb-[8vw] md:mb-[4vw] overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`text-[3.5vw] md:text-[1.1vw] font-bold pb-[1vw] md:pb-[0.5vw] whitespace-nowrap ${
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
            
            <div>
                <div className="flex items-center gap-[1vw] mb-[2vw] md:mb-[1vw]">
              <h2 className="text-[6vw] md:text-[2.2vw] font-bold">About Us</h2>
              <div className="w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] bg-[#99B81B] rounded-full"></div>
            </div>
              
              <p className="text-[3.5vw] md:text-[1vw] font-light leading-[1.6] mb-[6vw] md:mb-[3vw] text-gray-700">
                To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.
              </p>

              <div className="grid grid-cols-4 gap-[4vw] md:gap-[2vw] mb-[6vw] md:mb-[3vw]">
                <div>
                  <p className="text-[7vw] md:text-[2.8vw] font-bold text-[#99B81B] mb-[1vw] md:mb-[0.5vw]">20</p>
                  <p className="text-[2.5vw] md:text-[0.9vw] text-gray-600">courts</p>
                </div>
                <div>
                  <p className="text-[7vw] md:text-[2.8vw] font-bold text-[#99B81B] mb-[1vw] md:mb-[0.5vw]">12</p>
                  <p className="text-[2.5vw] md:text-[0.9vw] text-gray-600">coaches</p>
                </div>
                <div>
                  <p className="text-[7vw] md:text-[2.8vw] font-bold text-[#99B81B] mb-[1vw] md:mb-[0.5vw]">17</p>
                  <p className="text-[2.5vw] md:text-[0.9vw] text-gray-600">years</p>
                </div>
                <div>
                  <p className="text-[7vw] md:text-[2.8vw] font-bold text-[#99B81B] mb-[1vw] md:mb-[0.5vw]">10</p>
                  <p className="text-[2.5vw] md:text-[0.9vw] text-gray-600">clubs</p>
                </div>
              </div>

              <Button>Read More</Button>
            </div>
          </div>

   <div className="grid grid-cols-2 md:grid-cols-3 gap-[2vw] md:gap-[1vw]">
 
  <div className="relative h-[40vw] md:h-[14vw] col-span-1 md:col-span-2">
    <Image 
      src="/about/about1.png" 
      alt="Tennis coaching" 
      fill
      className="object-cover "
    />
  </div>

  <div className="relative h-[40vw] md:h-[14vw] col-span-1">
    <Image 
      src="/about/about2.png" 
      alt="Tennis player" 
      fill
      className="object-cover "
    />
  </div>

  <div className="relative h-[40vw] md:h-[14vw] col-span-1">
    <Image 
      src="/about/about-3.png" 
      alt="Tennis court" 
      fill
      className="object-cover "
    />
  </div>

  <div className="relative h-[40vw] md:h-[14vw] col-span-1 md:col-span-2">
    <Image 
      src="/about/about-4.png" 
      alt="Tennis player" 
      fill
      className="object-cover "
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}