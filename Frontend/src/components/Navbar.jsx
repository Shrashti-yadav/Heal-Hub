import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      {/* Logo */}
      <img onClick={() => navigate('/')} className="w-10 cursor-pointer" src={assets.logo} alt="Logo" />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center gap-5 font-medium'>
  <NavLink to ='/'>
    <li className='py-1'>HOME</li>
    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
  </NavLink>
  <NavLink to ='/doctors'>
    <li className='py-1'>ALL DOCTORS</li>
  <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
  </NavLink>
  <NavLink to='/about'>
    <li className='py-1'>ABOUT</li>
    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
  </NavLink>
  <NavLink to='/contact'>
    <li className='py-1'>CONTACT</li>
    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
  </NavLink>
  </ul>
      {/* Right Section (Profile & Menu) */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative group cursor-pointer">
            {/* Profile Icon & Dropdown Trigger */}
            <div className="flex items-center gap-2">
              <img className="w-6 rounded-full" src={assets.profile_pic} alt="Profile" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md w-48 text-gray-700 hidden group-hover:block z-50">
              <ul className="flex flex-col gap-2 p-3">
                <li onClick={() => navigate('/my-profile')} className="cursor-pointer hover:text-black">My Profile</li>
                <li onClick={() => navigate('/my-appointments')} className="cursor-pointer hover:text-black">My Appointments</li>
                <li onClick={() => setToken(false)} className="cursor-pointer hover:text-black">Logout</li>
              </ul>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className="bg-[#4499dd] text-white px-8 py-3 rounded-full font-light hidden md:block">
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img onClick={() => setShowMenu(true)} src={assets.menu_icon} alt="Menu" className="md:hidden cursor-pointer w-7" />

        {/* Mobile Menu Overlay */}
        {showMenu && (
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transition-transform">
            <div className="flex items-center justify-between px-5 py-6">
              <img className="w-36" src={assets.logo} alt="Logo" />
              <img className="w-7 cursor-pointer" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close" />
            </div>
            <ul className="flex flex-col items-center gap-3 mt-5 px-5 text-lg font-medium">
              {["/", "/doctors", "/about", "/contact"].map((path, index) => (
                <NavLink key={index} onClick={() => setShowMenu(false)} to={path}>
                  <p className="px-4 py-2 rounded inline-block">{path === "/" ? "Home" : path.replace("/", "").toUpperCase()}</p>
                </NavLink>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
