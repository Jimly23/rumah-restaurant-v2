'use client'

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className='min-h-screen absolute z-20 top-0 right-0 w-full lg:hidden'>
        <Image src={'/assets/images/bunga-kanan.png'} alt="bunga kanan" width={150} height={150} className='absolute bottom-0 right-0' />
      </div>
      <div className='min-h-screen absolute z-20 top-0 left-0 w-full lg:hidden'>
        <Image src={'/assets/images/bunga-kiri.png'} alt="bunga kiri" width={150} height={150} className='absolute bottom-0 left-0' />
      </div>
      <Image
        src="/assets/images/bg-fix.png" // GANTI DENGAN PATH GAMBAR KAMU DI FOLDER PUBLIC
        alt="Pemandangan Interior Rumah Restaurant yang Asri"
        fill
        priority
        quality={100}
        className="object-cover object-center" // Gambar akan ditengah dan meng-cover area
      />
    </section>
  );
};

export default Hero;