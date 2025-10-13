import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../utils/images/logo.png";
import Link from "next/link";

export const Footer = () => {
  const navigation = [
    { name: "About", href: "#About" },
    { name: "TeleRehab", href: "#TeleRehab" },
     { name: "Services", href: "#Services" },
    { name: "Specialists", href: "#Specialists" },
    { name: "Gallery", href: "#Gallery" },
    { name: "Reviews", href: "#Reviews" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <footer id="Contact" className="bg-eagle-green-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="Physio Kolkata Logo"
              width={60}
              height={60}
            />
            <div>
              <h4 className="text-lg font-semibold">Physio Kolkata</h4>
              <p className="text-sm text-gray-400 mt-1">
                Physio Kolkata offers expert physiotherapy services to help you
                heal, recover, and thrive!
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl">
            <a href="https://www.facebook.com/share/17KLsCUbDJ/" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/physiokolkata2024" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="http://www.linkedin.com/in/physio-kolkata-aa67b6388" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href=" https://chat.whatsapp.com/L3wKjwu7pEr0toka1buPd1?mode=ems_share_t" className="hover:text-white">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacts</h4>
          <div className="space-y-3 text-sm text-gray-400">
            <p>
              Suraksha, 1st Floor, Sunny Towers, 43 A C Avenue, Ballygunge,
              Kolkata - 700019
            </p>
            <p>
              <a
                href="mailto:physiokolkata13@gmail.com"
                className="hover:text-white"
              >
                physiokolkata13@gmail.com
              </a>
            </p>
            <p>(+91) 7008472789</p>
            <p>(+91) 9681044555</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Physio Kolkata. All rights reserved.
      </div>
    </footer>
  );
};
