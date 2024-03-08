"use client"
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'

const Counter = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    if (inView) {
      setStart(end); // Inicia desde el valor actual
      setEnd(end + 1); // Aumenta en uno para reiniciar el contador
    }
  }, [inView, end])

  return (
    <section className='relative'>
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-80 bg-gray-800" style={{ backgroundImage: "url('/fondo_certificate.jpg')" }}></div>
      <div className='relative z-10 p-10 max-w-screen-xl mx-auto'>
        <h1 className='text-5xl font-extrabold text-white text-center mt-10 '>
          ¿Por que Promas?
        </h1>
        <h3 className='text-white mt-10 mb-10 font-semibold lg:text-xl text-sm text-center lg:px-60'>
          Porque impulsamos el desarrollo creativo de todo profesional a través de nuestros cursos y
          diplomados, apostando por una formación con pensamiento estratégico e innovador
        </h3>
        <div className='grid lg:grid-cols-4 bord text-center gap-6 mb-20'>
          <div ref={ref} className={`flex justify-center items-center flex-col border-2 border-violet-600 rounded-xl p-4 mt-5 hover:scale-110 duration-300`}>
            <Image
              src="/estudiantes.png"
              alt="alumnos"
              width={150}
              height={150}/>
              <div className='text-white mt-5 mb-5'>
                {inView &&
                  <div className='flex flex-col items-center'>
                    <div className='flex items-center text-5xl font-extrabold'>
                      <span className="text-5xl ml-1">+</span>
                        <CountUp start={0} end={10000} duration={5} separator="."/>
                    </div>
                      <span className=' mt-2 font-semibold'>alumnos confiaron en nosotros</span>
                  </div>}
              </div>
          </div>
          <div ref={ref} className={`flex justify-center items-center flex-col border-2 border-violet-600 rounded-xl p-4 mt-5 hover:scale-110 duration-300`}>
            <Image
              src="/certificados.png"
              alt="alumnos"
              width={150}
              height={150}/>
              <div className='text-white mt-5 mb-5'>
                {inView &&
                  <div className='flex flex-col items-center'>
                    <div className='flex items-center text-5xl font-extrabold'>
                      <span className="text-5xl ml-1">+</span>
                        <CountUp start={0} end={70} duration={5} separator="." />
                    </div>
                      <span className='mt-2 font-semibold'>diplomados disponibles</span>
                  </div>}
              </div>
          </div>
          <div ref={ref} className={`flex justify-center items-center flex-col rounded-xl border-2 border-violet-600 p-4 mt-5 hover:scale-110 duration-300`}>
            <Image
              src="/metologia.png"
              alt="alumnos"
              width={150}
              height={150}/>
              <div className='text-white mt-5 mb-5'>
              {inView &&
                <div className='flex flex-col items-center'>
                  <div className="flex items-center text-5xl font-extrabold">
                    <CountUp start={0} end={100} duration={5} separator="." />
                      <span className="ml-1">%</span>
                  </div>
                    <span className='mt-2 font-semibold'>Contenidos de alta calidad</span>
                </div>}
              </div>
          </div>
          <div ref={ref} className={`flex justify-center items-center flex-col border-2 border-violet-600 rounded-xl p-4 mt-5 hover:scale-110 duration-300`}>
            <Image
              src="/enseñanza.png"
              alt="alumnos"
              width={150}
              height={150}/>
              <div className='text-white mt-5 mb-5'>
              {inView &&
                <div className='flex flex-col items-center'>
                  <div className='flex items-center text-5xl font-extrabold'>
                    <span className="text-5xl ml-1">+</span>
                      <CountUp start={0} end={700} duration={5} separator="." />
                  </div>
                    <span className='mt-2 font-semibold'>cursos a su disposición</span>
                </div>}
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter