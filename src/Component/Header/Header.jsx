import React from 'react';
import headerImage from '../../assets/header_img.webp';

const Header = () => {
  return (
    <div className="relative h-[34vw] mx-auto mt-[30px]" id="header">
      <img
        src={headerImage}
        alt="Header"
        className="w-full h-full object-contain"
        loading="eager" // loads immediately
      />
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-[fadeIn_3s] md:max-w-[45%] lg:max-w-[65%]">
        <h2 className="text-white text-[max(4.5vw,22px)] font-semibold">
          Order your favourite food here
        </h2>
        <p className="text-white text-[max(1vw,12px)] max-w-[80%] hidden lg:block">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. One delicious meal at a time
        </p>
        <button className="bg-white text-gray-600 font-medium px-[2.3vw] py-[1vw] rounded-[50px] text-[max(1vw,13px)] hover:bg-brand-red hover:text-white transition-colors duration-300 cursor-pointer lg:px-[4vw] lg:py-[2vw]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;


