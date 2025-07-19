import React from 'react'
import { useLocation } from 'react-router-dom';
import './Set.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
function Set(props) {
     const location = useLocation();
     const navigate=useNavigate();
  
  const navigation = [
    { name: "Home", path: "/" },
    { name: "Acedemic", path: "/Acedemic" },
    { name: "Student", path: "/Student" },
    { name: "Alumni", path: "/Alumni" },
    { name: "Contact Us", path: "/contact" },
    ...(!props.issignup ? [{ name: "Signup", path: "/signup" }] : []),
  ];

  return (
    <>
     {/* Mobile Dropdown */}
               (
          <div className="dropdown">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={props.closeset} // close menu after click
                className={`block py-2 px-4 text-base ${
                  location.pathname === item.path
                    ? ' text-blue-500 font-bold'
                    : 'text-white  hover:text-blue-500 font-bold'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {props.issignup&&
            <div className=''>
            <div className='profile'>{`🙍 ${props.personinfo.name}`}</div>
            <div className='logout' onClick={() => {
           if(window.confirm('Do you want to logout?')){
             localStorage.removeItem('personinfo');
            props.setissignup(false);
            props.setpersoninfo(null);
            navigate('/signup') ;
           }
            }}>🔓 Logout</div>
            </div>
            }

        </div>
      )
      </>
  )
}

export default Set