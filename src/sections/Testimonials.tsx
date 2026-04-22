"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';

// Map of name (lowercase first word) to local image file
const avatarMap: Record<string, string> = {
  "shanya": "/assets/testimonials/shanya.png",
  "nicolas": "/assets/testimonials/nicolas.png",
  "damian": "/assets/testimonials/damian.png",
  "yousef": "/assets/testimonials/yousef.png",
  "khairul": "/assets/testimonials/khairul.png",
  "juefri": "/assets/testimonials/juefri.png",
  "nehsan": "/assets/testimonials/nehsan.png",
  "elia": "/assets/testimonials/elia.png",
  "anang": "/assets/testimonials/anang.png",
  "shaista": "/assets/testimonials/shaista.png",
  "ahmad": "/assets/testimonials/ahmad.png",
  "alvaro": "/assets/testimonials/alvaro.png",
  "iman": "/assets/testimonials/iman.png",
  "dince": "/assets/testimonials/dince.png",
  "vildana": "/assets/testimonials/vildana.png",
};

function getAvatarPath(name: string): string | null {
  const firstWord = name.split(" ")[0].toLowerCase();
  return avatarMap[firstWord] ?? null;
}

type Testimonial = {
  id: number;
  name: string;
  role: string;
  date: string;
  text: string;
};

const testimonials: Testimonial[] = [
  { id: 1, name: "Kalaynahs S", role: "Customer", date: "01/02/2026", text: "They provide original recipes. Nice staff and kind owner. Generous portions, clean outlet, delicious food, and reasonable prices. Highly recommended." },
  { id: 2, name: "Shanya Sang", role: "Customer", date: "01/02/2026", text: "Hidden gem! Best Malaysian food in town. Clean place, high-quality food, and authentic flavors. Fried fish is fresh and perfectly crispy." },
  { id: 3, name: "Nicolas", role: "Customer", date: "01/01/2026", text: "Discovered this gem today. The food was tasty and beautifully presented. Service was excellent and timely. Highly recommended for authentic cuisine lovers." },
  { id: 4, name: "Damian Kok", role: "Customer", date: "05/01/2026", text: "First time here. Very authentic Singapore-Malay food, best satay in Dubai." },
  { id: 5, name: "Yousef Picky", role: "Customer", date: "10/01/2026", text: "Good location, good price range, and excellent service." },
  { id: 6, name: "Rocio Munoz", role: "Customer", date: "10/01/2026", text: "Had a fantastic experience! The food was flavorful and beautifully presented, the staff were friendly and attentive. Definitely coming back." },
  { id: 7, name: "Khairul Anwar", role: "Customer", date: "12/01/2026", text: "A newly opened restaurant serving Malay-Singaporean cuisine by experienced chefs with over 30 years of expertise." },
  { id: 8, name: "Juefri Rene", role: "Customer", date: "12/01/2026", text: "A humble family-run spot offering authentic Singaporean heritage cuisine. Cozy and full of character." },
  { id: 9, name: "Candy C", role: "Customer", date: "15/01/2026", text: "Delicious and comforting home-style food with authentic Singapore, Malaysia, and Indonesia flavors. Clean restaurant and attentive staff." },
  { id: 10, name: "Bernice Chew", role: "Customer", date: "15/01/2026", text: "Rumah truly feels like home. The food is comforting, familiar, and full of flavor, just like in Malaysia and Singapore." },
  { id: 11, name: "Nehsan Selvaraj", role: "Customer", date: "18/01/2026", text: "Amazing food and atmosphere. Brings back memories of Malaysia. Great portions and reasonable prices." },
  { id: 12, name: "Elia Rani", role: "Customer", date: "18/01/2026", text: "Truly authentic Singaporean Malay food. Feels like home-cooked meals and made me crave it again the next day." },
  { id: 13, name: "Albert Albert", role: "Customer", date: "20/01/2026", text: "Breakfast buffet was worth the price. The teh susu was outstanding. Sambal and pisang goreng were also excellent." },
  { id: 14, name: "Bin Bin", role: "Customer", date: "20/01/2026", text: "The Nasi Lemak was so delicious I had more than two servings. The sambal enhanced every dish. A must-visit!" },
  { id: 15, name: "Nasuhiyah Ashari", role: "Customer", date: "22/01/2026", text: "Satay, udang goreng kunyit, ikan goreng, mee goreng, and beef noodle are excellent. Superb ambience, excellent service, and very clean." },
  { id: 16, name: "Anang Hudaya Muhamad Amin", role: "Customer", date: "22/01/2026", text: "Great place. Delicious food. Highly recommended for anyone wanting to try Malay cuisine." },
  { id: 17, name: "Shaista Umairah", role: "Customer", date: "25/01/2026", text: "Tried satay, bandung, and pisang goreng. Very authentic Singaporean taste. Clean and cozy place. Will definitely return." },
  { id: 18, name: "Ahmad Shafiq", role: "Customer", date: "25/01/2026", text: "Alhamdulillah, very delicious! Great food and service. A promising restaurant." },
  { id: 19, name: "Alvaro Maldonado Macias", role: "Customer", date: "28/01/2026", text: "Went for dinner with friends. Amazing food and great service." },
  { id: 20, name: "Iman Hassein", role: "Customer", date: "28/01/2026", text: "I'm sure this place will be awesome, InshaAllah." },
  { id: 22, name: "Mohammed Al Bloushi", role: "Customer", date: "01/02/2026", text: "Amazing food and excellent service. Everything was fresh and well-balanced. Beautiful and relaxing atmosphere." },
  { id: 23, name: "Dinah Bahirah", role: "Customer", date: "01/02/2026", text: "The food tastes like home cooking and reminds me of my mother. Will definitely come back." },
  { id: 24, name: "Eva Almusawi", role: "Customer", date: "03/02/2026", text: "Excellent food and service." },
  { id: 25, name: "Angella Bea Enriquez", role: "Customer", date: "05/02/2026", text: "Great experience overall." },
  { id: 26, name: "Dince Joseph", role: "Customer", date: "05/02/2026", text: "Dine-in experience was great." },
  { id: 27, name: "Vildana Slatina", role: "Customer", date: "06/02/2026", text: "Excellent experience." },
];

// ── Avatar component ─────────────────────────────────────────────────────────
function Avatar({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  const avatarPath = getAvatarPath(name);
  const dim = size === "lg" ? "w-20 h-20" : "w-14 h-14";
  const textSize = size === "lg" ? "text-3xl" : "text-xl";

  return (
    <div className={`relative ${dim} rounded-full overflow-hidden border-2 border-[#F0E9DE] flex-shrink-0`}>
      {avatarPath ? (
        <Image src={avatarPath} alt={name} fill className="object-cover" />
      ) : (
        <div className={`w-full h-full flex items-center justify-center bg-[#344349] text-white ${textSize} font-bold`}>
          {name.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}

// ── Modal ────────────────────────────────────────────────────────────────────
function TestimonialModal({ testi, onClose }: { testi: Testimonial; onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 flex flex-col gap-6"
        style={{
          animation: "modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Profile */}
        <div className="flex items-center gap-5">
          <Avatar name={testi.name} size="lg" />
          <div>
            <h3 className="text-xl font-bold text-[#344349] leading-tight">{testi.name}</h3>
            <p className="text-sm text-gray-400">{testi.role}</p>
          </div>
        </div>

        {/* Stars */}
        <div className="text-yellow-400 text-2xl tracking-widest">★★★★★</div>

        {/* Review text */}
        <p className="font-playfair text-xl text-gray-800 leading-relaxed italic">
          &quot;{testi.text}&quot;
        </p>

        {/* Date */}
        <div className="text-sm text-gray-400 border-t border-gray-100 pt-4">
          {testi.date}
        </div>
      </div>

      {/* Keyframe style */}
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const totalSlides = testimonials.length;

  return (
    <section className="section-bg py-20 px-5 md:px-10 font-sans overflow-hidden mt-20" id="testimonials">
      <div className="max-w-7xl mx-auto">

        {/* Title Area */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1c5302] mb-2">Testimonials</h2>
          <p className="font-playfair text-3xl text-[#1c5302]">What our guests says on review.</p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="pb-12"
          >
            {testimonials.map((testi) => (
              <SwiperSlide key={testi.id}>
                <div
                  onClick={() => setSelected(testi)}
                  className="bg-white p-8 rounded-2xl shadow-lg shadow-black/5 h-full flex flex-col justify-between cursor-pointer transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div>
                    {/* Profile */}
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar name={testi.name} />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 leading-tight">{testi.name}</h3>
                        <p className="text-xs text-gray-400">{testi.role}</p>
                      </div>
                    </div>

                    {/* Text — truncated in card */}
                    <p className="font-playfair text-lg text-black leading-relaxed italic mb-6 line-clamp-4">
                      &quot;{testi.text}&quot;
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="text-yellow-400">★★★★★</div>
                    <div className="text-black font-medium">{testi.date}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Counter Indicator */}
          <div className="flex justify-center mt-4">
            <div className="bg-[#2b331f]/10 text-[#2b331f] px-6 py-1.5 rounded-full text-sm font-bold tracking-widest">
              {activeIndex + 1} / {totalSlides}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <TestimonialModal testi={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Testimonials;