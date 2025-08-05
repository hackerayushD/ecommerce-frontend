import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="grid gap-10 px-6 py-10 mx-auto text-sm max-w-7xl sm:grid-cols-3">

        {/* Brand Info */}
        <div>
          <img src={assets.logo} className="mb-4 w-28" alt="Forever Logo" />
          <p className="leading-6 text-gray-600">
            Your go‑to destination for premium quality fashion and accessories.
            The latest trends, timeless designs, and unmatched comfort — all in one place.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="p-2 transition-colors bg-gray-200 rounded-full hover:bg-black hover:text-white">
              <FaFacebookF size={13} />
            </a>
            <a href="#" className="p-2 transition-colors bg-gray-200 rounded-full hover:bg-black hover:text-white">
              <FaInstagram size={13} />
            </a>
            <a href="#" className="p-2 transition-colors bg-gray-200 rounded-full hover:bg-black hover:text-white">
              <FaTwitter size={13} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-gray-800">Company</h4>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer hover:text-black">Home</li>
            <li className="cursor-pointer hover:text-black">About Us</li>
            <li className="cursor-pointer hover:text-black">Delivery</li>
            <li className="cursor-pointer hover:text-black">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-gray-800">Get in Touch</h4>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black">+91 887‑987‑2312</li>
            <li className="hover:text-black">contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 text-xs text-center text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} forever.com — All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
