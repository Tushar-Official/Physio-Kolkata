import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../utils/images/logo.png";

export const Footer = () => {
  const navigation = [
    { name: "About", href: "#" },
    { name: "Service", href: "#" },
    { name: "Specialists", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-eagle-green-950 text-gray-300">
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
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white">
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
                <a
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </a>
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
