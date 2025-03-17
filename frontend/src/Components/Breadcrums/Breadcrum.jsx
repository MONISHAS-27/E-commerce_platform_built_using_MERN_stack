// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Breadcrum.css';
// import arrow_icon from '../Assets/Frontend_Assets/breadcrum_arrow.png';

// const Breadcrum = ({ product }) => {
//     // Debugging: Log the product to check its value
//     console.log('Product in Breadcrum:', product);

//     return (
//         <div className="breadcrum">
//             <Link className="breadcrum-link" to="/">HOME</Link>
//             <img src={arrow_icon} alt="Arrow" />

//             <Link className="breadcrum-link" to="/shop">SHOP</Link>
//             <img src={arrow_icon} alt="Arrow" />

//             {/* Show category if product exists */}
//             {product?.category ? (
//                 <>
//                     <Link className="breadcrum-link" to={`/shop/${product.category.toLowerCase()}`}>
//                         {product.category}
//                     </Link>
//                     <img src={arrow_icon} alt="Arrow" />
//                     <span>{product.name || 'Product'}</span>
//                 </>
//             ) : (
//                 <span>Loading...</span> // Fallback UI while loading
//             )}
//         </div>
//     );
// };

// export default Breadcrum;
// // import React from 'react';
// // import './Breadcrum.css';
// // import arrow_icon from '../Assets/Frontend_Assets/breadcrum_arrow.png';
// // import { Link } from 'react-router-dom';

// // const Breadcrum = (props) => {
// //     const { product } = props;

// //     // Debugging: Log the product to see its value
// //     console.log('Product in Breadcrum:', product);

// //     return (
// //         <div className="breadcrum">
// //             <Link style={{ textDecoration: 'none' }} to='/'>HOME</Link>
// //             <img src={arrow_icon} alt="" />
// //             <Link style={{ textDecoration: 'none' }} to='/'>SHOP</Link>
// //             <img src={arrow_icon} alt="" />
// //             {product ? (
// //                 <>
// //                     <Link style={{ textDecoration: 'none' }} to='/'>{product.category}</Link>
// //                     <img src={arrow_icon} alt="" />
// //                     {product.name}
// //                 </>
// //             ) : (
// //                 <span>Loading...</span> // Fallback UI while loading
// //             )}
// //         </div>
// //     );
// // };

// export default Breadcrum;
import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/Frontend_Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom';



const Breadcrum = (props) => {
    const {product} = props;
    console.log(props);
  return (
    <div className="breadcrum">
       
                <Link style={{ textDecoration: 'none' }} to='/'>HOME</Link> <img src={arrow_icon} alt=""/>  <Link style={{ textDecoration: 'none' }} to='/'>SHOP</Link> <img src={arrow_icon} alt=""/>{" "} {product.category}<img src={arrow_icon} alt=""/> {product.name}
    </div>
  );
};
export default Breadcrum;