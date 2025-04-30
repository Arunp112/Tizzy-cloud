import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  { icon: <FaFacebookF />, tooltip: "Facebook", link: "#" },
  { icon: <FaTwitter />, tooltip: "Twitter", link: "#" },
  { icon: <FaInstagram />, tooltip: "Instagram", link: "#" },
  { icon: <FaLinkedinIn />, tooltip: "LinkedIn", link: "#" },
  { icon: <FaGoogle />, tooltip: "Google", link: "#" },
  { icon: <FaWhatsapp />, tooltip: "WhatsApp", link: "#" },
];

export default function SocialIcons() {
  return (
    <div className="flex justify-center gap-6 py-10 bg-[#f8fbff] flex-wrap justify-center md:justify-start">
      {socials.map((item, idx) => (
        <div key={idx} className="relative group mb-4 md:mb-0">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-500 hover:scale-110 transition-transform duration-300"
          >
            <span className="text-xl">{item.icon}</span>
          </a>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-10">
            {item.tooltip}
          </div>
        </div>
      ))}
    </div>
  );
}
