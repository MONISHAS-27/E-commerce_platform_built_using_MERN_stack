import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
   const { all_product } = useContext(ShopContext);
   const { productId } = useParams();

   console.log("All products:", all_product); // Debugging
   console.log("Product ID from URL:", productId);

   if (!all_product || all_product.length === 0) {
      return <div>Loading...</div>; // Show a loader until products are fetched
   }

   const product = all_product.find((e) => e.id === Number(productId));

   if (!product) {
      console.error("Product not found with ID:", productId);
      return <div>Product not found</div>;
   }

   return (
      <div>
         <Breadcrum product={product} />
         <ProductDisplay product={product} />
         <DescriptionBox />
         <RelatedProducts />
      </div>
   );
};

export default Product;
// import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import Breadcrum from '../Components/Breadcrums/Breadcrum'
// import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
// import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
// import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
// import { ShopContext } from '../Context/ShopContext'


// const Product = () => {
//    const { all_product } = useContext(ShopContext);
// const { productId } = useParams();

// if (!all_product || all_product.length === 0) {
//    return <div>Loading...</div>; // Show a loader or fallback UI
// }

// const product = all_product.find((e) => e.id === Number(productId));

// if (!product) {
//    return <div>Product not found</div>; // Handle invalid product ID gracefully
// }

// return (
//    <div>
//       <Breadcrum product={product} />
//       <ProductDisplay product={product} />
//       <DescriptionBox />
//       <RelatedProducts />
//    </div>
// );

   // const { all_product } = useContext(ShopContext)

   // const { productId } = useParams()
   // const product = all_product.find((e) => e.id === Number(productId))
   // console.log(product, productId, all_product)
   // return (
   //    <div>
   //       <Breadcrum product={product} />
   //       <ProductDisplay product={product} />
   //       <DescriptionBox/>
   //       <RelatedProducts />
   //    </div>
   // )

