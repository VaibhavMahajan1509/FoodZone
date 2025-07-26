import React from 'react';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className="text-center mt-24 py-8 px-4 sm:px-6 lg:px-8" id="app-download">
      <p className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
        For Better Experience Download <br /> FoodZone App
      </p>
      <div className="flex justify-center gap-4 sm:gap-8 mt-10">
        <img
          src={assets.play_store}
          alt="Download from Google Play"
          className="w-32 sm:w-40 max-w-44 h-auto cursor-pointer hover:scale-105 transition-transform duration-500 m-2"
        />
        <img
          src={assets.app_store}
          alt="Download from App Store"
          className="w-32 sm:w-40 max-w-44 h-auto cursor-pointer hover:scale-105 transition-transform duration-500 m-2"
        />
      </div>
    </div>
  );
};

export default AppDownload;