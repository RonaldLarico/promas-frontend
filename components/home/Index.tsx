"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/components/utils/motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Link from "next/link";

const images = [
  { src: "/IMAGEN.png", variants: slideInFromRight(1) },
  { src: "/IMAGEN_2.png", variants: slideInFromRight(1) },
  { src: "/IMAGEN.png", variants: slideInFromRight(1) }
];

const texts = [
  "Tu puerta abierta al conocimiento en vivo, desde donde estes...",
  "Con nuestros Cursos y Diplomados de especialización...",
  "Unete a nosotros para alcanzar nuevas metas..m"
];

const tittles = [
  { tittle1: "DIPLOMADOS, CURSOS PROMÁS", color1: "from-purple-700 to-pink-500" },
  { tittle2: "¡CONSTRUYENDO", color2: "text-customPurple", tittle3: "UN MUNDO MEJOR!", color3: "text-customPink"},
  { tittle4: "HOLA PROMAS", color4: "from-green-700 to-blue-500" }
];

const icons = [
  {img1: <FaFacebookF />, img2: <FaInstagram />, img3: <FaTiktok />, img4: <FaWhatsapp />, img5: <FaYoutube />},
  {img1: <FaFacebookF />, img2: <FaInstagram />, img3: <FaTiktok />, img4: <FaWhatsapp />, img5: <FaYoutube />},
  {img1: <FaFacebookF />, img2: <FaInstagram />, img3: <FaTiktok />, img4: <FaWhatsapp />, img5: <FaYoutube />},

]

const buttons = [
  "Contacto",
  "Informes",
  "¡Inscribete!"
]

const Home = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === tittles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? tittles.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#030014] relative">
      {/* <div className="hidden lg:block w-[300px] h-[300px] bg-pink-500 rounded-[100%] absolute z-1 top-[75%] left-[30%] translate-x-[-60%] translate-y-[-60%] blur-[150px]"></div>
      <div className=" w-[300px] h-[400px] bg-violet-600 rounded-[100%] absolute z-1 top-[30%] left-[70%] translate-x-[-60%] translate-y-[-60%] blur-[150px]"></div> */}
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-col-reverse md:flex-row max-w-screen-xl mx-auto items-center justify-between w-full">

      <div className="mb-10 lg:mb-0 p-2 md:mt-20">
        {icons.map((icon, i) => (
          i === index && (
        <motion.div
          key={i}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideInFromTop}
          className="py-1 lg:text-left text-center px-1 opacity-[0.9]"
        >
          <h1 className="text-gray-100 lg:text-2xl text-2xl text-center inline-flex lg:gap-6 gap-3">
            <Link key={`link-${i}`} href='' className="border border-[#7042f88b] p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-[#7042f88b]">
              {icon.img1}
            </Link>
            <Link key={`link-${i+1}`} href='' className="border border-[#7042f88b] p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-[#7042f88b]">
              {icon.img2}
            </Link>
            <Link key={`link-${i+2}`} href='' className="border border-[#7042f88b] p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-[#7042f88b]">
              {icon.img3}
            </Link>
            <Link key={`link-${i+3}`} href='' className="border border-[#7042f88b] p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-[#7042f88b]">
              {icon.img4}
            </Link>
            <Link key={`link-${i+4}`} href='' className="border border-[#7042f88b] p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-[#7042f88b]">
              {icon.img5}
            </Link>
          </h1>
        </motion.div>
        )
        ))}

        {tittles.map((tittle, i) => (
          i === index && (
          <React.Fragment key={`tittles-${i}`}>
            <motion.div
              key={`${i}-1`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideInFromLeft(1)}
              className="lg:leading-[3.8em] leading-[2.3em]">
              <h1>
                <p className={`mt-6 lg:text-[64px] text-[36px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${tittle.color1}`}>
                  {tittle.tittle1}
                </p>
              </h1>
            </motion.div>
            <motion.div
              key={`${i}-2`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideInFromLeft(1)}
              className="lg:leading-[3.8em] leading-[2.3em]">
              <h1>
                <p className={`mt-6 lg:text-[60px] text-[32px] font-extrabold bg-clip-text text-customPurple ${tittle.color2}`}>
                  {tittle.tittle2}
                </p>
              </h1>
            </motion.div>
            <motion.div
              key={`${i}-3`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideInFromLeft(1)}
              className="lg:leading-[3.8em] leading-[2.3em]">
              <h1>
                <p className={`lg:text-[55px] text-[35px] font-extrabold bg-clip-text ${tittle.color3}`}>
                  {tittle.tittle3}
                </p>
              </h1>
            </motion.div>
            <motion.div
              key={`${i}-4`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideInFromLeft(1)}
              className="lg:leading-[3.8em] leading-[2.3em]">
              <h1>
                <p className={`mt-6 lg:text-[64px] text-[36px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${tittle.color4}`}>
                  {tittle.tittle4}
                </p>
              </h1>
            </motion.div>
          </React.Fragment>
        )
        ))}

        {texts.map((text, i) => (
          i === index && (
            <motion.p
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideInFromLeft(1.5)}
              className="lg:text-3xl text-gray-200 mb-10"
            >
              {text}
            </motion.p>
          )
        ))}

        {buttons.map((button, i) => ( i === index && (
        <motion.a
          key={i}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideInFromLeft(2)}
          className="py-2 lg:text-2xl px-10 font-mono text-center button-primary text-white cursor-pointer rounded-lg"
        >
          {button}
        </motion.a>
        )))}
      </div>

      <motion.div
        key={index}
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(1)}
        className="w-full h-full flex justify-center items-center text-center mt-32"
      >
        <Image
          key={index}
          src={images[index].src}
          alt="icons"
          height={800}
          width={800}
        />
      </motion.div>
    </motion.div>
    <div className="flex justify-center">
    <button
      onClick={prevSlide}
      className="py-2 px-4 mr-2 font-mono text-center button-primary text-white cursor-pointer rounded-lg">
      <BiChevronLeft className="text-xl" />
    </button>
    <button
      onClick={nextSlide}
      className="py-2 px-4 font-mono text-center button-primary text-white cursor-pointer rounded-lg">
      <BiChevronRight className="text-xl"/>
    </button>
      </div>
    </div>
  );
};

export default Home;
