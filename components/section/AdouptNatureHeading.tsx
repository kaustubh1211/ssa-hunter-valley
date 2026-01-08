export default function AdoptNurture() {
  const words = [
    { text: "ADOPT", outlined: false },
    { text: "NURTURE", outlined: true },
    { text: "DELIVER", outlined: false },
    { text: "ADOPT", outlined: true },
    { text: "NURTURE", outlined: false }
  ];

  return (
    <section className="bg-white py-[8vw] md:py-[5vw] px-[6vw] md:px-[5vw] overflow-hidden">
      <div className="flex items-center justify-center gap-[3vw] md:gap-[2vw] whitespace-nowrap">
        {words.map((word, index) => (
          <>
            <span 
              key={index}
              className={`text-[8vw] md:text-[3.5vw] font-bold tracking-[0.065em] uppercase ${
                word.outlined 
                  ? "text-transparent" 
                  : "text-[#99B81B]"
              }`}
              style={word.outlined ? {
                WebkitTextStroke: '2px #99B81B',
                textStroke: '2px #99B81B'
              } : {}}
            >
              {word.text}
            </span>
            {index < words.length - 1 && (
              <span className="text-[8vw] md:text-[3.5vw] font-bold text-[#99B81B]">•</span>
            )}
          </>
        ))}
      </div>
    </section>
  );
}