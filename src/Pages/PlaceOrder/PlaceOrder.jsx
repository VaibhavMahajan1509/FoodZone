import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <form className='flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 mt-12 md:mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <div className="w-full max-w-full md:max-w-[max(30%,500px)]">
        <p className="text-2xl sm:text-3xl font-semibold mb-8 md:mb-12">Delivery Information</p>
        <div className='flex flex-col sm:flex-row gap-2.5'>
          <input 
            type="text" 
            placeholder='First Name' 
            required 
            className='mb-3 sm:mb-4 w-full p-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500' 
          />
          <input 
            type="text" 
            placeholder='Last Name' 
            required 
            className='mb-3 sm:mb-4 w-full p-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500' 
          />
        </div>
        <input 
          type="email" 
          placeholder='Email Address' 
          required 
          className='mb-3 sm:mb-4 w-full p-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500' 
        />
        <input 
          type="text" 
          placeholder='Street' 
          required 
          className='mb-3 sm:mb-4 w-full p-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500' 
        />
        <div className='flex flex-col sm:flex-row gap-2.5'>
          <input 
            type="text" 
            placeholder='City' 
            required 
            className='mb-3 sm:mb-4 w-full p-2.5 border border-gray-300 Horizonte
            focus:ring-2 focus:ring-red-500' 
          />
          <input 
            type="text" 
            placeholder='State' 
            required 
            className='mb-3 sm:mb-4 w-full p-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500' 
          />
        </div>
        <div className='flex flex-col sm:flex-row gap-2.5'>
          <input 
            type="text" 
            placeholder='Zip code' 
            required 
            className='mb-3 sm:mb-4 w-full p-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500' 
          />
          <input 
            type="text" 
            placeholder='Country' 
            required 
            className='mb-3 sm:mb-4 w-full p-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500' 
          />
        </div>
        <input 
          type="text" 
          placeholder='Phone' 
          required 
          className='mb-3 sm:mb-4 w-full p-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500' 
        />
      </div>
      <div className="w-full max-w-full md:max-w-[max(40%,500px)]">
        <div className="cart-total">
          <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-gray-600 mb-2">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2 border-gray-300' />
            <div className="flex justify-between text-gray-600 mb-2">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-2 border-gray-300' />
            <div className="flex justify-between text-gray-600">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button className='mt-6 md:mt-8 w-full sm:w-[max(15vw,200px)] py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors'>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
