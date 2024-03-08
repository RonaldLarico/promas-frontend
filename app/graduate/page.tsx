import React from 'react'
import GraduateAmbientaly from '@/components/graduate/IngAmbientaly/GraduateAmbientaly';
import GraduateIrrigation from '@/components/graduate/IngAgronomy/GraduateIrrigation';
import GraduateSolidWaste from '@/components/graduate/IngAmbientaly/GraduateSolidWaste';
import GraduateTechnicalIrrigation from '@/components/graduate/IngAgronomy/GraduateTechnicalIrrigation';
import GraduateTechnicalAssistant from '@/components/graduate/IngCivil/GraduateTechnicalAssistant';
import GraduateIngVial from '@/components/graduate/IngCivil/GraduateIngVial';
import GraduateIngBridge from '@/components/graduate/IngCivil/GraduateIngBridge';
import GraduateWorksSupervision from '@/components/graduate/IngCivil/GraduateWorksSupervision';
import GraduateFoodQuality from '@/components/graduate/IngAlimentary/GraduateFoodQuality';
import GraduateSsoma from '@/components/graduate/ssoma/GraduateSsoma';

const Graduate = () => {
  return (
    <section id="/graduate">
      <div className="relative pt-12 lg:pt-40 pb-28 lg:pb-40">
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{ backgroundImage: 'url("/fondo_certificate.jpg")' }}>
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-60 bg-gray-800"
      ></span>
    </div>
    <div className="relative mx-auto max-w-screen-xl p-2 text-white">
      <h1 className="font-extrabold text-4xl lg:text-6xl">
        Nuestros diplomados
      </h1>
      <p>
        Hola promas
      </p>
      <button className='border px-4 py-1 mt-4 rounded-xl'>
        Contacto
      </button>
    </div>
  </div>
      <div className=" p-5 flex flex-col">
        <div className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-6 lg:mt-6 font-extrabold border-b-4 p-2">
            DIPLOMADOS EN INGENIERÍA AMBIENTAL
        </div>
          <div className='mb-20 lg:mb-10'>
            <GraduateAmbientaly />
          </div>
          <div className='mb-20 lg:mb-10'>
            <GraduateSolidWaste />
          </div>
        <div className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-6 lg:mt-6 font-extrabold border-b-4 p-2">
            DIPLOMADOS EN INGENIERÍA AGRÓNOMA
        </div>
          <div className='mb-20 lg:mb-10'>
            <GraduateIrrigation />
          </div>
          <div className='mb-20 lg:mb-10'>
            <GraduateTechnicalIrrigation />
          </div>
        <div className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-6 lg:mt-6 font-extrabold border-b-4 p-2">
          DIPLOMADOS EN INGENIERÍA CIVIL
        </div>
          <div className='mb-20 lg:mb-10'>
            <GraduateTechnicalAssistant />
          </div>
          <div className='mb-20 lg:mb-10'>
            <GraduateIngVial />
          </div>
          <div className='mb-20 lg:mb-10'>
            <GraduateIngBridge />
          </div>
          <div className='mb-20 lg:mb-10'>
            <GraduateWorksSupervision />
          </div>
        <div className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-6 lg:mt-6 font-extrabold border-b-4 p-2">
          DIPLOMADOS EN INGENIERÍA ALIMENTARIA
        </div>
          <div className='mb-20 lg:mb-10'>
            <GraduateFoodQuality />
          </div>
          <div className='mb-20 lg:mb-10 border-t-4 p-2'>
            <GraduateSsoma />
          </div>
      </div>
    </section>
  )
}

export default Graduate;