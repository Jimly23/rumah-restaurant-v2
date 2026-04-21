import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative w-full h-full md:px-[200px] py-10 bg-[#dad1c1]">
      <div className="px-4 md:px-0 mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#344349] text-white rounded-md hover:bg-[#2c393e] transition-all duration-300 shadow-sm hover:shadow-md font-sans text-sm font-medium"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Home
        </Link>
      </div>
      <Image
        src="/assets/menu/menu1.jpg"
        alt="Menu 1"
        className="w-full"
        width={1000}
        height={1000}
      />
      <Image
        src="/assets/menu/menu2.jpg"
        alt="Menu 1"
        className="w-full"
        width={1000}
        height={1000}
      />
      <Image
        src="/assets/menu/menu3.jpg"
        alt="Menu 1"
        className="w-full"
        width={1000}
        height={1000}
      />
    </div>
  );
}