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

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
      content: "@rumahrestaurant_dxb",
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
      id: 4,
      icon: <WhatsappIcon />,
      content: "+9715-65216026",
      link: "https://wa.me/971565216026",
      type: "single",
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
    <section className="section-bg py-24 px-6 md:px-12 font-sans overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

        {/* Kiri */}
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1c5302] tracking-tight">
            Contact
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
                            className="cursor-pointer text-[#1c5302] text-base md:text-2xl leading-relaxed hover:text-white"
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
                    className="cursor-pointer text-[#1c5302] lowercase text-base md:text-2xl leading-relaxed hover:text-white"
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
          <div className="relative w-full h-[200px] md:h-[350px] rounded-2xl overflow-hidden border-[6px] border-white shadow-2xl group/map">
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