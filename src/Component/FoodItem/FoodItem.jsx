import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className='w-full mx-auto rounded-2xl shadow-md transition duration-300 animate-fadeIn'>
      <div className="relative">
        <img className="w-full rounded-t-2xl" src={image} alt={name} />
        {!cartItems[id] ? (
          <img 
            className='w-[35px] absolute bottom-4 right-4 cursor-pointer rounded-full' 
            onClick={() => addToCart(id)} 
            src={assets.add_icon_white} 
            alt="Add to cart" 
          />
        ) : (
          <div className='absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5 bg-white rounded-full'>
            <img 
              onClick={() => removeFromCart(id)} 
              src={assets.remove_icon_red} 
              alt="Remove from cart" 
              className="w-[30px]" 
            />
            <p>{cartItems[id]}</p>
            <img 
              onClick={() => addToCart(id)} 
              src={assets.add_icon_green} 
              alt="Add to cart" 
              className="w-[30px]" 
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className='flex justify-between items-center mb-2.5'>
          <p className="text-xl font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="Rating" className="w-[70px]" />
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-red-500 text-xl font-medium my-2.5">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
