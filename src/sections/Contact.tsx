"use client";

import React from 'react';
import Image from 'next/image';
import { Phone, MapPin, Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <Mail size={20} />,
      content: "l.alhakeem@rumahrestaurant.com",
      link: "mailto:l.alhakeem@rumahrestaurant.com",
      type: "single",
    },
    {
      id: 2,
      icon: <InstagramIcon />,
      content: "@rumahrestaurant",
      link: "https://www.instagram.com/rumahrestaurant_dxb/",
      type: "single",
    },
    {
      id: 3,
      type: "phones",
      phones: [
        { content: "+9714-3293229", link: "tel:+97143293229" },
        { content: "+9715-65216026", link: "tel:+971565216026" },
      ],
    },
    {
      id: 5,
      icon: <MapPin size={20} />,
      content: "S01, Wasl Bay, 33 Rebat St, Al Garhoud, Dubai",
      link: "https://www.google.com/maps/place/Rumah+Restaurant+Dubai",
      type: "single",
    },
  ] as const;

  return (
    <section className="bg-[#dad1c1] py-24 px-6 md:px-12 font-sans overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        
        {/* Kiri */}
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1c5302] tracking-tight">
            Visit Us
          </h2>
          
          <div className="flex flex-col gap-8 font-playfair">
            {contactInfo.map((item) => {
              if (item.type === "phones") {
                return (
                  <div key={item.id} className="flex items-center gap-5 group">
                    <div className="text-[#1c5302] w-6 flex justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div className="flex items-center gap-4 flex-wrap">
                      {item.phones.map((phone, idx) => (
                        <React.Fragment key={phone.link}>
                          <a
                            href={phone.link}
                            className="cursor-pointer text-[#1c5302] text-base md:text-2xl leading-relaxed hover:underline underline-offset-4 decoration-[#c5a059]"
                          >
                            {phone.content}
                          </a>
                          {idx < item.phones.length - 1 && (
                            <span className="text-[#1c5302]/30 text-xl select-none">|</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <div key={item.id} className="flex items-center gap-5 group">
                  <div className="text-[#1c5302] w-6 flex justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="cursor-pointer text-[#1c5302] lowercase text-base md:text-2xl leading-relaxed hover:underline underline-offset-4 decoration-[#c5a059]"
                  >
                    {item.content}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Kanan (Map) */}
        <div className="space-y-6">

          {/* Map 1 */}
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden border-[6px] border-white shadow-2xl group/map">
            <a 
              href="https://maps.app.goo.gl/beiwRrFveuGANFHz6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              <Image 
                src="https://cdn1.site-media.eu/images/0/24527406/kontak-fW-dYKvFm96ggYtWUIzxMg.jpeg" 
                alt="Map"
                fill
                className="object-cover transition-transform duration-700 group-hover/map:scale-110 group-hover/map:brightness-90"
              />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="bg-[#647985]/90 text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide border border-white/20 shadow-xl">
                  Open in Google Maps
                </span>
              </div>
            </a>
          </div>

          {/* Map 2 */}
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden border-[6px] border-white shadow-2xl group/map">
            <a 
              href="https://maps.app.goo.gl/beiwRrFveuGANFHz6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              <Image 
                src="/assets/images/map.png" 
                alt="Map"
                fill
                className="object-cover transition-transform duration-700 group-hover/map:scale-110 group-hover/map:brightness-90"
              />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="bg-[#647985]/90 text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide border border-white/20 shadow-xl">
                  Open in Google Maps
                </span>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;