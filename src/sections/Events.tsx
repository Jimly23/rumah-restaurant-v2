"use client";

import { useState } from 'react';

interface EventItem {
  id: number;
  year: string;
  title: string;
  date: string;
  description: string;
  mediaUrl: string;
  type: 'image' | 'video';
}

const events: EventItem[] = [
  {
    id: 1,
    year: '2026',
    title: 'Pesta Satay Madura',
    date: 'April',
    description: 'Discover exciting upcoming events and block the date... Click for details',
    mediaUrl: '/assets/events/event3.jpeg',
    type: 'image',
  },
  {
    id: 2,
    year: '2026',
    title: 'Breakfast',
    date: 'Jan 25',
    description: 'Discover exciting upcoming events and block the date... Click for details',
    mediaUrl: '/assets/events/event2.mp4',
    type: 'video',
  },
  {
    id: 3,
    year: '2026',
    title: '1st Satay Club in Dubai',
    date: 'Jan 17',
    description: 'Discover exciting upcoming events and block the date... Click for details',
    mediaUrl: '/assets/events/event5.jpg',
    type: 'image',
  },
  {
    id: 4,
    year: '2025',
    title: 'Breakfast Buffet',
    date: 'Dec 27',
    description: 'Discover exciting upcoming events and live music every weekend',
    mediaUrl: '/assets/events/event4.jpg',
    type: 'image',
  },
  {
    id: 5,
    year: '2026',
    title: 'Hari Raya Dishes',
    date: 'March',
    description: 'Discover exciting upcoming events and live music every weekend',
    mediaUrl: '/assets/events/event4.jpg',
    type: 'image',
  },
];

const Events = () => {
  const [selectedMedia, setSelectedMedia] = useState<EventItem | null>(null);

  return (
    <section className="bg-[#dad1c1] py-24 px-4 font-sans overflow-hidden" id="events">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1c5302] uppercase tracking-widest mb-4">
          Events
        </h2>
        <p className="font-playfair text-2xl max-w-2xl mx-auto text-[#1c5302]">
          Mark your calendar for our upcoming highlights.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#1c5302] to-transparent hidden md:block"></div>
        {/* Mobile Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#1c5302] to-transparent md:hidden"></div>

        {events.map((event, index) => {
          const isLeft = index % 2 !== 0; // Ganjil di kiri (item ke-2)

          return (
            <div
              key={event.id}
              className={`relative mb-12 flex items-center w-full ${
                isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-4 border-[#1c5302] rounded-full z-10 top-8"></div>

              {/* Content Wrapper */}
              <div
                className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                  isLeft ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'
                }`}
              >
                <div 
                  onClick={() => setSelectedMedia(event)}
                  className="bg-[#1c5302] p-6 rounded-xl shadow-sm inline-block relative cursor-pointer hover:shadow-md transition-shadow group"
                >
                  {/* Triangle Arrow */}
                  <div className={`absolute top-4 w-0 h-0 border-y-[10px] border-y-transparent hidden md:block ${
                    isLeft 
                    ? 'left-[-10px] border-r-[10px] border-r-white' 
                    : 'right-[-10px] border-l-[10px] border-l-white'
                  }`}></div>
                  {/* Mobile Arrow */}
                  <div className="absolute top-4 left-[-10px] w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-white md:hidden"></div>
                  <span className='flex items-center gap-x-2'>
                    <span className="inline-block bg-white text-[#1c5302] font-bold px-3 py-1 rounded mb-3 uppercase tracking-wider">
                      {event.year}
                    </span>
                    <span className='mb-3 font-medium'>{event.date}</span>
                  </span>
                  <h3 className="text-2xl font-bold text-white transition-colors">
                    {event.title}
                  </h3>
                  <p className="font-playfair text-xl text-white italic leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Overlay */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button className="absolute top-8 right-8 text-white text-5xl font-light hover:text-gray-400">
            &times;
          </button>
          
          <div className="max-w-5xl max-h-[85vh] w-full flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'image' ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={selectedMedia.mediaUrl} 
                alt={selectedMedia.title} 
                className="max-w-full max-h-[85vh] rounded object-contain"
              />
            ) : (
              <video 
                src={selectedMedia.mediaUrl} 
                controls 
                autoPlay 
                className="max-w-full max-h-[85vh] rounded"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;