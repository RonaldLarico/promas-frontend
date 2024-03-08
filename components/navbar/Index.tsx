"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaUserCog } from "react-icons/fa";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='bg-black'>
      <nav className="w-full lg:bg-purple-700/50 md:bg-purple-700/50 bg-purple-700/95 top-0 left-0 right-0 fixed z-50">
      <div className='max-w-screen-xl flex flex-wrap items-center md:justify-end justify-center mx-auto p-0.5'>
        <div className='text-right font-semibold w-full border-b border-violet-500 py-1'>
          <Link href='/certificate' className='hover:underline mr-4 text-gray-300 hover:text-white'>Verificar certificado</Link>
          <Link href='/' className='hover:underline mr-3 text-gray-300 hover:text-white'>Aula Virtual</Link>
        </div>
      </div>
        <div className="justify-between px-2 lg:px-0 mx-auto lg:max-w-7xl md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py- lg:py- md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/logo_promas.png"
                  width={150}
                  height={80}
                  alt="promas-logo"
                  className=''
                  priority={false}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={40} height={40} alt="logo" className="text-white" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-12 lg:text-sm md:text-sm items-center justify-center md:flex ">
                <li className="font-bold text-gray-300 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className="font-bold text-gray-300 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/certificate" onClick={() => setNavbar(!navbar)}>
                    Certificado
                  </Link>
                </li>
                <li className="font-bold text-gray-300 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/graduate" onClick={() => setNavbar(!navbar)}>
                    Diplomados
                  </Link>
                </li>
                <li className="font-bold text-gray-300 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>
                <li className="font-bold text-gray-300 hover:text-white lg:mb-0 md:mb-0 mb-4 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    ¡Inscribete!
                  </Link>
                </li>
                <li className="pl-40 flex items-center ">
                  <Link href="/login" className="bg-pink-600 py-1 px-4 rounded-xl hover:bg-gray-100">
                    <FaUserCog className='text-white text-xl hover:text-pink-600'/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;