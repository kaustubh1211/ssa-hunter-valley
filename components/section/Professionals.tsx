import Image from "next/image";
import Button from "../ui/Button";

export default function Professionals() {
  const professionals = [
    {
      image: "/professionals/professionals-1.png",
      name: "Craig Tiley",
      role: "CEO Tennis Australia & Australian Open"
    },
    {
      image: "/professionals/professionals-2.png",
      name: "Stephen Farrow",
      role: "Director - Tournament, Players & International Relations"
    },
    {
      image: "/professionals/professionals-3.png",
      name: "Cameron Pearson",
      role: "Head Major Events - Tennis Australia"
    }
  ];

  return (
    <section className="bg-white py-[12vw] md:py-[8vw] px-[6vw] md:px-[5vw]">
      <div className="max-w-[90vw] md:max-w-[85vw] mx-auto">
        
        <div className="flex items-start justify-between mb-[6vw] md:mb-[4vw]">
          <div>
            <div className="flex items-center gap-[1vw] mb-[2vw] md:mb-[1vw]">
              <h2 className="text-[6vw] md:text-[2.2vw] font-bold">Meet our professionals</h2>
              <div className="w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] bg-[#99B81B] rounded-full"></div>
            </div>
            <p className="text-[3.5vw] md:text-[0.9vw] text-gray-600 font-light max-w-[90vw] md:max-w-[25vw] leading-[1.6]">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <Button className="hidden md:block">View All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6vw] md:gap-[2vw]">
          {professionals.map((professional, index) => (
            <div key={index}>
              <div className="relative w-full h-[80vw] md:h-[24vw] rounded-[2vw] md:rounded-[1vw] overflow-hidden mb-[3vw] md:mb-[1.5vw]">
                <Image 
                  src={professional.image} 
                  alt={professional.name} 
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-[4.5vw] md:text-[1.3vw] font-bold mb-[1vw] md:mb-[0.5vw]">
                {professional.name}
              </h3>
              <p className="text-[3.5vw] md:text-[0.9vw] md:w-[12vw] text-gray-600 font-light italic">
                {professional.role}
              </p>
            </div>
          ))}
        </div>

        <Button className="md:hidden w-full mt-[6vw]">View All</Button>
      </div>
    </section>
  );
}