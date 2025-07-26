import React from 'react';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5 py-8 px-4 sm:px-6 lg:px-8" id="explore-menu">
      <h1 className="text-gray-900 text-3xl sm:text-4xl font-medium">Explore Our Menu</h1>
      <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. One delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-6 my-5 overflow-x-auto scrollbar-hide">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-20 sm:w-24 min-w-[80px] rounded-full transition-all duration-200 ${
                category === item.menu_name ? 'border-4 border-brand-red p-0.5' : ''
              }`}
            />
            <p className="mt-2 text-gray-600 text-base sm:text-lg font-medium">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="my-3 h-0.5 bg-gray-200 border-none" />
    </div>
  );
};

export default ExploreMenu;
