import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  const links = [
    { path: '/', label: 'HOME' },
    { path: '/collection', label: 'COLLECTION' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' }
  ];

  return (
    <nav className="flex items-center justify-between px-4 py-5 font-medium bg-white shadow-sm sm:px-10 lg:px-16">
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img src={assets.logo} className="w-36 sm:w-40" alt="Logo" />
      </Link>

      {/* Menu Links */}
      <ul className="hidden gap-8 text-sm sm:flex">
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 tracking-wide transition-colors duration-200 ${
                isActive ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'
              }`
            }
          >
            <p>{link.label}</p>
            <hr
              className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                location.pathname === link.path ? 'block' : 'hidden'
              }`}
            />
          </NavLink>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer hover:opacity-70"
          alt="Search"
        />

        {/* Profile Dropdown */}
        <div className="relative group">
          <Link to='/Login'><img className="w-5 cursor-pointer hover:opacity-70" src={assets.profile_icon} alt="Profile" /></Link>
          <div className="absolute right-0 hidden pt-4 group-hover:block">
            <div className="flex flex-col w-40 gap-2 px-5 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg shadow-md">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5 hover:opacity-70" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black rounded-full text-[10px] text-white">
            {getCartCount()} {/* ✅ Function call for live count */}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-6 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 shadow-lg z-50 ${
          visible ? 'w-3/4 sm:w-1/2' : 'w-0'
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 border-b border-gray-200 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
            <p>Back</p>
          </div>
          {links.map(link => (
            <NavLink
              key={link.path}
              onClick={() => setVisible(false)}
              className="py-3 pl-6 border-b border-gray-200 hover:bg-gray-50"
              to={link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
