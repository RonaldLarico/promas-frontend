import Image from 'next/image'
import React from 'react'
import { VscOutput } from "react-icons/vsc";
import { IoVideocamOutline } from "react-icons/io5";
import { BiRadioCircle } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdVideoCameraFront } from "react-icons/md";
import { HiVideoCamera } from "react-icons/hi2";
import { HiStatusOnline } from "react-icons/hi";
import "./Style.css"
import Link from 'next/link';

const Course = () => {
  return (
    <section className='bg-[#030014]'>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 max-w-screen-xl mx-auto justify-center items-center gap-10 text-white">

    <Link href="https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Fertirrigación" target='_blank'>
      <div className="lg:w-[400px] w-[300px] h-[420px] bg-transparent cursor-pointer group perspective mt-20">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <Image
              alt="promas"
              src="/course/fertiirrigacion.png"
              width={800}
              height={600}
              className="w-full h-full" />
          </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="flex flex-col h-full px-">
              <div className='grid grid-cols-2 text-gray-100 font-semibold text-left'>
              <p className='flex items-center bg-pink-600 p-2'>
                <IoVideocamOutline className='flex-shrink-0' />
                <span className='ml-2 text-xs'>Capacitaciones</span>
              </p>
              <p className='flex items-center justify-end bg-pink-600 p-2'>
                <BiRadioCircle className='' />
                <span className='ml-2 text-xs'>En vivo</span>
              </p>
              </div>
            <h1 className="text-3xl text-center font-extrabold md:mb-2 mb-6 text-pink-500 mt-4">Fertirrigación</h1>
            <div className='hidden md:block text-left text-sm font-semibold text-gray-500 px-2 mb-4'>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Situación mundial del recurso hídrico</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Calidad de Agua de Riego</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Conceptos, Principios, Ventajas y desventajas</span>
              </p>
              <p className='flex items-center border-b p-1 mb-2'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Fertilización convencional versus fertirriego.</span>
              </p>
            </div>
            <div className='grid md:grid-cols-2 text-left text-gray-100 font-semibold px-2 gap-2'>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                <FaChalkboardTeacher className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Docentes especializados</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                <MdVideoCameraFront className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases grabadas</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                  <HiVideoCamera className='flex-shrink-0 border rounded-full p-1 text-xl' />
                <span className='ml-2 text-xs'>Plataforma Zoom</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                  <HiStatusOnline className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases onLine 100% en vivo</span>
              </p>
            </div>
            <div className='flex justify-center'>
            <button className="uppercase text-xs px-6 py-2 mt-4 border border-violet-700 hover:bg-violet-700 hover:text-gray-100 font-semibold text-gray-500 rounded-full duration-300 hover:scale-110">
                Más información
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>


  <Link href="https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Monitoreo%20de%20la%20calidad%20de%20agua" target='_blank'>
      <div className="lg:w-[400px] w-[300px] h-[420px] bg-transparent cursor-pointer group perspective md:mt-20">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <Image
              alt="promas"
              src="/course/monitoreo_calidad_agua.png"
              width={800}
              height={600}
              className="w-full h-full" />
          </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="flex flex-col h-full px-">
              <div className='grid grid-cols-2 text-gray-100 font-semibold text-left'>
              <p className='flex items-center bg-pink-600 p-2'>
                <IoVideocamOutline className='flex-shrink-0' />
                <span className='ml-2 text-xs'>Capacitaciones</span>
              </p>
              <p className='flex items-center justify-end bg-pink-600 p-2'>
                <BiRadioCircle className='' />
                <span className='ml-2 text-xs'>En vivo</span>
              </p>
              </div>
            <h1 className="text-2xl text-center font-extrabold md:mb-2 text-pink-500 ">Monitoreo de la calidad de agua</h1>
            <div className='hidden md:block text-left text-sm font-semibold text-gray-500 px-2'>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Monitoreo de la calidad del agua</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Revisión de ECAs, LMP y VMA para la calidad del agua</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Monitoreo de parámetros de campo y técnicas de muestreo</span>
              </p>
              <p className='flex items-center border-b p-1 mb-2'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Manejo de equipos para monitoreo de la calidad del agua</span>
              </p>
            </div>
            <div className='grid md:grid-cols-2 text-left text-gray-100 font-semibold px-2 gap-2'>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                <FaChalkboardTeacher className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Docentes especializados</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                <MdVideoCameraFront className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases grabadas</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                  <HiVideoCamera className='flex-shrink-0 border rounded-full p-1 text-xl' />
                <span className='ml-2 text-xs'>Plataforma Zoom</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                  <HiStatusOnline className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases onLine 100% en vivo</span>
              </p>
            </div>
            <div className='flex justify-center'>
            <button className="uppercase text-xs px-6 py-2 mt- border border-violet-700 hover:bg-violet-700 hover:text-gray-100 font-semibold text-gray-500 rounded-full duration-300 hover:scale-110">
                Más información
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>


  <Link href="https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Costos%20y%20Presupuestos%20con%20S10" target='_blank'>
      <div className="lg:w-[400px] w-[300px] h-[420px] bg-transparent cursor-pointer group perspective lg:mt-20">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <Image
              alt="promas"
              src="/course/costos_presupuestos.png"
              width={800}
              height={600}
              className="w-full h-full" />
          </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="flex flex-col h-full px-">
              <div className='grid grid-cols-2 text-gray-100 font-semibold text-left'>
              <p className='flex items-center bg-pink-600 p-2'>
                <IoVideocamOutline className='flex-shrink-0' />
                <span className='ml-2 text-xs'>Capacitaciones</span>
              </p>
              <p className='flex items-center justify-end bg-pink-600 p-2'>
                <BiRadioCircle className='' />
                <span className='ml-2 text-xs'>En vivo</span>
              </p>
              </div>
            <h1 className="text-2xl text-center font-extrabold md:mb-2 mb-6 text-pink-500 mt-4">Costos y Presupuestos con S10</h1>
            <div className='hidden md:block text-left text-sm font-semibold text-gray-500 px-2 mb-4'>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Partes de un Presupuesto, creación de presupuesto</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Análisis de precios unitarios</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Procesamiento del Presupuesto</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Gastos generales</span>
              </p>
              <p className='flex items-center border-b p-1 mb-2'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Nuevos cálculos, configuraciones y reportes</span>
              </p>
            </div>
            <div className='grid md:grid-cols-2 text-left text-gray-100 font-semibold px-2 gap-2'>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-2'>
                <FaChalkboardTeacher className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Docentes especializados</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-2'>
                <MdVideoCameraFront className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases grabadas</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-2'>
                  <HiVideoCamera className='flex-shrink-0 border rounded-full p-1 text-xl' />
                <span className='ml-2 text-xs'>Plataforma Zoom</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-2'>
                  <HiStatusOnline className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases onLine 100% en vivo</span>
              </p>
            </div>
            <div className='flex justify-center'>
            <button className="uppercase text-xs px-6 py-2 mt-2 border border-violet-700 hover:bg-violet-700 hover:text-gray-100 font-semibold text-gray-500 rounded-full duration-300 hover:scale-110">
                Más información
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>


  <Link href="https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Formulación%20de%20proyectos%20de%20inversión%20pública%20de%20residuos%20sólidos" target='_blank'>
      <div className="lg:w-[400px] w-[300px] h-[420px] bg-transparent cursor-pointer group perspective lg:mb-20">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <Image
              alt="promas"
              src="/course/residuos_solidos.png"
              width={800}
              height={600}
              className="w-full h-full" />
          </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="flex flex-col h-full">
              <div className='grid grid-cols-2 text-gray-100 font-semibold text-left'>
              <p className='flex items-center bg-pink-600 p-2'>
                <IoVideocamOutline className='flex-shrink-0' />
                <span className='ml-2 text-xs'>Capacitaciones</span>
              </p>
              <p className='flex items-center justify-end bg-pink-600 p-2'>
                <BiRadioCircle className='' />
                <span className='ml-2 text-xs'>En vivo</span>
              </p>
              </div>
            <h1 className="text-xl text-center font-extrabold md:mb-1 mb-6 text-pink-500">Formulación de proyectos de inversión pública de residuos sólidos</h1>
            <div className='hidden md:block text-left text-sm font-semibold text-gray-500 px-2 lg:mb-0'>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Formulación de proyectos en gestión integral de residuos sólidos</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Definiciones y conceptos del invierte.pe</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Programación Multianual de Inversiones</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Fundamentos del Sistema Nacional de Programación Multianual y Gestión de Inversiones</span>
              </p>
              <p className='flex items-center border-b p-1 mb-2'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Taller de formulación de proyectos</span>
              </p>
            </div>
            <div className='grid md:grid-cols-2 text-left text-gray-100 font-semibold px-2 gap-2'>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl lg:mb-0 mb-3'>
                <FaChalkboardTeacher className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Docentes especializados</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl lg:mb-0  mb-3'>
                <MdVideoCameraFront className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases grabadas</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl lg:mb-0  mb-3'>
                  <HiVideoCamera className='flex-shrink-0 border rounded-full p-1 text-xl' />
                <span className='ml-2 text-xs'>Plataforma Zoom</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl lg:mb-0  mb-3'>
                  <HiStatusOnline className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases onLine 100% en vivo</span>
              </p>
            </div>
            <div className='flex justify-center'>
            <button className="uppercase text-xs px-6 py-2 mt-2 border border-violet-700 hover:bg-violet-700 hover:text-gray-100 font-semibold text-gray-500 rounded-full duration-300 hover:scale-110">
                Más información
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>


    <Link href="https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Esquema%20FSSC%2022000" target='_blank'>
      <div className="lg:w-[400px] w-[300px] h-[420px] bg-transparent cursor-pointer group perspective md:mb-20">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <Image
              alt="promas"
              src="/course/esquema_FSSC.png"
              width={800}
              height={600}
              className="w-full h-full" />
          </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="flex flex-col h-full px-">
              <div className='grid grid-cols-2 text-gray-100 font-semibold text-left'>
              <p className='flex items-center bg-pink-600 p-2'>
                <IoVideocamOutline className='flex-shrink-0' />
                <span className='ml-2 text-xs'>Capacitaciones</span>
              </p>
              <p className='flex items-center justify-end bg-pink-600 p-2'>
                <BiRadioCircle className='' />
                <span className='ml-2 text-xs'>En vivo</span>
              </p>
              </div>
            <h1 className="text-2xl text-center font-extrabold md:mb-2 mb-6 text-pink-500 mt-4">Esquema FSSC 22000</h1>
            <div className='hidden md:block text-left text-sm font-semibold text-gray-500 px-2 mb-4'>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Diseño y propósitos del esquema</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Implementación de la FSSC 22000</span>
              </p>
              <p className='flex items-center border-b p-1 mb-4'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Planificacion y realización de productos inocuos</span>
              </p>
            </div>
            <div className='grid md:grid-cols-2 text-left text-gray-100 font-semibold px-2 gap-2'>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                <FaChalkboardTeacher className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Docentes especializados</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                <MdVideoCameraFront className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases grabadas</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                  <HiVideoCamera className='flex-shrink-0 border rounded-full p-1 text-xl' />
                <span className='ml-2 text-xs'>Plataforma Zoom</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                  <HiStatusOnline className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases onLine 100% en vivo</span>
              </p>
            </div>
            <div className='flex justify-center'>
            <button className="uppercase text-xs px-6 py-2 mt-4 border border-violet-700 hover:bg-violet-700 hover:text-gray-100 font-semibold text-gray-500 rounded-full duration-300 hover:scale-110">
                Más información
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>


    <Link href="https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Identificación%20y%20evaluación%20de%20Impacto%20Ambiental" target='_blank'>
      <div className="lg:w-[400px] w-[300px] h-[420px] bg-transparent cursor-pointer group perspective mb-20">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <Image
              alt="promas"
              src="/course/impacto_ambiental.png"
              width={800}
              height={600}
              className="w-full h-full" />
          </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="flex flex-col h-full px-">
              <div className='grid grid-cols-2 text-gray-100 font-semibold text-left'>
              <p className='flex items-center bg-pink-600 p-2'>
                <IoVideocamOutline className='flex-shrink-0' />
                <span className='ml-2 text-xs'>Capacitaciones</span>
              </p>
              <p className='flex items-center justify-end bg-pink-600 p-2'>
                <BiRadioCircle className='' />
                <span className='ml-2 text-xs'>En vivo</span>
              </p>
              </div>
            <h1 className="text-xl text-center font-extrabold md:mb-2 mb-6 text-pink-500">Identificación y evaluación de Impacto Ambiental</h1>
            <div className='hidden md:block text-left text-sm font-semibold text-gray-500 px-2 mb-4'>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Objetivos de la evaluación de impactos y principales conceptos</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Proceso de identificación de impactos</span>
              </p>
              <p className='flex items-center border-b p-1'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Metodologías de evaluación</span>
              </p>
              <p className='flex items-center border-b p-1 mb-2'>
                <VscOutput className='text-pink-600 flex-shrink-0'/>
                <span className='ml-2'>Áreas de influencia, impactos directos e indirectos</span>
              </p>
            </div>
            <div className='grid md:grid-cols-2 text-left text-gray-100 font-semibold px-2 gap-2'>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                <FaChalkboardTeacher className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Docentes especializados</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                <MdVideoCameraFront className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases grabadas</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                  <HiVideoCamera className='flex-shrink-0 border rounded-full p-1 text-xl' />
                <span className='ml-2 text-xs'>Plataforma Zoom</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                  <HiStatusOnline className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases onLine 100% en vivo</span>
              </p>
            </div>
            <div className='flex justify-center'>
            <button className="uppercase text-xs px-6 py-2 border border-violet-700 hover:bg-violet-700 hover:text-gray-100 font-semibold text-gray-500 rounded-full duration-300 hover:scale-110">
                Más información
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </Link>
  </div>
  </section>
  )
}
export default Course;