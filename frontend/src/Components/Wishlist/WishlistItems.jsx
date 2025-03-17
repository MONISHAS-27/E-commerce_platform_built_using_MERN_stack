import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import heartRedIcon from '../Assets/Frontend_Assets/wishlist_red_icon.png';
import './WishlistItem.css';

const WishlistItems = () => {
   const { all_product, wishlist, addToWishlist, addToCart, cartItems } = useContext(ShopContext);

   const wishlistArray = Array.isArray(wishlist) ? wishlist : [];

   return (
      <div className="wishlistItems">
         <h2>Your Wishlist</h2>
         <div className="wishlist-list">
            {wishlistArray.length > 0 ? (
               wishlistArray.map((productId) => {
                  const product = all_product.find((item) => item.id === productId);
                  if (!product) return null;

                  const isInCart = cartItems[product.id] > 0; // Check if the item is in the cart

                  return (
                     <div key={product.id} className="wishlist-item">
                        <img src={product.image} alt={product.name} className="wishlist-product-image" />
                        <p>{product.name}</p>
                        <p>${product.new_price}</p>
                        <button onClick={() => {
                           addToCart(product.id); // Add to cart
                        }}>
                           {isInCart ? 'In Cart' : 'Add to Cart'}
                        </button>
                        <img
                           src={heartRedIcon}
                           alt="Remove from Wishlist"
                           className="wishlist-remove-icon"
                           onClick={() => addToWishlist(product.id)}
                        />
                     </div>
                  );
               })
            ) : (
               <p>Your wishlist is empty.</p>
            )}
         </div>
      </div>
   );
};

export default WishlistItems;// import React, { useContext } from 'react';
// import { ShopContext } from '../../Context/ShopContext';
// import heartRedIcon from '../Assets/Frontend_Assets/wishlist_red_icon.png';
// import './WishlistItem.css';

// const WishlistItems = () => {
//    const { all_product, wishlist, addToWishlist, addToCart } = useContext(ShopContext);

//    const wishlistArray = Array.isArray(wishlist) ? wishlist : [];

//    return (
//       <div className="wishlistItems">
//          <h2>Your Wishlist</h2>
//          <div className="wishlist-list">
//             {wishlistArray.length > 0 ? (
//                wishlistArray.map((productId) => {
//                   const product = all_product.find((item) => item.id === productId);
//                   if (!product) return null;

//                   return (
//                      <div key={product.id} className="wishlist-item">
//                         <img src={product.image} alt={product.name} className="wishlist-product-image" />
//                         <p>{product.name}</p>
//                         <p>${product.new_price}</p>
//                         <button onClick={() => addToCart(product.id)}>Add to Cart</button>
//                         <img
//                            src={heartRedIcon}
//                            alt="Remove from Wishlist"
//                            className="wishlist-remove-icon"
//                            onClick={() => addToWishlist(product.id)}
//                         />
//                      </div>
//                   );
//                })
//             ) : (
//                <p>Your wishlist is empty.</p>
//             )}
//          </div>
//       </div>
//    );
// };

// export default WishlistItems;
