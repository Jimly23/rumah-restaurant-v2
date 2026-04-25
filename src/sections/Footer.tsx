"use client";

import Image from 'next/image';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <footer className="bg-[#dad1c1] text-[#344349] py-12 px-6 md:px-12 border-t border-white/5">
//       <div className="max-w-7xl text-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

//         {/* Sisi Kiri: Navigasi Utama */}
//         <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 order-2 md:order-1">
//           <Link href="/" className="">
//             Home
//           </Link>
//           <Link href="#about" className="">
//             About
//           </Link>
//           <Link href="#menu" className="">
//             Service
//           </Link>
//           <Link href="#contact" className="">
//             Contact
//           </Link>
//         </nav>

//         {/* Tengah: Logo Bulat */}
//         <div className="order-1 md:order-2 flex justify-center">
//           <div className="relative w-20 h-20 md:w-24 md:h-24 bg-[#e8e2d6] p-2 rounded-full p-4 flex items-center justify-center overflow-hidden border-2 border-[#647985] shadow-xl">
//             {/* Ganti src dengan path logo asli milik Rumah Restaurant */}
//             <Image 
//               src="/assets/images/logo.png" 
//               alt="Rumah Restaurant Logo" 
//               width={80} 
//               height={80} 
//               className="object-contain"
//             />
//           </div>
//         </div>

//         {/* Sisi Kanan: Legal & Privacy */}
//         <div className="flex justify-center md:justify-end gap-4 order-3">
//           <Link href="/legal-notice" className="hover:underline underline-offset-4 decoration-[#c5a059]">
//             Legal & Privacy Notice
//           </Link>
//         </div>

//       </div>

//       {/* Baris Bawah: Copyright (Opsional namun umum) */}
//       <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center">
//         <p className="">
//           &copy; {new Date().getFullYear()} Rumah Restaurant. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-bg py-12 px-4 border-t border-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">

        <div className='relative w-40 h-40 flex items-center justify-center rounded-full'>
          <Image src={'/assets/images/logo-footer-3.png'} alt="logo" width={100} height={100} className='object-contain w-full h-full' />
        </div>

        {/* Brand/Service Links */}
        <nav className="flex flex-wrap font-light justify-center gap-x-8 gap-y-4 text-[#1c5302]">
          <a
            href="#home"
            className="text-xs md:text-lg tracking-[0.2em] hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-xs md:text-lg tracking-[0.2em] hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#menu"
            className="text-xs md:text-lg tracking-[0.2em] hover:text-white transition-colors"
          >
            Menu
          </a>
          <a
            href="#order"
            className="text-xs md:text-lg tracking-[0.2em] hover:text-white transition-colors"
          >
            Order
          </a>
          {/* <a 
            href="#events" 
            className="text-xs md:text-lg tracking-[0.2em] hover:text-white transition-colors"
          >
            Events
          </a> */}
          <a
            href="#testimonials"
            className="text-xs md:text-lg tracking-[0.2em] hover:text-white transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#gallery"
            className="text-xs md:text-lg tracking-[0.2em] hover:text-white transition-colors"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-xs md:text-lg tracking-[0.2em] hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        <a href="/legal-notice" className='text-xs font-light text-[#1c5302] md:text-lg tracking-[0.2em] hover:text-white transition-colors'>
          Legal & Privacy Notice
        </a>

        {/* Divider Bar (Optional, following timeline style from image 2) */}
        <div className="w-full max-w-xs h-[1px] bg-gray-200"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm md:text-base text-[#1c5302] tracking-wide font-light">
            &copy; {new Date().getFullYear()} Rumah Restaurant LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;