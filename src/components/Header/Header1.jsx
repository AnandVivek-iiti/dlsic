import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import saraswatiLogo from '../assets/Saraswati.png';

const navigation = [
  { name: 'Home', path: '/Home' },
  { name: 'Signup', path: '/' },
  { name: 'Acedemic', path: '/Acedemic' },
  { name: 'Student', path: '/Student' },
  { name: 'Alumni', path: '/Alumni' },
];

export default function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 shadow-md bg-white'>
      <div className="max-w-[99%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
         <img src={saraswatiLogo} alt="Logo" className="h-16 w-16 rounded-full" />

            <h1 className="text-lg text-black sm:text-2xl font-extrabold">
              DLS Inter College
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 p-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-bold text-lg ${
                  location.pathname === item.path
                    ? 'text-blue-500 underline'
                    : 'text-black hover:text-blue-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black text-3xl focus:outline-none"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
       {isOpen && (
  <div className="md:hidden absolute top-20 left-0 w-3/4 bg-white px-6 py-4 space-y-2 shadow-lg z-50 rounded-r-lg">
    {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded font-medium ${
                  location.pathname === item.path
                    ? 'bg-blue-100 text-blue-700 font-bold'
                    : 'hover:bg-gray-300 text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
