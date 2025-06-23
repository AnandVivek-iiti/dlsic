import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between space-y-10 md:space-y-0">
          {/* Logo and Columns */}
          <div className="grid grid-cols-1 mx-auto md:grid-cols-4 gap-50">
        
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li>Marketing</li>
                <li>Analytics</li>
                <li>Automation</li>
                <li>Commerce</li>
                <li>Insights</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>Submit ticket</li>
                <li>Documentation</li>
                <li>Guides</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Press</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>Terms of service</li>
                <li>Privacy policy</li>
                <li>License</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-700" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 Your Company, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xl">
            <a href="https://www.facebook.com/pages/Darbari%20Lal%20Sharma%20Inter%20College/2120808191487780/#"><FaFacebookF /></a>
            <a href="www.instagram.com"><FaInstagram /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
