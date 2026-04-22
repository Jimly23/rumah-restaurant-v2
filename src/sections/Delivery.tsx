"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Delivery = () => {
  const deliveryPlatforms = [
    {
      id: 'keeta',
      name: 'Keeta',
      description: 'Order via Keeta',
      logo: '/assets/images/keeta.png',
      url: 'https://play.google.com/store/apps/details?id=com.sankuai.sailor.afooddelivery',
    },
  ];

  const handleOpenApp = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="section-bg py-20 px-5 font-sans text-center" id="order">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h3 className="text-3xl md:text-5xl font-bold text-[#1c5302] mb-3">
          Delivery
        </h3>
        <p className="text-[#1c5302] font-playfair text-2xl mb-12">
          We partner with KEETA for fast, reliable, and right to your doorstep delivery
        </p>

        {/* Delivery Grid */}
        <div className="flex justify-center">
          {deliveryPlatforms.map((platform) => (
            <div
              key={platform.id}
              onClick={() => handleOpenApp(platform.url)}
              className="group bg-white p-10 rounded-[20px] shadow-sm hover:shadow-2xl hover:shadow-[#c5a059]/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center"
            >
              {/* Icon Wrapper */}
              <div className="h-20 w-[200px] flex items-center justify-center mb-5">
                <div className="relative w-40 h-20">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Content */}
              <h4 className="text-3xl font-bold text-[#2b331f] mb-1">
                {platform.name}
              </h4>
              <p className="text-lg text-black/80 font-semibold mb-6">
                {platform.description}
              </p>

              {/* Order Button */}
              <span className="inline-block bg-[#344349] text-white py-2 px-7 rounded-full text-sm font-semibold group-hover:bg-[#647985] transition-colors duration-300">
                Order Now
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivery;