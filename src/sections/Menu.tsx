"use client";

import React from 'react';
import Link from 'next/link';

const DELAY_PER_IMAGE = 3; // detik per gambar

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
        '/assets/images/kopi-update.png',
        '/assets/images/sate-update.png',
      ],
    },
    {
      id: "col-2",
      images: [
        '/assets/images/terung-belado.jpg',
        '/assets/images/ikan-tamban-goreng.jpg',
        '/assets/images/pastel.jpeg',
        '/assets/images/nastel.jpeg',
        '/assets/images/pisang-goreng-update-2.png',
        '/assets/images/sate-update-2.png',
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
        '/assets/images/rendang-update.png',
        '/assets/images/sop-update.png',
      ],
    },
  ];

  // Gabungkan semua gambar secara interleaved untuk mobile
  // (ambil 1 dari col-1, 1 dari col-2, 1 dari col-3, berulang)
  const maxLen = Math.max(...columns.map((c) => c.images.length));
  const mobileImages: string[] = [];
  for (let i = 0; i < maxLen; i++) {
    for (const col of columns) {
      if (col.images[i]) mobileImages.push(col.images[i]);
    }
  }

  // Generate CSS per kolom (desktop) + mobile slideshow
  const desktopCSS = columns.map((col) => {
    const n = col.images.length;
    const duration = n * DELAY_PER_IMAGE;
    const pct = 100 / n;
    const fadeIn = Math.min(3, pct * 0.15);
    const fadeOut = Math.min(3, pct * 0.15);
    return `
      @keyframes smoothFade-${col.id} {
        0%                { opacity: 0; }
        ${fadeIn}%        { opacity: 1; }
        ${pct - fadeOut}% { opacity: 1; }
        ${pct}%           { opacity: 0; }
        100%              { opacity: 0; }
      }
      .fade-${col.id} {
        animation: smoothFade-${col.id} ${duration}s infinite ease-in-out;
      }
    `;
  }).join('');

  const mobileN = mobileImages.length;
  const mobileDuration = mobileN * DELAY_PER_IMAGE;
  const mobilePct = 100 / mobileN;
  const mobileFadeIn = Math.min(3, mobilePct * 0.15);
  const mobileFadeOut = Math.min(3, mobilePct * 0.15);
  const mobileCSS = `
    @keyframes smoothFade-mobile {
      0%                      { opacity: 0; }
      ${mobileFadeIn}%        { opacity: 1; }
      ${mobilePct - mobileFadeOut}% { opacity: 1; }
      ${mobilePct}%           { opacity: 0; }
      100%                    { opacity: 0; }
    }
    .fade-mobile {
      animation: smoothFade-mobile ${mobileDuration}s infinite ease-in-out;
    }
  `;

  const animationCSS = desktopCSS + mobileCSS;

  return (
    <section className="section-bg p-10">
      <div className="max-w-7xl mx-auto mt-10 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1c5302] tracking-widest mb-4">
          Menu
        </h2>
        <p className="text-2xl md:text-3xl font-light mx-auto text-[#1c5302]">
          Discover the authentic taste of Rumah Restaurant <br />with our curated selection of traditional Malay and Indonesian dishes.
        </p>
      </div>

      <div className="w-full flex flex-col items-center overflow-hidden" id="menu">
        {/* Dynamic keyframe CSS */}
        <style>{animationCSS}</style>

        <div className="relative w-full rounded-3xl overflow-hidden">

          {/* ── MOBILE: satu kolom dengan semua gambar ── */}
          <div className="relative aspect-square w-full overflow-hidden md:hidden">
            {mobileImages.map((img, imgIdx) => (
              <div
                key={imgIdx}
                className="absolute inset-0 bg-cover bg-center opacity-0 fade-mobile"
                style={{
                  backgroundImage: `url('${img}')`,
                  animationDelay: `${imgIdx * DELAY_PER_IMAGE}s`,
                }}
              ></div>
            ))}
          </div>

          {/* ── DESKTOP: 3 kolom terpisah ── */}
          <div className="hidden md:grid md:grid-cols-3">
            {columns.map((col) => (
              <div
                key={col.id}
                className="relative aspect-square w-full overflow-hidden"
              >
                {col.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className={`absolute inset-0 bg-cover bg-center opacity-0 fade-${col.id}`}
                    style={{
                      backgroundImage: `url('${img}')`,
                      animationDelay: `${imgIdx * DELAY_PER_IMAGE}s`,
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="w-full justify-center items-center px-6 py-10">
        <div className='flex gap-2 justify-center items-center'>
          <Link
            href="/menu"
            className="w-full max-w-[250px] py-3 px-8 bg-[#1c5302] border-3 border-[#1c5302] text-white text-center rounded-lg font-semibold text-lg tracking-wide shadow-lg"
          >
            Click Here to See Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;