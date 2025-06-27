import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* College Info */}
          <div>
            <h2 className="text-orange-400 font-bold text-lg mb-2">
              DLS Inter College
            </h2>
            <p>Rithora, Bareilly, Uttar Pradesh - 243123</p>
            <p>Phone: +91-8273113731 / </p>
            <p>Email: info@dlsintercollege.in</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links </h4>
            <ul className="space-y-1">
              <li><a href="https://upmsp.edu.in/" className="hover:underline">UPMSP </a></li>
              <li><a href="https://results.upmsp.edu.in/" className="hover:underline">results / परिणाम</a></li>
              <li><a href="https://sarkariresult.com.cm/" className="hover:underline">Sarkari result / सरकारी परिणाम</a></li>
              <li><a href="https://ncert.nic.in/" className="hover:underline">NCERT / एनसीईआरटी</a></li>
              <li><a href="https://upmsp.edu.in/Contact.html" className="hover:underline">Contact Us / संपर्क करें</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-2">Services / सेवाएं</h4>
            <ul className="space-y-1">
              <li><a href="https://scholarship.up.gov.in/" className="hover:underline">Scholarships / छात्रवृत्ति</a></li>
              <li><a href="https://upmsp.edu.in/Syllabus.html" className="hover:underline">Syllabus / पाठ्यक्रम</a></li>
              <li><a href="https://upmsp.edu.in/QuestionBank.html" className="hover:underline">Question Bank / प्रश्न बैंक</a></li>
                <li><a href="https://upmsp.edu.in/Examination.html" className="hover:underline">Examination / परीक्षा</a></li>
                <li><a href="https://upmsp.edu.in/modal-paper.html" className="hover:underline">model paper / मॉडल पेपर</a></li>
      
              <li><a href="https://upmsp.edu.in/pdf/Academic_Calendar_2025_26.pdf" className="hover:underline">Holiday List / अवकाश सूची</a></li>
            </ul>
          </div>
       
 {/* Carrier options */}
        <div className=" mb-0">
          <h4 className="text-white font-semibold ">Carrier Options / कैरियर विकल्प</h4>
          <ul className="space-y-1">
            <li><a href="https://upsconline.nic.in/" className="hover:underline">Upsc / यूपीएससी</a></li>
            <li><a href="https://joinindianarmy.nic.in/" className="hover:underline">NDA / राष्ट्रीय रक्षा अकादमी</a></li>
            <li><a href="https://jeeadv.ac.in/" className="hover:underline">IIT JEE / भारतीय प्रौद्योगिकी संस्थान संयुक्त प्रवेश परीक्षा</a></li>
            <li><a href="https://neet.nta.nic.in/" className="hover:underline">NEET / राष्ट्रीय पात्रता सह प्रवेश परीक्षा</a></li>
            <li><a href="https://www.rrbcdg.gov.in/" className="hover:underline">Railway Recruitment / रेलवे भर्ती</a></li>
            <li><a href="https://www.ibps.in/" className="hover:underline">Banking Exams / बैंकिंग परीक्षा</a></li>
            <li><a href="https://ssc.nic.in/" className="hover:underline">SSC Exams / कर्मचारी चयन आयोग परीक्षा</a></li>

          </ul>
        </div>
         </div>

        {/* Map */}
        <div className="mt-8">
          <iframe
            src="https://maps.google.com/maps?q=rithora%20bareilly&t=&z=13&ie=UTF8&iwloc=&output=embed"  width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="DLS Inter College Map"
          ></iframe>
        </div>

        <hr className="my-5 border-gray-700" />
        
      
         
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 my-0 text-xl">
          <a href="https://www.facebook.com/pages/Darbari%20Lal%20Sharma%20Inter%20College/2120808191487780/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
            <FaInstagram />
          </a>
          <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTelegram />
          </a>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            <FaWhatsapp />
          </a>
        </div>
        {/* Copyright */}
        <div className="text-center text-sm mt-4">
          © 2025 DLS Inter College, Rithora | All Rights Reserved. | सभी अधिकार सुरक्षित
        </div>
      </div>
      
    </footer>
  );
}
