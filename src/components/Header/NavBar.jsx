import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import saraswatiLogo from '../assets/Saraswati.png';
import user from '../assets/user.png'
import { useNavigate } from 'react-router-dom';
// import ModeToggle from "./Modetoggle"; 

export default function NavBar(props) {
  const navigate=useNavigate();
  const [isuserinfoopen,setisuserinfoopen]=useState(false);
const navigation = [
  { name: 'Home', path: '/' },
  // { name: 'Signup', path: '/signup' },
  { name: 'Acedemic', path: '/Acedemic' },
  { name: 'Student', path: '/Student' },
  { name: 'Alumni', path: '/Alumni' },
  {name:'Contact Us' , path : '/contact'},
  
  ...(!props.issignup?[{ name: 'Signup', path: '/signup'}]:[] )
];
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
   
         <header className=' sticky top-0 z-50 bg-gradient-to-br from-indigo-100 to-slate-50 text-black  shadow-md'>
      
      <div className="max-w-[99%] mx-auto items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
         <img src={saraswatiLogo} alt="Logo" className="h-16 w-16 border-2 border-indigo-200 rounded-full" />

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
                    ? 'text-blue-500 '
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
              className="text-black text-3xl cursor-pointer focus:outline-none"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
       {isOpen && (
  <div className="md:hidden absolute top-20 left-0 w-3/4 bg-white px-6 py-auto space-y-2 shadow-lg z-50 rounded-r-lg">
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
   
   {props.issignup&&
   <div className='hidden md:block'  onClick={()=>setisuserinfoopen(!isuserinfoopen)}>
     <img src={user} alt="user" className='w-11 h-11 cursor-pointer hover:h-12 hover:w-12 hover:opacity-75' />
   </div>
   }
   {props.isuserinfoopen&&(
     <div className='w-80 hidden md:block absolute border border-radius-2 top-32 right-3 z-100 bg-white rounded-md '>
       <div className='flex flex-col items-center my-5 mx-5 border rounded bg-gray-300' >
       <img src={user} alt="user"  className='w-15 h-15 my-2 '/>
       <h2 className='font-bold py-1'>{props.personinfo?.name||'No name'}</h2>
       <h2>{props.personinfo?.email||'No email '}</h2>
       </div>
       <button className='logout' onClick={() => {
              if(window.confirm('Do you want to logout?')){
                localStorage.removeItem('personinfo');
               props.setissignup(false);
               props.setpersoninfo(null);
               setisuserinfoopen(false);
               navigate('/signup') ;
              }
               }}>🔓 Logout
               </button>
     </div>
   )}
             
     
   
         
    </header>
  );
}
