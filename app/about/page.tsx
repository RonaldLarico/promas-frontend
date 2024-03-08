import React from 'react'

const About = () => {
  return (
    <section>
  <div className="relative pt-12 lg:pt-72 pb-28 lg:pb-80">
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{ backgroundImage: 'url("/fondo_certificate.jpg")' }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-60 bg-gray-800"
      ></span>
    </div>
    <div className="relative mx-auto max-w-screen-xl p-2 text-white">
      <h1 className="font-extrabold text-4xl lg:text-6xl">
        Acerca de nosotros
      </h1>
      <p>
        Hola promas
      </p>
      <button className='border px-4 py-1 mt-4 rounded-xl'>
        Contacto
      </button>
    </div>
  </div>
</section>
  )
}
export default About