import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/Frontend_Assets/cart_cross_icon.png'

const CartItems = () => {
   const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
      useContext(ShopContext)
   console.log(getTotalCartAmount)
   return (
      <div className='cartItems'>
         <div className='cartItems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
         </div>
         <hr />
         {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
               return (
                  <div key={e.id}>
                     {/* <p>Size: {cartItems.size}</p> */}
                     <div className='cartItems-format cartItems-format-main'>
                        <img
                           src={e.image}
                           alt=''
                           className='cartItems-product-icon'
                           
                        />
                        <p>{e.name}</p>
                        <p>$ {e.new_price}</p>
                        <button className='cartItems-quantity'>
                           {cartItems[e.id]}
                        </button>
                        <p>$ {e.new_price * cartItems[e.id]}</p>
                        <img
                           className='cartItems-remove-icon'
                           src={remove_icon}
                           alt='remove'
                           onClick={() => {
                              removeFromCart(e.id)
                           }}
                        />
                     </div>
                     <hr />
                  </div>
               )
            }
            return null
         })}
         <div className='cartItems-down'>
            <div className='cartItems-total'>
               <h1>Cart Total</h1>
               <div>
                  <div className='cartItems-total-item'>
                     <p>SubTotal</p>
                     <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className='cartItems-total-item'>
                     <p>Shipping Fee</p>
                     <p>Free</p>
                  </div>
                  <hr />
                  <div className='cartItems-total-item'>
                     <h3>Total</h3>
                     <h3>${getTotalCartAmount()}</h3>
                  </div>
               </div>
               <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cartItems-promocode'>
               <p>If you have a promo code, Enter it here</p>
               <div className='cartItems-promobox'>
                  <input type='text' placeholder='promo code' />
                  <button>Submit</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CartItems;