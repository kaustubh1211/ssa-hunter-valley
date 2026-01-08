import Image from "next/image";
import Button from "../ui/Button";

export default function FeaturesSection() {
  const features = [
    "First venue in the world",
    "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
    "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
    "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
    "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
    "First one stop tennis academy inAsia Pacific"
  ];

  return (
    <section className="relative bg-white py-[12vw] md:py-[8vw] px-[6vw] md:px-[5vw] overflow-hidden">
      <Image 
        src="/feature/image.png" 
        alt="" 
        fill
        className="object-cover opacity-30"
      />

      <div className="relative z-10 max-w-[90vw] md:max-w-[85vw] mx-auto">
        
        <div className="flex items-start justify-between mb-[6vw] md:mb-[3vw]">
          <div>
            <div className="flex items-center gap-[1vw] mb-[2vw] md:mb-[1vw]">
              <h2 className="text-[6vw] md:text-[2.2vw] font-bold">key Features</h2>
              <div className="w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] bg-[#99B81B] rounded-full"></div>
            </div>
            <p className="text-[3.5vw] md:text-[0.9vw] text-gray-600 font-light">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <Button className="hidden md:block">Register Now</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[6vw] md:gap-[6vw] mb-[12vw] md:mb-[8vw]">
          <div className="space-y-[4vw] md:space-y-[1.8vw]">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-[2vw] md:gap-[0.8vw]">
                <Image 
                  src="/icons/arrow -right.svg" 
                  alt="" 
                  width={16} 
                  height={16}
                  className="flex-shrink-0 mt-[0.3vw]" 
                />
                <p className="text-[3.5vw] md:text-[0.85vw] text-gray-700 leading-[1.6]">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-[4vw] md:space-y-[1.8vw]">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-[2vw] md:gap-[0.8vw]">
                <Image 
                  src="/icons/arrow -right.svg" 
                  alt="" 
                  width={16} 
                  height={16}
                  className="flex-shrink-0 mt-[0.3vw]"
                />
                <p className="text-[3.5vw] md:text-[0.85vw] text-gray-700 leading-[1.6]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Button className="md:hidden w-full mb-[12vw]">Register Now</Button>

        <div className="flex items-start justify-between mb-[6vw] md:mb-[4vw]">
          <div>
            <div className="flex items-center gap-[1vw] mb-[2vw] md:mb-[1vw]">
              <h2 className="text-[6vw] md:text-[2.2vw] font-bold">A Glimpse of Excellence</h2>
              <div className="w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] bg-[#99B81B] rounded-full"></div>
            </div>
            <p className="text-[3.5vw] md:text-[0.9vw] text-gray-600 font-light">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <Button className="hidden md:block">Register Now</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-[3vw] md:gap-[2vw]">
          <div className="relative h-[70vw] md:h-[30vw]">
            <Image 
              src="/feature/keyfeature1.png" 
              alt="Tennis player" 
              fill
              className="object-cover rounded-[2vw] md:rounded-[1vw]"
            />
          </div>

          <div className="relative h-[70vw] md:h-[30vw]">
            <Image 
              src="/feature/keyfeature2.png" 
              alt="Tennis courts aerial view" 
              fill
              className="object-cover rounded-[2vw] md:rounded-[1vw]"
            />
          </div>
        </div>

        <Button className="md:hidden w-full mt-[6vw]">Register Now</Button>
      </div>
    </section>
  );
}