import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="section-bg relative text-[#344349] w-full py-20 px-6 md:px-12 overflow-hidden" id="about">

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <h2 className="text-[#1c5302] text-3xl md:text-4xl font-bold px-6 mb-10 tracking-widest">
          About
        </h2>

        {/* About Text Content */}
        <div className="text-center text-[#1c5302] text-[12px] md:text-xl leading-relaxed space-y-6 max-w-7xl font-light normal-case">
          <h3 className='text-center font-medium text-2xl mb-0'>Why Rumah</h3>
          <p>
            Rumah means home in Malay and Bahasa Indonesia—but here, it’s an experience. Rooted in ancient traditions, Rumah is a place of warmth, comfort, and togetherness, where heritage flavours are elevated and hospitality feels deeply personal. Every visit is an invitation to slow down, gather, and feel truly at home.
          </p>
          <h3 className='text-center font-medium text-2xl mb-0'>Bringing Home to You</h3>
          <p>
            We serve only what we would proudly serve our own families. Each dish is prepared with Rumah‑loving‑care, using thoughtfully sourced ingredients, no added MSG, healthier oils, and mineral water—crafted with intention, balance, and soul.
          </p>
          <h3 className='text-center font-medium text-2xl mb-0'>A Legacy on Every Plate</h3>
          <p>
            Our recipes are cherished family heirlooms, lovingly passed down through generations. Each bite carries memories of shared tables, time‑honoured techniques, and flavours that speak softly of home, tradition, and belonging.
          </p>
          <p className='italic font-moment text-base md:text-2xl'>Step inside Rumah—where heritage meets heart, and every meal feels like coming home.</p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;