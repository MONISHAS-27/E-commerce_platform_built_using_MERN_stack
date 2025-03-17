import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data to check its structure
        setPopularProducts(data);
      })
      .catch((error) => console.error('Error fetching popular products:', error));
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">

        {popularProducts.map((item, i) => {
          console.log(item)
    

          return (
            <Item
              key={i}
              id={item.id} // Pass the entire item object
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;// import React, { useEffect, useState } from 'react'
// import './Popular.css'
// import Item from '../Item/Item'

// const Popular = () => {
//   const [popularProducts, setPopularProducts] = useState([]);
  
//   useEffect(()=>{
//     fetch('http://localhost:4000/popularinwomen')
//     .then((response)=>response.json())
//     .then((data)=>setPopularProducts(data));
//   },[])
//   return (
//    <div className="popular">
//     <h1>POPULAR IN WOMEN</h1>
//     <hr/>
//     <div className="popular-item">
//         {popularProducts.map((item,i) =>{
//             return <Item key={i} item={item.id} name={item.name}image={item.image}new_price={item.new_price}old_price={item.old_price}/>
//             })}
//     </div>
//    </div>
//   )
// }
// export default Popular