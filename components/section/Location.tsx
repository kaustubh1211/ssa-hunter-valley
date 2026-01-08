import Image from "next/image";

export default function Location() {
  const locations = [
    { name: "Hunter Valley Golf And Country Club", distance: "220m" },
    { name: "Rydges Resort Hunter Valley", distance: "550m" },
    { name: "Cessnock Airport", distance: "1.7km" },
    { name: "Cessnock CBD", distance: "7km" },
    { name: "Nulkaba Public School", distance: "4.8km" },
    { name: "Cessnock Hospital", distance: "7.3km" },
    { name: "Mcdonalds, KFC, Oporto", distance: "7km" }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div 
        className="py-[12vw] md:py-[6vw] px-[8vw] md:px-[5vw] text-white"
        style={{
          background: 'linear-gradient(148.19deg, #003A5D 3.49%, #99B81B 113.07%)'
        }}
      >
        <p className="text-[3vw] md:text-[0.9vw] font-normal mb-[2vw] md:mb-[1vw] tracking-wider uppercase">
          LAUNCHING
        </p>

        <h2 className="text-[7vw] md:text-[2.5vw] font-bold mb-[2vw] md:mb-[1vw] leading-tight">
          Signature Slam Academy<br />
          Hunter Valley
        </h2>

        <p className="text-[4vw] md:text-[1.2vw] font-medium mb-[6vw] md:mb-[3vw]">
          SSA Connectivity
        </p>

        <div className="space-y-[3vw] md:space-y-[1.5vw]">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center gap-[2vw] md:gap-[1vw]">
              <Image 
                src="/icons/flag.svg" 
                alt="" 
                width={20} 
                height={20}
                className="flex-shrink-0"
              />
              
              <span className="text-[3.5vw] md:text-[0.95vw] font-normal">
                {location.name}
              </span>

              <div className="flex-1 border-b border-dashed border-white/50 mx-[2vw] md:mx-[1vw]"></div>

              <span className="text-[3.5vw] md:text-[0.95vw] font-normal">
                {location.distance}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[80vw] md:h-auto">
        <Image 
          src="/location/launching.png" 
          alt="Hunter Valley Location" 
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}