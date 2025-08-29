import { Button, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaWhatsapp } from "react-icons/fa";
import logo from '../utils/images/logo.png'
import Image from 'next/image';
const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Services', href: '#', current: false },
  { name: 'Specialists', href: '#', current: false },
  { name: 'Gallery', href: '#', current: false },
  { name: 'Testimonials', href: '#', current: false },
{ name: 'Contact', href: '#', current: false }
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="relative h-28  justify-center items-center pt-6 bg-cyan-600">
      <div className="mx-auto max-w-full justify-center px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 pt-1 h-20 justify-around">
            <div className="flex shrink-0 items-center">
              <Image
                alt="Your Company"
                src={logo}
                className="h-20 w-20"
              />
            </div>
            <div className="hidden pt-2 sm:ml-6 sm:block">
              <div className="flex pt-2 space-x-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className='text-white text-lg font-sans hover:text-gray-400 text-bold'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className='pt-2'>
            <Button className='flex border-1  h-12 justify-center items-center p-2 gray-200 rounded-xl hover:pointer'>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-green-400 w-8 h-8 mx-2" />
      </a>
      <p className='text-white mx-1 text-lg'>Contact Us</p>

    </Button>
    </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className='text-white'
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
