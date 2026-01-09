import Image from "next/image";

export default function Facilities() {
  const facilities = [
    {
      image: "/facilities/facilites-1.png",
      title: "Tennis",
      tags: ["20 Clay Courts", "4 Hard Courts"],
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: "/facilities/facilites-2.png",
      title: "Accommodation",
      tags: ["5 Star Hotel"],
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: "/facilities/facilites-3.png",
      title: "Fitness",
      tags: ["Gym", "Fitness Room", ],
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: "/facilities/facilites-4.png",
      title: "Recovery",
      tags: ["Pool", "Spa", "Massage"],
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ];

  return (
    <section className="bg-white py-[12vw] md:py-[8vw] relative overflow-hidden">
      <div className="max-w-[90vw] md:max-w-[95vw] mx-auto mb-[8vw] md:mb-[5vw] px-[6vw] md:px-[5vw]">
        <div className="flex items-center gap-[1vw] mb-[2vw] md:mb-[1vw]">
          <h2 className="text-[6vw] md:text-[2.2vw] font-bold">Facilities</h2>
          <div className="w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] bg-[#99B81B] rounded-full"></div>
        </div>
        <p className="text-[3.5vw] md:text-[0.9vw] text-gray-600 font-light max-w-[90vw] md:max-w-[25vw] leading-[1.6]">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>

      <div className="relative">
        <div 
          className="absolute left-0 right-0 w-screen top-[15vw] md:top-[8vw] h-[160vw] md:h-[40vw]"
          style={{
            background: 'linear-gradient(103.14deg, #002F50 11.16%, #99B81B 111.06%)'
          }}
        >
          <div className="absolute right-0 top-0 w-[50vw] h-full opacity-10">
            <Image 
              src="/icons/trophy.svg" 
              alt="" 
              fill
              className="object-contain object-right"
            />
          </div>
        </div>

        <div className="relative max-w-[90vw] md:max-w-[85vw] mx-auto px-[6vw] md:px-[5vw]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vw] md:gap-[2vw] mb-[8vw] md:mb-[4vw] md:w-[70%]">
            {[facilities[0], facilities[1]].map((facility, index) => (
              <div key={index}>
                <div className="relative w-full h-[85vw] md:h-[22vw] rounded-[2vw] md:rounded-[1vw] overflow-hidden mb-[3vw] md:mb-[1.5vw]">
                  <Image 
                    src={facility.image} 
                    alt={facility.title} 
                    fill
                    className="object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-black/20"></div>

                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[10vw] h-[10vw] md:w-[3.5vw] md:h-[3.5vw] bg-white rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-t-[1vw] md:border-t-[0.4vw] border-t-transparent border-l-[1.5vw] md:border-l-[0.6vw] border-l-[#99B81B] border-b-[1vw] md:border-b-[0.4vw] border-b-transparent ml-[0.3vw] md:ml-[0.1vw]"></div>
                  </div>
                </div>

                <h3 className="text-[5vw] md:text-[1.5vw] font-bold text-white mb-[2vw] md:mb-[1vw]">
                  {facility.title}
                </h3>

                <div className="flex flex-wrap gap-[2vw] md:gap-[0.8vw] mb-[2vw] md:mb-[1vw]">
                  {facility.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-[#99B81B] text-white px-[3vw] md:px-[1vw] py-[1vw] md:py-[0.4vw] rounded-full text-[3vw] md:text-[0.75vw] font-normal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[3.5vw] md:text-[0.85vw] text-white/80 font-light leading-[1.6]">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vw] md:gap-[2vw] md:w-[70%] md:ml-auto">
            {[facilities[2], facilities[3]].map((facility, index) => (
              <div key={index}>
                <div className="relative w-full h-[85vw] md:h-[22vw] rounded-[2vw] md:rounded-[1vw] overflow-hidden mb-[3vw] md:mb-[1.5vw]">
                  <Image 
                    src={facility.image} 
                    alt={facility.title} 
                    fill
                    className="object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-black/20"></div>

                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[10vw] h-[10vw] md:w-[3.5vw] md:h-[3.5vw] bg-white rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-t-[1vw] md:border-t-[0.4vw] border-t-transparent border-l-[1.5vw] md:border-l-[0.6vw] border-l-[#99B81B] border-b-[1vw] md:border-b-[0.4vw] border-b-transparent ml-[0.3vw] md:ml-[0.1vw]"></div>
                  </div>
                </div>

                <h3 className="text-[5vw] md:text-[1.5vw] font-bold text-black mb-[2vw] md:mb-[1vw]">
                  {facility.title}
                </h3>

                <div className="flex flex-wrap gap-[2vw] md:gap-[0.8vw] mb-[2vw] md:mb-[1vw]">
                  {facility.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-[#99B81B] text-white px-[3vw] md:px-[1vw] py-[1vw] md:py-[0.4vw] rounded-full text-[3vw] md:text-[0.75vw] font-normal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[3.5vw] md:text-[0.85vw] text-black/80 font-light leading-[1.6]">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}