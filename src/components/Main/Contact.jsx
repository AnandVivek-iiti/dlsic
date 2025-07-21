import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useLanguage } from "../Main/context/Languagecontext";

const ContactSection = () => {
  const { language, toggleLanguage, t } = useLanguage();
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <div className="relative bg-[#0e0e1c] text-white py-16 px-6 overflow-hidden">
      {/* Typewriter Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-center mb-12 glow"
      >
        <Typewriter
          words={[
            language === "EN" ? "Get in Touch" : "संपर्क करें",
            language === "EN"
              ? "We're Here to Help"
              : "हम आपकी मदद के लिए यहां हैं",
            language === "EN"
              ? "Contact DLS Inter College"
              : "DLS इंटर कॉलेज से संपर्क करें",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </motion.h2>

      {/* Contact Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 grid md:grid-cols-3 gap-10 backdrop-blur-xl bg-white/5 p-8 rounded-xl border border-white/10 shadow-2xl"
      >
        {/* Info Card */}
        <div className="space-y-4 text-sm md:text-base">
          <h3 className="text-2xl font-bold text-cyan-400 glow">
            📍 {language === "EN" ? "Contact Info" : "संपर्क सूचना"}
          </h3>
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-cyan-300" /> +91 9876543210
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-pink-400" /> info@dlsintercollege.ac.in
          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-yellow-300" />{" "}
            {language === "EN"
              ? "Rithora, Bareilly, UP"
              : "रिठोरा, बरेली, उत्तर प्रदेश"}
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder= {language === "EN" ? "Full Name" : "पूरा नाम"}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder={language === "EN" ? "Your Email" : "आपका ईमेल"}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            rows="3"
            placeholder={language === "EN" ? "Your Message" : "आपका संदेश"}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400"
          ></textarea>
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-lg neon-glow">
            🚀 {language === "EN" ? "Send Message" : "मेसेज भेजें"}
          </button>
        </form>

        {/* Map Card (Working) */}
        <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg h-[300px]">
          <iframe
            title="DLS Location"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=rithora%20bareilly&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </motion.div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://whatsapp.com/channel/0029VacupYgHFxP2LhjNao1S"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href="https://t.me/AvSovu"
          target="_blank"
          className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <FaTelegram size={22} />
        </a>
        <a
          href="https://instagram.com/your_insta"
          target="_blank"
          className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <FaInstagram size={22} />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
