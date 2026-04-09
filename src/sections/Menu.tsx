"use client";

import React from 'react';
import Link from 'next/link';

const Menu = () => {
  // Data gambar per kolom
  const columns = [
    {
      id: "col-1",
      images: [
        'https://cdn1.site-media.eu/images/0/22777508/slide1-bJAFiCbvA2q29Z2g6Q2mPw.png',
        'https://cdn1.site-media.eu/images/0/22777505/slide2-qf5rWeIEJApCz0CpP7YD2A.png',
        'https://cdn1.site-media.eu/images/0/22777503/slide3-Ymk24VmqzEIAXC7b3U39GA.png',
      ],
    },
    {
      id: "col-2",
      images: [
        'https://cdn1.site-media.eu/images/0/22777497/slide4-XzvK0v4T3Zzgl_g8mCcCNw.png',
        'https://cdn1.site-media.eu/images/0/22777494/slide5-cyugRQUBK99yH9qd9g8-_A.png',
        'https://cdn1.site-media.eu/images/0/22777491/slide6-1-xlZF19Ab9R8FiqWTXD9w.png',
      ],
    },
    {
      id: "col-3",
      images: [
        'https://cdn1.site-media.eu/images/0/22777488/slide7-q-TZBLrKvoqoxLqq8JD51w.png',
        'https://cdn1.site-media.eu/images/0/22777485/slide8-uExZLNyfLw0qTgkUk79qAw.png',
        'https://cdn1.site-media.eu/images/0/22777482/slide9-orVloy73MVbRgIh8QQZCsA.png',
      ],
    },
  ];

  return (
    <section className='bg-[#dad1c1] p-10'>
      <div className="max-w-7xl mx-auto mt-10 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1c5302] uppercase tracking-widest mb-4">
          Menu
        </h2>
        <p className="text-2xl font-playfair mx-auto text-[#1c5302]">
          Discover the authentic taste of Rumah Restaurant <br />with our curated selection of traditional Malay and Indonesian dishes.
        </p>
      </div>
      <div className="w-full flex flex-col items-center overflow-hidden" id="menu">
        <style jsx>{`
          @keyframes smoothFade {
            0% { opacity: 0; }
            10% { opacity: 1; }
            33.33% { opacity: 1; }
            43.33% { opacity: 0; }
            100% { opacity: 0; }
          }
          .animate-smooth-fade {
            animation: smoothFade 9s infinite ease-in-out;
          }
        `}</style>

        <div className="relative w-full grid grid-cols-1 md:grid-cols-3 rounded-3xl overflow-hidden">
          {columns.map((col, colIdx) => (
            <div
              key={col.id}
              className={`relative aspect-square w-full overflow-hidden ${colIdx > 0 ? 'hidden md:block' : ''}`}
            >
              {col.images.map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  className="absolute inset-0 bg-cover bg-center animate-smooth-fade opacity-0"
                  style={{
                    backgroundImage: `url('${img}')`,
                    animationDelay: `${imgIdx * 3}s`
                  }}
                ></div>
              ))}
            </div>
          ))}

          {/* Tombol Menu */}
        </div>
      </div>
      <div className="w-full justify-center items-center px-6 py-10">
        <div className='flex gap-2 justify-center items-center'>
          <Link
            href="/menu"
            className="w-full max-w-[250px] py-3 px-8 bg-[#818e91] text-white text-center rounded font-semibold text-lg tracking-wide shadow-lg"
          >
            Traditional Meal
          </Link>
          {/* <Link
            href="/menu-2"
            className="w-full max-w-[250px] py-3 px-8 bg-[#b58b2d] text-white text-center rounded font-medium tracking-wide shadow-lg"
          >
            Dessert
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Menu;