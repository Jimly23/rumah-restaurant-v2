"use client";

import React from 'react';
import Link from 'next/link';

const Menu = () => {
  // Data gambar per kolom
  const columns = [
    {
      id: "col-1",
      images: [
        '/assets/images/kangkung.png',
        '/assets/images/terung-belado.jpg',
        '/assets/images/rendang-cabai.jpeg',
        '/assets/images/telur.jpeg',
      ],
    },
    {
      id: "col-2",
      images: [
        '/assets/images/terung-belado.jpg',
        '/assets/images/ikan-tamban-goreng.jpg',
        '/assets/images/pastel.jpeg',
        '/assets/images/nastel.jpeg',
      ],
    },
    {
      id: "col-3",
      images: [
        '/assets/images/nasi-rawon-ayam-goreng.jpg',
        '/assets/images/ikan-goreng-kicap.jpg',
        '/assets/images/sate-madura.jpg',
        '/assets/images/nasi-kriuk.jpeg',
        '/assets/images/jus-buah.jpeg',
      ],
    },
  ];

  return (
    <section className="section-bg p-10">
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
            className="w-full max-w-[250px] py-3 px-8 bg-[#1c5302] border-3 border-[#1c5302] text-white text-center rounded-lg font-semibold text-lg tracking-wide shadow-lg"
          >
            Click Here to See Full Menu          </Link>
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