import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
// import { useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';

function FoodItem({id,name,price,description,image}) {
    const {cartItems,addTocart,removeFromCart} = useContext(StoreContext);
    return (
    <div className='food-item'>
    <div className="food-item-img-container">
         <img className="food-item-image" src={image} alt=""/>
         {!cartItems[id]
         ?<img className='add' onClick={()=>addTocart(id)} src={assets.add_icon_white} alt="" />
         :<div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addTocart(id)} src={assets.add_icon_green} alt="" className="" />
         </div>

         }
    </div>
    <div className="food-itme-info">
       <div className='food-item-name-rating'>
       <p>{name}</p>
        <img src={assets.rating_starts} alt="" className="" />
    </div>
    <p className="food-item-desc">{description}</p>
    <p className="food-item-price">${price}</p>
       </div>
    </div>
    
  )
}

export default FoodItem
