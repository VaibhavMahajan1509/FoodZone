import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="space-y-4">
          <img src={assets.logo1} alt="Food Zone Logo" className="w-40 h-auto" />
          <p className="text-sm text-gray-400 max-w-md">
            Discover delicious meals from your favorite restaurants, delivered fast and fresh to your door. Order now with FoodZone!
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook">
              <img
                src={assets.facebook_icon}
                alt="Facebook"
                className="w-9 h-9 p-2 rounded-full hover:bg-brand-red transition-all duration-300 hover:scale-110"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src={assets.twitter_icon}
                alt="Twitter"
                className="w-9 h-9 p-2 rounded-full hover:bg-brand-red transition-all duration-300 hover:scale-110"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src={assets.linkedin_icon}
                alt="LinkedIn"
                className="w-9 h-9 p-2 rounded-full hover:bg-brand-red transition-all duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Delivery</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-2">
            <li><a href="tel:+6267090692" className="hover:text-brand-red transition-colors">+91 6267090692</a></li>
            <li><a href="mailto:VMbites@gmail.com" className="hover:text-brand-red transition-colors">VMbites1509@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <p className="text-center text-sm text-gray-400">
        Copyright 2025 © FoodZone.com - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;