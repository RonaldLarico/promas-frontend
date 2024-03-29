"use client";
import React, { useState } from 'react';
import SearchCode from '@/components/certificate/SearchCode';
import SearchDNI from '@/components/certificate/SearchDNI';
import SearchName from '@/components/certificate/SearchName';
import { BsQrCodeScan } from "react-icons/bs";
import { BsPersonVcard, BsPersonSquare } from "react-icons/bs";
import Image from 'next/image';
//import Whatsapp from '@/components/whatsapp/Index'
import './Styles.css'

const Certificate: React.FC = () => {

  const [isActive, setIsActive] = useState(false);
  const [searchType, setSearchType] = useState<string | null>(null);

  const handleButton = (type: string) => {
    setSearchType(type);
    setIsActive(true);
  };

  const handleSearch = (data: string) => {
    console.log(data);
  };

  return (
  <section id='/certificate'  className='relative pt-48 pb-20 p-2 items-center justify-center'>
    <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-80 bg-gray-800" style={{ backgroundImage: "url('/fondo_certificate.jpg')" }}></div>
    <div className="max-w-screen-lg mx-auto border border-transparent  bg-gray-800/30 rounded-3xl shadow-2xl shadow-gray-100 text-center lg:mb-20 p-4 relative blur-background">
      <div className="mb-4 lg:mt-0 justify-center text-5xl font-extrabold tracking-tight text-gray-500">
      <div className='flex justify-center mb-4 lg:gap-10 mt-12'>
            {/* <img src={'/certificate/logo_unp.png'} className="lg:w-44 lg:h-44 w-32 h-32 object-contain"/> */}
            <Image src={'/logo_promas_3.png'} className="lg:w-44 lg:h-44 w-32 h-32 object-contain" width={800} height={700} alt='logo_promas'/>
            {/* <img src={'/certificate/logo_cip_tacna.png'}className="lg:w-44 lg:h-44 w-32 h-32 object-contain "/> */}
          </div>
      </div>
        <div className="">
          <h2 className="mb-4 mt-20 text-4xl font-extrabold text-white uppercase">
            Certificados
          </h2>
          <p className="font-semibold text-white sm:text-xl lg:px-36">
            En este módulo podrá realizar la búsqueda de certificados de los diferentes eventos ofrecidos por PROMAS.
          </p>
          <p className="mb-6 mt-6 lg:mt-10 text-xl tracking-tight font-semibold text-white">
            Buscar por:
          </p>
          <div className='lg:flex flex-wrap justify-center items-center text-center lg:ml-40 lg:mr-40'>
            <button
            onClick={() => handleButton('documentNumber')}
            className={`lg:mb-20 mb-4 font-bold border rounded-lg text-md px-7 py-3 text-white text-center inline-block hover:text-violet-700 hover:bg-gray-200 hover:scale-110 duration-300
              ${searchType === 'documentNumber' && ''}`}>
              <BsPersonVcard className='text-xl inline-block align-text-top mr-2 hover:text-violet-700' />Buscar por DNI
            </button>
            <button
            onClick={() => handleButton('name')}
            className={`lg:mb-20 mb-4 ml-6 mr-6 border font-bold rounded-lg text-md px-3 py-3 text-white text-center hover:text-violet-700 hover:bg-gray-200 hover:scale-110 duration-300
              ${searchType === 'name' && ''}`}>
              <BsPersonSquare className='text-lg inline-block align-text-top mr-2' />Buscar por nombre
            </button>
            <button
            onClick={() => handleButton('code')}
            className={`lg:mb-20 mb-5 font-bold border rounded-lg text-white text-md px-4 py-3 text-center inline-block hover:text-violet-700 hover:bg-gray-200 hover:scale-110 duration-300
            ${searchType === 'code' && ''}`}>
              <BsQrCodeScan className='text-lg inline-block align-text-top mr-2' /> Buscar por código
            </button>
          </div>

          {isActive && (
        <div>
          {searchType === 'documentNumber' && (<SearchDNI onSearchDNI={handleSearch} />)}
          {searchType === 'name' && (<SearchName onSearchName={handleSearch} />)}
          {searchType === 'code' && (<SearchCode onSearchCode={handleSearch} />)}
        </div>
      )}
        </div>
    {/* <Whatsapp /> */}
    </div>
  </section>
  )
}

export default Certificate;