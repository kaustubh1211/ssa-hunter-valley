import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="top-0 left-0 right-0 bg-white z-50">
      <div className="flex items-center justify-between px-[3vw] py-[1vw]">
        <div className="w-[8vw] h-[3vw] relative">
          <Image 
            src="/logo.png" 
            alt="SSA Logo" 
            fill
            className="object-contain"
          />
        </div>
     
      </div>
    </nav>
  );
}