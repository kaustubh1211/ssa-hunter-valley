import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const topLinks = [
    { name: "About Us", href: "#" },
    { name: "Coaches", href: "#" },
    { name: "News", href: "#" },
    { name: "Matches", href: "#" },
    { name: "Events", href: "#" },
    { name: "FAQs", href: "#" }
  ];

  const bottomLinks = [
    { name: "Programs", href: "#" },
    { name: "Amenities", href: "#" },
    { name: "Blogs", href: "#" }
  ];
  const socialLinks = [
    { icon: "/icons/facebook.svg", href: "#", name: "Facebook" },
    { icon: "/icons/x.svg", href: "#", name: "Twitter" },
    { icon: "/icons/instagram.svg", href: "#", name: "Instagram" },
    { icon: "/icons/youtube.svg", href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-white pt-[12vw] md:pt-[6vw] pb-0">
<div className="max-w-[90vw] md:max-w-[85vw] mx-auto px-[6vw] md:px-[5vw]">
  
  <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-[6vw] md:gap-[8vw] mb-[6vw] md:mb-[3vw]">
    
    {/* Left Side - Logo Only (30%) */}
    <div className="flex items-center">
      <div className="w-[20vw] md:w-[15vw] h-[10vw] md:h-[8vw] relative">
        <Image 
          src="/logo-black.png" 
          alt="SSA Logo" 
          fill
          className="object-contain object-left"
        />
      </div>
    </div>

    {/* Right Side - All Content (70%) */}
    <div>
      {/* Top Links */}
      <div className="flex flex-wrap gap-x-[6vw] gap-y-[3vw] md:gap-x-[7vw] md:gap-y-[2vw] mb-[4vw] md:mb-[2.5vw]">
        {topLinks.map((link, index) => (
          <Link 
            key={index}
            href={link.href}
            className="text-[3.5vw] md:text-[0.95vw] text-gray-800 hover:text-[#99B81B] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Bottom Links */}
      <div className="flex flex-wrap gap-x-[6vw] gap-y-[3vw] md:gap-x-[7vw] md:gap-y-[2vw] mb-[6vw] md:mb-[3vw]">
        {bottomLinks.map((link, index) => (
          <Link 
            key={index}
            href={link.href}
            className="text-[3.5vw] md:text-[0.95vw] text-gray-800 hover:text-[#99B81B] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

  
      <div className="w-full h-[0.1vw] bg-gray-300 mb-[6vw] md:mb-[3vw]"></div>

      {/* Contact & Social Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[8vw] md:gap-[4vw]">
        
        {/* Contact Info */}
        <div className="space-y-[2vw] md:space-y-[1vw]">
          <h3 className="text-[4vw] md:text-[1.2vw] font-bold text-[#99B81B]">
            Signature Slam Academy
          </h3>
          
          <p className="text-[3.5vw] md:text-[0.9vw] text-gray-700">
            30 Wills Hill Road, Lovedale, NSW
          </p>

          <div className="flex items-center gap-[2vw] md:gap-[0.8vw]">
            <Image 
              src="/icons/call.svg" 
              alt="Phone" 
              width={16} 
              height={16}
              className="w-[3vw] h-[3vw] md:w-[1.2vw] md:h-[1.2vw]"
            />
            <a 
              href="tel:+915642589752"
              className="text-[3.5vw] md:text-[0.9vw] text-gray-700 hover:text-[#99B81B] transition-colors"
            >
              + 91 5642589752
            </a>
          </div>

          <div className="flex items-center gap-[2vw] md:gap-[0.8vw]">
            <Image 
              src="/icons/message.svg" 
              alt="Email" 
              width={16} 
              height={16}
              className="w-[3vw] h-[3vw] md:w-[1.2vw] md:h-[1.2vw]"
            />
            <a 
              href="mailto:info@ssagroup.com"
              className="text-[3.5vw] md:text-[0.9vw] text-gray-700 hover:text-[#99B81B] transition-colors"
            >
              info@ssagroup.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-[4vw] md:text-[1.2vw] font-bold text-[#99B81B] mb-[3vw] md:mb-[1.5vw]">
            Connect with us
          </h3>

          <div className="flex gap-[3vw] md:gap-[1.2vw]">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="w-[8vw] h-[8vw] md:w-[2.5vw] md:h-[2.5vw]  rounded flex items-center justify-center transition-all group"
                aria-label={social.name}
              >
                <Image 
                  src={social.icon} 
                  alt={social.name} 
                  width={16} 
                  height={16}
                  className="w-[4vw] h-[4vw] md:w-[1.2vw] md:h-[1.2vw] "
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>

  </div>
</div>

      <div 
        className="py-[3vw] md:py-[0.8vw] px-[6vw] md:px-[5vw]"
        style={{
          background: 'linear-gradient(90.14deg, #003A5D 22.84%, #99B81B 89.63%)'
        }}
      >
        <div className="max-w-[90vw] md:max-w-[85vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-[2vw] md:gap-0">
          <Link 
            href="#"
            className="text-[3vw] md:text-[0.85vw] text-white hover:underline"
          >
            Terms And Condition
          </Link>

          <p className="text-[3vw] md:text-[0.85vw] text-white text-center">
            © 2025 All Rights Reserved www.signatureslamacademy.com
          </p>

          <Link 
            href="#"
            className="text-[3vw] md:text-[0.85vw] text-white hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}