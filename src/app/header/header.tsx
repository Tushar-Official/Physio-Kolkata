import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../utils/images/logo.png";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Specialists", href: "#", current: false },
  { name: "Gallery", href: "#", current: false },
  { name: "Testimonials", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-eagle-green-950 pt-4 sm:pt-6"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          {/* Logo + Nav */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <Image alt="Your Company" src={logo} className="h-14 w-14" />
            </div>

            {/* Desktop nav */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact button */}
            <div className="hidden sm:flex items-center">
              <Button className="flex h-12 items-center p-2 border border-gray-200 rounded-xl hover:bg-white/10 transition">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaWhatsapp className="text-green-400 w-6 h-6 mr-2" />
                  <p className="text-white text-lg">Contact Us</p>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <DisclosurePanel className="sm:hidden bg-eagle-green-950">
        <div className="space-y-2 px-4 pb-4 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/10"
            >
              {item.name}
            </DisclosureButton>
          ))}

          {/* Mobile Contact button */}
          <Button className="flex w-full justify-center items-center gap-2 border border-gray-200 rounded-lg p-2 mt-3 hover:bg-white/10">
            <FaWhatsapp className="text-green-400 w-6 h-6" />
            <p className="text-white text-lg">Contact Us</p>
          </Button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
