import Image from "next/image";
import Button from "../ui/Button";

export default function Programs() {
  const programs = [
    {
      image: "/program/program-1.png",
      title: "Academy",
      subtitle: "Live and train with us"
    },
    {
      image: "/program/program-2.svg",
      title: "Camps",
      subtitle: "Train like a pro with us   "
    },
    {
      image: "/program/program-3.png",
      title: "Performance",
      subtitle: "Elevate your game with us"
    }
  ];

  return (
    <section className="bg-white py-[12vw] md:py-[8vw] px-[6vw] md:px-[5vw]">
      <div className="max-w-[90vw] md:max-w-[85vw] mx-auto">
        
        <div className="flex items-start justify-between mb-[6vw] md:mb-[4vw]">
          <div>
            <div className="flex items-center gap-[1vw] mb-[2vw] md:mb-[1vw]">
              <h2 className="text-[6vw] md:text-[2.2vw] font-bold">Programs</h2>
              <div className="w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] bg-[#99B81B] rounded-full"></div>
            </div>
            <p className="text-[3.5vw] md:text-[0.9vw] text-gray-600 font-light max-w-[90vw] md:max-w-[35vw] leading-[1.6]">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <Button className="hidden md:block">Register Now</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw] md:gap-[2vw]">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="relative w-full h-[80vw] md:h-[33vw] rounded-[2vw] md:rounded-[1vw] overflow-hidden group cursor-pointer"
            >
              <Image 
                src={program.image} 
                alt={program.title} 
                fill
                className="object-cover"
              />
              
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute inset-0 flex flex-col items-center  justify-end mb-3  text-white text-center px-[4vw]">
                <h3 className="text-[5vw] md:text-[1.5vw] font-bold mb-[1vw] md:mb-[0.5vw]">
                  {program.title}
                </h3>
                <p className="text-[3vw] md:text-[0.85vw] font-light">
                  {program.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button className="md:hidden w-full mt-[6vw]">Register Now</Button>
      </div>
    </section>
  );
}