import React, { useContext, useState, useEffect } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext)
  const navigate = useNavigate();

  // Check if cart is empty
  const isCartEmpty = !Object.values(cartItems).some(quantity => quantity > 0);

  // Prevent scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0); // Optional: Always start at top of cart page
  }, []);

  return (
    <div className='mt-24 min-h-screen'>
      <div className="cart-items">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p> 
          <p>Title</p>  
          <p>Price</p>  
          <p>Quantity</p>  
          <p>Total</p>  
          <p>Remove</p>   
        </div> 
        <br />
        <hr className='h-px bg-gray-200 border-none' />
        {isCartEmpty ? (
          <div className="my-10 text-center text-gray-600 text-lg">
            <p>Your cart is empty. Add some items to get started!</p>
            <button 
              onClick={() => navigate('/')} 
              className='mt-4 border-none text-white bg-red-500 py-2 px-4 rounded-md cursor-pointer'
            >
              Browse Menu
            </button>
          </div>
        ) : (
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-2 text-black'>
                    <img src={item.image} alt="" className='w-[50px]' />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>x</p>
                  </div>
                  <hr className='h-px bg-gray-200 border-none' />
                </div>
              )
            }
            return null;
          })
        )}
      </div>  
      <div className="mt-20 flex flex-col-reverse md:flex-row justify-between gap-[max(12vw,20px)]">
        <div className="flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2' />
            <div className="flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-2' />
            <div className="flex justify-between text-gray-600">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/order')} 
            className='border-none text-white bg-red-500 w-[max(15vw,200px)] py-3 rounded-md cursor-pointer'
            disabled={isCartEmpty}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>  
        <div className="flex-1">
          <div>
            <p className='text-gray-600'>If you have a promo code, Enter it here</p>
            <div className="mt-2 flex justify-between items-center bg-gray-200 rounded-md">
              <input 
                type="text" 
                placeholder='promo code' 
                className='bg-transparent border-none outline-none pl-2' 
              />
              <button 
                className='w-[max(10vw,150px)] py-3 bg-black text-white rounded-md'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Cart
