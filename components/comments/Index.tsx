"use client"
import React, { useEffect, useRef } from 'react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { MdPersonPin } from "react-icons/md";
import "./Style.css"

const Comment = () => {
    const activeRef = useRef<number>(2);
    const itemsRef = useRef<NodeListOf<Element> | null>(null);
    const nextRef = useRef<HTMLElement | null>(null);
    const prevRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        itemsRef.current = document.querySelectorAll('.slider .item');
        nextRef.current = document.getElementById('next');
        prevRef.current = document.getElementById('prev');

        const intervalId = setInterval(() => {
          activeRef.current = activeRef.current + 1 < itemsRef.current!.length ? activeRef.current + 1 : 0; // Volver al primer item si se llega al último
          loadShow();
        }, 5000);

        if (itemsRef.current && nextRef.current && prevRef.current) {
            loadShow();


            const isMobile = window.matchMedia('(max-width: 768px)').matches;

            if (isMobile) {
                let startX: number;
                let startY: number;
                let endX: number;
                let endY: number;

                const handleGesture = () => {
                    const deltaX = endX - startX;
                    const deltaY = endY - startY;
                    if (Math.abs(deltaX) > Math.abs(deltaY)) {
                        if (deltaX > 0) {
                            activeRef.current = activeRef.current - 1 >= 0 ? activeRef.current - 1 : activeRef.current;
                            loadShow();
                        } else {
                            activeRef.current = activeRef.current + 1 < itemsRef.current!.length ? activeRef.current + 1 : activeRef.current;
                            loadShow();
                        }
                    }
                };

                document.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                });

                document.addEventListener('touchend', (e) => {
                    endX = e.changedTouches[0].clientX;
                    endY = e.changedTouches[0].clientY;
                    handleGesture();
                });
            } else {
                nextRef.current.onclick = function () {
                    activeRef.current = activeRef.current + 1 < itemsRef.current!.length ? activeRef.current + 1 : activeRef.current;
                    loadShow();
                };
                prevRef.current.onclick = function () {
                    activeRef.current = activeRef.current - 1 >= 0 ? activeRef.current - 1 : activeRef.current;
                    loadShow();
                };
            }
          }
          return () => {
            clearInterval(intervalId);
          };
    }, []);

    function loadShow() {
        if (itemsRef.current) {
            for (let i = 0; i < itemsRef.current.length; i++) {
                const item = itemsRef.current[i] as HTMLElement;
                if (i === activeRef.current) {
                    item.classList.add('center');
                    item.style.transform = 'none';
                    item.style.zIndex = '2';
                    item.style.filter = 'none';
                    item.style.opacity = '1';
                    item.style.display = 'block';
                    item.style.width = '320px';
                    item.style.height = '420px';
                    item.style.setProperty('--scale', '1');
                } else if (i === activeRef.current - 1 || i === activeRef.current + 1 || i === activeRef.current - 2 || i === activeRef.current + 2) {
                    item.style.transform = `translateX(${120 * (i - activeRef.current)}px) scale(1) perspective(16px) perspective(1px)`;
                    item.style.zIndex = '1';
                    item.style.filter = 'blur(5px)';
                    item.style.opacity = '0.6';
                    item.style.display = 'block';
                    item.style.width = '320px';
                    item.style.height = '400px';
                    item.style.setProperty('--scale', '0.9');
                } else {
                    item.style.display = 'none';
                }
            }
        }
    }
  return (
    <section className='relative'>
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-80 bg-gray-800" style={{ backgroundImage: "url('/fondo_certificate.jpg')" }}></div>
      <div className='relative z-10 text-white text-center'>
        <h1 className='font-extrabold text-5xl py-10'>Testimonios</h1>
      </div>
    <div className="slider max-w-screen-xl mx-auto">
      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-5xl mb-2'/>
        </div>
        <h1 className='flex justify-center font-bold mb-5'>Slider 1</h1>
        <p className='font-medium'>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos
        </p>
      </div>
      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-5xl mb-2'/>
        </div>
        <h1 className='flex justify-center font-bold mb-5'>Slider 2</h1>
        <p className='font-medium'>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos
        </p>
      </div>
      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-5xl mb-2'/>
        </div>
        <h1 className='flex justify-center font-bold mb-5'>Slider 3</h1>
        <p className='font-medium'>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos
        </p>
      </div>
      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-5xl mb-2'/>
        </div>
        <h1 className='flex justify-center font-bold mb-5'>Slider 4</h1>
        <p className='font-medium'>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos
        </p>
      </div>
      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-5xl mb-2'/>
        </div>
        <h1 className='flex justify-center font-bold mb-5'>Slider 5</h1>
        <p className='font-medium'>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos
        </p>
      </div>
      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-5xl mb-2'/>
        </div>
        <h1 className='flex justify-center font-bold mb-5'>Slider 6</h1>
        <p className='font-medium'>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos
        </p>
      </div>
      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-5xl mb-2'/>
        </div>
        <h1 className='flex justify-center font-bold mb-5'>Slider 7</h1>
        <p className='font-medium'>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos
        </p>
      </div>
      <button id="next"> <AiOutlineRight /> </button>
      <button id="prev"> <AiOutlineLeft /> </button>
    </div>
    </section>
  )
}

export default Comment