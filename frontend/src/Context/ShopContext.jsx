import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
   let cart = {};
   for (let i = 0; i < 300 + 1; i++) {
      cart[i] = 0;
   }
   return cart;
};

const getDefaultWishlist = () => {
   return []; // ✅ Ensure wishlist is always an array
};

const ShopContextProvider = (props) => {
   const [all_product, setAll_product] = useState([]);
   const [cartItems, setCartItems] = useState(getDefaultCart());
   const [wishlist, setWishlist] = useState(getDefaultWishlist());
   const [products, setProducts] = useState([]);

console.log(21, 'moni');

   useEffect(() => {
      // fetch("http://localhost:4000/allproducts")
      //    .then((response) => response.json())
      //    .then((data) => setAll_product(data));
      fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => {
         console.log("All Products:", data); // Debugging
         setAll_product(data);
      })
      .catch((error) => console.error("Error fetching products:", error));


      fetch("http://localhost:4000/popularinwomen")
      .then((res) => res.json())
      .then((data) => {
         console.log("Popular in Women:", data); // Debugging
  
         if (Array.isArray(data) && data.length > 0) {
            setProducts(data);
         } else {
            console.error("Error: Received invalid data", data);
            setProducts([]); // Prevents errors
         }
      })
      .catch((error) => {
         console.error("Error fetching data:", error);
         setProducts([]); // Handle API failure gracefully
      });


      if (localStorage.getItem("auth-token")) {
         fetch("http://localhost:4000/getcart", {
            method: "POST",
            headers: {
               Accept: "application/json",
               "auth-token": `${localStorage.getItem("auth-token")}`,
               "Content-Type": "application/json",
            },
         })
            .then((response) => response.json())
            .then((data) => setCartItems(data));
      }

      if (localStorage.getItem("auth-token")) {
         fetch("http://localhost:4000/getwishlist", {
            method: "POST",
            headers: {
               Accept: "application/json",
               "auth-token": `${localStorage.getItem("auth-token")}`,
               "Content-Type": "application/json",
            },
         })
            .then((response) => response.json())
            .then((data) => {
               if (data.success && Array.isArray(data.wishList)) {
                  setWishlist(data.wishList); // ✅ Ensure it's an array
               } else {
                  setWishlist([]); // Reset to empty array if invalid
               }
            })
            .catch((error) =>
               console.error("Error fetching wishlist:", error)
            );
      }else{
         setWishlist([]);
      }
   }, []);

   const addToCart = (itemId, size) => {
      setCartItems((prev) => ({
         ...prev,
         [itemId]: prev[itemId] + 1,
         size: size,
      }));
      if (localStorage.getItem("auth-token")) {
         fetch("http://localhost:4000/addtocart", {
            method: "POST",
            headers: {
               Accept: "application/json",
               "auth-token": `${localStorage.getItem("auth-token")}`,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ itemId: itemId }),
         });
      }
   };

   const removeFromCart = (itemId) => {
      setCartItems((prev) => ({
         ...prev,
         [itemId]: prev[itemId] - 1,
      }));
      if (localStorage.getItem("auth-token")) {
         fetch("http://localhost:4000/removefromcart", {
            method: "POST",
            headers: {
               Accept: "application/json",
               "auth-token": `${localStorage.getItem("auth-token")}`,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ itemId: itemId }),
         });
      }
   };


   // const addToWishlist = (itemId) => {
   //    let updatedWishlist = [...wishlist];

   //    if (updatedWishlist.includes(itemId)) {
   //       updatedWishlist = updatedWishlist.filter((id) => id !== itemId);
   //       fetch("http://localhost:4000/removefromwishlist", {
   //          method: "POST",
   //          headers: {
   //             Accept: "application/json",
   //             "auth-token": `${localStorage.getItem("auth-token")}`,
   //             "Content-Type": "application/json",
   //          },
   //          body: JSON.stringify({ itemId }),
   //       });
   //    } else {
   //       updatedWishlist.push(itemId);
   //       fetch("http://localhost:4000/addtowishlist", {
   //          method: "POST",
   //          headers: {
   //             Accept: "application/json",
   //             "auth-token": `${localStorage.getItem("auth-token")}`,
   //             "Content-Type": "application/json",
   //          },
   //          body: JSON.stringify({ itemId }),
   //       });
   //    }

   //    setWishlist(updatedWishlist);
   // };
   const addToWishlist = (itemId) => {
      setWishlist((prevWishlist) => {
         let updatedWishlist;
   
         if (prevWishlist.includes(itemId)) {
            updatedWishlist = prevWishlist.filter((id) => id !== itemId);
            fetch("http://localhost:4000/removefromwishlist", {
               method: "POST",
               headers: {
                  Accept: "application/json",
                  "auth-token": `${localStorage.getItem("auth-token")}`,
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ itemId }),
            });
         } else {
            updatedWishlist = [...prevWishlist, itemId];
            fetch("http://localhost:4000/addtowishlist", {
               method: "POST",
               headers: {
                  Accept: "application/json",
                  "auth-token": `${localStorage.getItem("auth-token")}`,
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ itemId }),
            });
         }
   
         return updatedWishlist; 
      });
   };
   

   const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            let itemInfo = all_product.find(
               (product) => product.id === Number(item)
            );
            totalAmount += itemInfo.new_price * cartItems[item];
         }
      }
      return totalAmount;
   };

   const getTotalCartItems = () => {
      let totalItem = 0;
      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            totalItem += cartItems[item];
         }
      }
      return totalItem;
   };

   // ✅ Declare `contextValue` only once!
   const contextValue = {
      all_product,
      cartItems,
      products,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
      getTotalCartItems,
      wishlist, // ✅ Ensure wishlist is included
      addToWishlist,
   };

   return (
      <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>
   );
};

export default ShopContextProvider;
