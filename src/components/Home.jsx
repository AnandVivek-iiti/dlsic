import React, { useState, useEffect, useRef } from "react";
import { BookOpen, ArrowDown, ArrowUp, Quote } from "lucide-react";
import image from "./assets/image.png";
import SR from "./assets/Ashish_Sir.png";
import { useLanguage } from './Main/context/Languagecontext.jsx';
import { translationKeys, defaultLanguage } from '../components/Main/context/lib/translations.js';
const slides = [
  {
    src: image,
    alt: "Students and faculty at a college event",
    title: "College Event"  ,
    description: "A vibrant morning gathering of students and teachers.",
  },
  {
    src: image,
    alt: "Classroom learning",
    title: "Focused Learning",
    description: "Classroom environment promoting education.",
  },
  {
    src: image,
    alt: "College Building",
    title: "Campus View",
    description: "Modern infrastructure and facilities.",
  },
  {
    src: image,
    alt: "Science Lab",
    title: "Science Lab",
    description: "Hands-on practical experiments in labs.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const timeoutRef = useRef(null);
const { language, toggleLanguage, t } = useLanguage();

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => nextSlide(), 4000);
    return () => resetTimeout();
  }, [current]);
useEffect(() => {
  localStorage.setItem('lang', language);
}, [language]);

  return (
    <>
    <div className="home-container">
      {/* <h1>{t("header.home")}</h1> */}

    {/* <button
      onClick={toggleLanguage}
      className="rounded-full bg-blue-600 text-white px-4 py-1 text-sm hover:bg-blue-700 transition"

    >
      {language === 'EN' ? 'हिन्दी' : 'English'}
    </button> */}


      {/* 🖼️ Image Slider */}
      <div
        className="relative z-10 w-full max-w-full mx-auto rounded-sm overflow-hidden group"
        onMouseEnter={resetTimeout}
        onMouseLeave={() => {
          timeoutRef.current = setTimeout(() => nextSlide(), 4000);
        }}
      >
        <img
          src={slides[current].src}
          alt={slides[current].alt}
          className="w-full z-10 h-64 md:h-[400px] object-cover transition-all duration-700"
        />
        <div className="absolute z-10 inset-0 bg-black/50 text-white flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            {slides[current].title}
          </h2>
          <p className="mt-2 text-lg md:text-xl max-w-2xl">
            {slides[current].description}
          </p>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black"
        >
          ❯
        </button>

        <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full ${
                current === index ? "bg-white w-4" : "bg-white/50"
              } transition-all`}
            />
          ))}
        </div>
      </div>

      {/* 📘 About Section */}
      <div className="max-w-full mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border-[1px] border-orange-500 border-t-[4px]">
        <div className="flex items-center gap-3 text-2xl font-bold text-blue-700 mb-4">
          <BookOpen className="h-7 w-7 text-orange-500" />
         <span>{t('about.title')}</span>

        </div>

        <p className="text-gray-800 mb-3">
          {t('about.p1')}
        </p>

        {aboutExpanded && (
          <div className="space-y-3 text-gray-800">
            <p>
              {t('about.p2')}
            </p>
            <p>
             {t('about.p3')}
            
            </p>
            <strong>शिक्षा से संस्कार तक।</strong>
          </div>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => setAboutExpanded(!aboutExpanded)}
            className="flex items-center mx-auto space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-800 hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            {aboutExpanded ? (
              <>
                <ArrowUp className="w-4 h-4" />
                <span>{t('about.readLess')}</span>
              </>
            ) : (
              <>
                <ArrowDown className="w-4 h-4" />
                <span>{t('about.readMore')}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 👨‍🏫 Principal Section */}
      <div className="max-w-full mx-auto mt-10">
        <div className="shadow-lg overflow-hidden bordershadow-md border-[1px] border-orange-500 border-t-[4px] rounded-xl">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 relative h-full min-h-[300px]">
              <img
                src={SR}
                alt="Principal's Photo"
                className="object-cover object-top h-full w-full"
              />
            </div>
            <div className="md:col-span-2 bg-white p-6">
              <div className="flex items-start gap-3 text-2xl font-bold text-blue-700 mb-2">
                <Quote className="h-7 w-7 text-orange-500 transform -scale-x-100" />
                <span>{t("principal.title")}</span>
              </div>
              <p className="italic text-gray-700 mb-2">
                {t("principal.quote")}
              </p>
              <p className="text-gray-800">
                {t("principal.message")}
              </p>
              <div className="mt-4">
                <p className="font-bold text-blue-900">{t("principal.name")}</p>
                <p className="text-medium text-orange-600 font-semibold">
                  {t("principal.designation")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📸 Media Gallery */}
      <div className="mt-10 max-w-full mx-auto bg-white border-[1px] border-orange-500 border-t-[4px] shadow-lg rounded-xl">
  <div className="text-2xl font-bold text-blue-700 px-6 py-4 border-b">
    📸 Media Gallery
  </div>

        <div className="relative">
          {/* Scrollable container */}
          <div className="flex overflow-x-auto gap-4 px-6 py-6 scroll-smooth scrollbar-thin">
            {/* Image Cards */}

            <div className="min-w-[380px] md:min-w-[400px] lg:min-w-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src="https://placehold.co/800x500.png"
                  alt="Science Lab"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white px-3 py-2 text-sm font-semibold">
                  {t("events.scienceExhibition.title")}
                </div>
              </div>
            </div>

            <div className="min-w-[280px] md:min-w-[300px] lg:min-w-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src="https://placehold.co/800x500.png"
                  alt="Sports Ground"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white px-3 py-2 text-sm font-semibold">
                  Sports Ground
                </div>
              </div>
            </div>

            <div className="min-w-[280px] md:min-w-[300px] lg:min-w-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src="https://placehold.co/800x500.png"
                  alt="Classroom"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white px-3 py-2 text-sm font-semibold">
                  Classroom
                </div>
              </div>
            </div>

            <div className="min-w-[280px] md:min-w-[300px] lg:min-w-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src="https://placehold.co/800x500.png"
                  alt="Library"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white px-3 py-2 text-sm font-semibold">
                  Library
                </div>
              </div>
            </div>

            <div className="min-w-[280px] md:min-w-[300px] lg:min-w-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src="https://placehold.co/800x500.png"
                  alt="Cultural Event"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white px-3 py-2 text-sm font-semibold">
                  Cultural Event
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
