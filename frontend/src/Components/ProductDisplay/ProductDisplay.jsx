// import React, { useContext, useState } from 'react';
// import './ProductDisplay.css';
// import star_icon from '../Assets/Frontend_Assets/star_icon.png';
// import star_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png';
// import { ShopContext } from '../../Context/ShopContext';
// import heartIcon from '../Assets/Frontend_Assets/wishlist_icon.png';
// import heartRedIcon from '../Assets/Frontend_Assets/wishlist_red_icon.png';

// // const ProductDisplay = ({ product }) => {
// //    const { addToCart, cartItems, wishlist, addToWishlist } = useContext(ShopContext);
// //    const [selectedSize, setSelectedSize] = useState(null);
// //    const wishlistArray = wishlist ? wishlist : []; // Ensure wishlist is an array

// //    const handleSizeSelect = (size) => {
// //       setSelectedSize(size);
// //    };

// //    const handleWishlistClick = (itemId) => {
// //       console.log(`Toggling wishlist for item: ${itemId}`);
// //       addToWishlist(itemId);
// //    };

// //    const isInCart = cartItems[product.id] > 0; // Check if the item is in the cart

// //    return (
// //       <div className='productdisplay'>
// //          <div className='product-left'>
// //             <div className='product-img-list'>
// //                <img src={product.image} alt='' />
// //                <img src={product.image} alt='' />
// //                <img src={product.image} alt='' />
// //                <img src={product.image} alt='' />
// //             </div>
// //             <div className='product-img'>
// //                <img className='product-main-img' src={product.image} alt='' />
// //             </div>
// //          </div>
// //          <div className='product-right'>
// //             <h1>{product.name}</h1>
// //             <div className='product-right-stars'>
// //                <img src={star_icon} alt='' />
// //                <img src={star_icon} alt='' />
// //                <img src={star_icon} alt='' />
// //                <img src={star_icon} alt='' />
// //                <img src={star_dull_icon} alt='' />
// //                <p>{product.ratings}</p>
// //             </div>
// //             <div className='product-right-prices'>
// //                <div className='product-right-oldprice'>${product.old_price}</div>
// //                <div className='product-right-newprice'>${product.new_price}</div>
// //             </div>
// //             <div className='product-right-description'>
// //                Stay cozy and stylish with our Ultimate Comfort Unisex dress,
// //                perfect for every wardrobe. Crafted from premium, ultra-soft
// //                cotton blend, this will ensure all-day comfort and durability.
// //                Its relaxed fit suits all body types, making it an essential
// //                piece for anyone, anywhere.
// //             </div>

// //             {/* Size Selection */}
// //             <div className='product-right-size'>
// //                <h1>Select size</h1>
// //                <div className='product-size'>
// //                   {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
// //                      <div
// //                         key={size}
// //                         className={`size-option ${selectedSize === size ? 'selected' : ''}`}
// //                         onClick={() => handleSizeSelect(size)}>
// //                         {size}
// //                      </div>
// //                   ))}
// //                </div>
// //                {selectedSize && <p>Selected Size: {selectedSize}</p>}
// //             </div>

// //             {/* Cart and Wishlist Actions */}
// //             <div className='product-right-actions'>
// //                <button
// //                   onClick={() => {
// //                      if (selectedSize) {
// //                         addToCart(product.id, selectedSize);
// //                      } else {
// //                         alert('Please select a size before adding to cart!');
// //                      }
// //                   }}>
// //                   {isInCart ? 'In Cart' : 'Add to Cart'}
// //                </button>

// //                <img
// //                   src={wishlistArray.includes(product.id) ? heartRedIcon : heartIcon}
// //                   alt='Wishlist'
// //                   className='wishlist-icon'
// //                   onClick={() => handleWishlistClick(product.id)}
// //                />
// //             </div>

// //             <p className='product-right-category'>
// //                <span>Category: </span>Unisex: T-shirt, Sweatshirt
// //             </p>
// //             <p className='product-right-category'>
// //                <span>Tags: </span>Modern, Latest, Casualwear
// //             </p>
// //          </div>
// //       </div>
// //    );
// // };

// // export default ProductDisplay;
import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/Frontend_Assets/star_icon.png';
import star_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import heartIcon from '../Assets/Frontend_Assets/wishlist_icon.png';
import heartRedIcon from '../Assets/Frontend_Assets/wishlist_red_icon.png';

const ProductDisplay = ({ product }) => {
   const { addToCart, cartItems, wishlist, addToWishlist } = useContext(ShopContext);
   const [selectedSize, setSelectedSize] = useState(null);

   // Ensure wishlist is an array
   const wishlistArray = wishlist ? wishlist : [];

   // Handle size selection
   const handleSizeSelect = (size) => {
      setSelectedSize(size);
   };

   // Handle wishlist toggle
   const handleWishlistClick = (itemId) => {
      console.log(`Toggling wishlist for item: ${itemId}`);
      addToWishlist(itemId);
   };

   // Check if the product is in the cart
   const isInCart = product?.id && cartItems[product.id] > 0;

   // Prevent rendering if product is undefined
   if (!product) {
      return <p>Loading product details...</p>;
   }

   return (
      <div className='productdisplay'>
         {/* Left Side - Product Images */}
         <div className='product-left'>
            <div className='product-img-list'>
               {[...Array(4)].map((_, index) => (
                  <img key={index} src={product.image} alt={product.name || 'Product'} />
               ))}
            </div>
            <div className='product-img'>
               <img className='product-main-img' src={product.image} alt={product.name || 'Product'} />
            </div>
         </div>

         {/* Right Side - Product Details */}
         <div className='product-right'>
            <h1>{product.name || 'No Product Name'}</h1>
            
            {/* Star Ratings */}
            <div className='product-right-stars'>
               {[...Array(4)].map((_, i) => <img key={i} src={star_icon} alt="Star" />)}
               <img src={star_dull_icon} alt="Dull Star" />
               <p>{product.ratings || 123 }</p>
            </div>

            {/* Price Section */}
            <div className='product-right-prices'>
               <div className='product-right-oldprice'>${product.old_price || 'N/A'}</div>
               <div className='product-right-newprice'>${product.new_price || 'N/A'}</div>
            </div>

            {/* Product Description */}
            <div className='product-right-description'>
               Stay cozy and stylish with our Ultimate Comfort Unisex dress, 
               perfect for every wardrobe. Crafted from premium, ultra-soft cotton blend, 
               ensuring all-day comfort and durability.
            </div>

            {/* Size Selection */}
            <div className='product-right-size'>
               <h1>Select Size</h1>
               <div className='product-size'>
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                     <div
                        key={size}
                        className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                        onClick={() => handleSizeSelect(size)}>
                        {size}
                     </div>
                  ))}
               </div>
               {selectedSize && <p>Selected Size: {selectedSize}</p>}
            </div>

            {/* Cart and Wishlist Actions */}
            <div className='product-right-actions'>
               <button
                  onClick={() => {
                     if (selectedSize) {
                        addToCart(product.id, selectedSize);
                     } else {
                        alert('Please select a size before adding to cart!');
                     }
                  }}>
                  {isInCart ? 'In Cart' : 'Add to Cart'}
               </button>

               <img
                  src={wishlistArray.includes(product.id) ? heartRedIcon : heartIcon}
                  alt='Wishlist'
                  className='wishlist-icon'
                  onClick={() => handleWishlistClick(product.id)}
               />
            </div>

            {/* Category and Tags */}
            <p className='product-right-category'><span>Category: </span>Unisex: T-shirt, Sweatshirt</p>
            <p className='product-right-category'><span>Tags: </span>Modern, Latest, Casualwear</p>
         </div>
      </div>
   );
};

export default ProductDisplay;
