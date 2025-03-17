import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './CSS/ShopCategory.css'

import Item from '../Components/Item/Item'
import { Link } from 'react-router-dom'

const ShopCategory = (props) => {
   const { all_product } = useContext(ShopContext)

   const [sortOrder, setSortOrder] = useState('')
   const [priceFilter, setPriceFilter] = useState('')

   const filteredProducts = all_product.filter((item) => {
      return (
         props.category === item.category &&
         (priceFilter ? item.new_price <= priceFilter : true)
      )
   })

   const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOrder === 'lowToHigh') return a.new_price - b.new_price
      if (sortOrder === 'highToLow') return b.new_price - a.new_price
      if (sortOrder === 'nameAZ') return a.name.localeCompare(b.name)
      if (sortOrder === 'nameZA') return b.name.localeCompare(a.name)
      return 0
   })

   return (
      <div className='shop-category'>
         <img className='shopCategory-banner' src={props.banner} alt='' />

         <div className='shopcategory-controls'>
            <div className='shopcategory-indexSort'>
               <p>
                  <span>Showing {sortedProducts.length}</span> products
               </p>

               <div className='shopcategory-sort'>
                  <label>Sort by:</label>
                  <select onChange={(e) => setSortOrder(e.target.value)}>
                     <option value=''>Default</option>
                     <option value='lowToHigh'>Price: Low to High</option>
                     <option value='highToLow'>Price: High to Low</option>
                     <option value='nameAZ'>Name: A-Z</option>
                     <option value='nameZA'>Name: Z-A</option>
                  </select>
               </div>

               <div className='shopcategory-filter'>
                  <label>Filter by Price:</label>
                  <select onChange={(e) => setPriceFilter(e.target.value)}>
                     <option value=''>All</option>
                     <option value='50'>$50 & Below</option>
                     <option value='100'>$100 & Below</option>
                     <option value='200'>$200 & Below</option>
                  </select>
               </div>
            </div>
         </div>

         <div className='shopcategory-products'>
            {sortedProducts.map((item, i) => (
               <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
               />
            ))}
         </div>

            {' '}
            <div className='shopcategory-loadmore'>Explore More</div>
         
      </div>
   )
}

export default ShopCategory
// import React, { useContext } from 'react'
// import { ShopContext } from '../Context/ShopContext';
// import './CSS/ShopCategory.css'
// import dropdown_icon from '../Components/Assets/Frontend_Assets/dropdown_icon.png'
// import Item from '../Components/Item/Item'

// const ShopCategory = (props) => {
//   const {all_product} = useContext(ShopContext);
//   return (
//     <div className='shop-category'>
//       <img className='shopCategory-banner' src={props.banner} alt=''/>
//       <div className="shopcategory-indexSort">
//         <p>
//           <span>Showing 1-12</span> out of 36 products
//         </p>
//         <div className="shopcategory-sort">
//           Sort by <img src={dropdown_icon} alt=""/>
//         </div>
//       </div>
//       <div className="shopcategory-products">
//         {all_product.map((item, i)=>{
//           if (props.category===item.category){
//             return ( <Item key={i} id={item.id} name={item.name}image={item.image}new_price={item.new_price}old_price={item.old_price}/>
//         );
//         }
//           else{
//             return null;
//           }
//         })}
//       </div>
//       <div className="shopcategory-loadmore">
//         Explore More
//       </div>
//     </div>
//   )
// }
// export default ShopCategory;
