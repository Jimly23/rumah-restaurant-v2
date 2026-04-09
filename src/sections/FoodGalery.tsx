"use client";


import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const foodItems = [
  { id: 1, title: 'Nasi Goreng', desc: 'Nasi Goreng Daging Spesial', img: '/assets/images/nasi-goreng.png' },
  { id: 2, title: 'Sate Madura', desc: 'Sate Madura Asli', img: '/assets/images/sate-madura.jpg' },
  { id: 3, title: 'Gulai Kambing', desc: 'Gulai Kambing Gurih', img: 'https://cdn1.site-media.eu/images/0/22838307/slide4-qgu_U9k3dWPzSkiuqiDT1g.png' },
  // { id: 4, title: 'Rendang', desc: 'Rendang Daging Sapi', img: 'https://cdn1.site-media.eu/images/0/22838312/slide2-uDzgZj_iRVk2Tgacs0qhhw.png' },
  { id: 5, title: 'Pisang Goreng', desc: 'Pisang Goreng Manis', img: '/assets/images/pisang-goreng.png' },
  { id: 6, title: 'Rendang', desc: 'Rendang Daging Sapi', img: '/assets/images/rendang.png' },
  { id: 7, title: 'Ikan Goreng Kicap', desc: 'Ikan Goreng Kicap Fresh', img: '/assets/images/ikan-goreng.png' },
  { id: 8, title: 'Nasi Rawon Ayam', desc: 'Nasi Rawon Ayam Goreng', img: '/assets/images/nasi-rawon-ayam-goreng.jpg' },
  { id: 9, title: 'Kangkong Sambal Belacan', desc: 'Kangkong Sambal Belacan', img: '/assets/images/kangkung.png' },
  // Tambahkan item lainnya sesuai kebutuhan
];

const FoodGallery = () => {
  return (
    <section className="py-20 bg-[#dad1c1] w-full overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1c5302] mb-4">Food Gallery</h2>
        <p className="text-[#1c5302] font-playfair text-2xl max-w-xl mx-auto">Browse our customers&apos; favorite dishes.</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 relative group">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-xl"
        >
          {foodItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-gray-100 group/card">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                />
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="text-orange-400 mb-2">★★★★★</div>
                  <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-80 font-light">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="prev-btn absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all">
          ❮
        </button>
        <button className="next-btn absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all">
          ❯
        </button>
      </div>
    </section>
  );
};

export default FoodGallery;