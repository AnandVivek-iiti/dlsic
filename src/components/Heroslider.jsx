// 'use client';
// 
import  { useEffect, useRef, useState } from 'react';
import Image from './assets/image.png';
// import Autoplay from 'embla-carousel-autoplay';
// Placeholder Carousel imports — replace with actual or custom component logic
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './YourCarouselComponent'; // Replace this line with your actual components

// Dummy translation function — replace with real i18n logic
const t = (key) => {
  const translations = {
    'hero.slide1.title': 'Classroom Learning',
    'hero.slide1.description': 'Interactive sessions with world-class faculty.',
    'hero.slide2.title': 'Campus View',
    'hero.slide2.description': 'Modern infrastructure and eco-friendly environment.',
    'hero.slide3.title': 'Science Lab',
    'hero.slide3.description': 'Explore innovation through experiments.',
    'hero.slide4.title': 'Sports Activities',
    'hero.slide4.description': 'Encouraging physical fitness and team spirit.',
    'hero.slide5.title': 'Cultural Events',
    'hero.slide5.description': 'Celebrate diversity and creativity.',
  };
  return translations[key] || key;
};

// Utility to manage classnames (simple fallback for `cn`)
const cn = (...classes) => classes.filter(Boolean).join(' ');

export default function HeroSlider() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // const plugin = useRef(
  //   Autoplay({ delay: 4000, stopOnInteraction: true })
  // );

  const slides = [
    {
      src: 'https://placehold.co/1200x500.png',
      alt: 'Students and faculty at a college event',
      hint: 'school assembly',
      titleKey: 'hero.slide5.title',
      descriptionKey: 'hero.slide5.description',
    },
    {
      src: 'https://placehold.co/1200x500.png',
      alt: 'Students studying in a classroom',
      hint: 'students classroom',
      titleKey: 'hero.slide1.title',
      descriptionKey: 'hero.slide1.description',
    },
    {
      src: 'https://placehold.co/1200x500.png',
      alt: 'College building front view',
      hint: 'college building',
      titleKey: 'hero.slide2.title',
      descriptionKey: 'hero.slide2.description',
    },
    {
      src: 'https://placehold.co/1200x500.png',
      alt: 'Students in a science lab',
      hint: 'science lab',
      titleKey: 'hero.slide3.title',
      descriptionKey: 'hero.slide3.description',
    },
    {
      src: 'https://placehold.co/1200x500.png',
      alt: 'Students playing sports',
      hint: 'sports field',
      titleKey: 'hero.slide4.title',
      descriptionKey: 'hero.slide4.description',
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="relative w-full group">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ loop: true }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  data-ai-hint={slide.hint}
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {t(slide.titleKey)}
                  </h2>
                  <p className="mt-4 text-lg md:text-xl max-w-2xl">
                    {t(slide.descriptionKey)}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-none h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-none h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Carousel>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              current === index + 1 ? 'w-4 bg-white' : 'bg-white/50'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
