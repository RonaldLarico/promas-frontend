"use client"
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { TitleText, TypingText } from '../share/CustomText'
//import ContactImg from '../public/assets/contact.jpg';

const variants = staggerContainer("0.1s", "0.1s");
const Contact = () => {

const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.submit();
    setIsSubmit(true);
  };

  const rowsValue: string = '5';
  const rowsNumber: number = parseInt(rowsValue);
  return (
    <div id='contact' className='w-full lg:h-screen text-white bg-[#030014]'>
      <div className='max-w-[1240px] m-auto px-2 py-10 w-full'>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}>
            <TypingText title="CONTACTANOS" textStyles="text-center" />
        </motion.div>
        <div className='grid lg:grid-cols-5 gap-8 mt-10'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full bg-gray-400 shadow-xl rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src="/IMAGEN.png"
                  width={300}
                  height={200}
                  alt='promas'
                />
              </div>
              <div>
                <h2 className='py-2'>Clint Briley</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/clint-briley-50056920a/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/fireclint'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>

                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto bg-gray-400 shadow-xl rounded-xl lg:p-4'>
            <div className='p-4'>
              {!isSubmit ? (
              <form
                action='https://formsubmit.co/ronevanz01@gmail.com'
                method='POST'
                onSubmit={handleSubmit}
                //encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Nombres</label>
                    <input
                      className='form-control border-2 rounded-lg p-3 flex border-gray-300 text-gray-800'
                      type='text'
                      name='name'
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      N° celular
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 text-gray-800'
                      type='text'
                      name='phone'
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-gray-800'
                    type='email'
                    name='email'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Asunto</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-gray-800'
                    type='text'
                    name='asunto'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Mensaje</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 text-gray-800'
                    rows={rowsNumber}
                    name='message'
                    required
                  ></textarea>
                </div>
                <button type='submit' className='w-full p-4 text-gray-100 border rounded-xl mt-4'>
                  Enivar mensaje
                </button>
                  <input type="hidden" name="_next" value="http://localhost:3000" />
                  <input type="hidden" name="_captcha" value="false" />
              </form>
              ) : (
                <div className="text-center">
                  <p className='text-2xl font-bold mb-4'>!GRACIAS!</p>
                  <p className="text-2xl font-bold text-green-500 mb-4">Datos enviados con éxito</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='flex justify-center py-6'>
          <Link href='/'>

              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
