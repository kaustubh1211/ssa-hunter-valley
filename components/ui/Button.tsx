interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`bg-[#99B81B] text-white px-[5vw] md:px-[2.5vw] py-[2vw] md:py-[1vw] rounded-full text-[3vw] md:text-[0.9vw] font-normal capitalize ${className}`}
    >
      {children}
    </button>
  );
}