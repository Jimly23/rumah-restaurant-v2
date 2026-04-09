import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="relative bg-[#dad1c1] text-[#344349] w-full py-20 px-6 md:px-12 overflow-hidden" id="about">

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <h2 className="font-cinzel text-[#1c5302] text-3xl md:text-4xl font-bold px-6 mb-10 tracking-widest uppercase">
          About
        </h2>

        {/* About Text Content */}
        <div className="font-playfair text-center text-[#1c5302] text-sm md:text-xl leading-relaxed space-y-6 max-w-7xl font-light normal-case">
          <p>
            In both Malay and Indonesian, &apos;Rumah&apos; means house or home, representing a symbol of warmth,
            safety, and family to us. At Rumah Restaurant, we serve an authentic culinary heritage passed
            down through generations, from Grandma Mak Emah and Wah Zainab to Abang Ansar.
          </p>
          <p>
            Guided by our motto, &apos;We serve only what we would proudly serve our own families at home,&apos;
            we are committed to providing dishes prepared with genuine passion and Rumah-Loving-Care (RLC).
            We prioritize your well-being by using healthy ingredients, including mineral water for cooking,
            no added MSG, and oils low in trans and saturated fats.
          </p>
          <p>
            Our specialty is Satay—premium meat marinated in aromatic spices like lemongrass and turmeric,
            charcoal-grilled to perfection, and served with our signature homemade peanut sauce.
            Here, you are more than just a guest; because at Rumah, you are always at home.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;