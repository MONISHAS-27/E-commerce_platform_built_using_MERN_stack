import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo2 from '../Assets/Frontend_Assets/logo4.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import wishlist1_icon from '../Assets/Frontend_Assets/wishlist_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png'

const Navbar = () => {

  let [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='nav'>
      <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo2} alt="logo" />
        <p>LikeMart</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to='/fav'><img className='nav-fav' src={wishlist1_icon} alt='' /></Link>
        <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar

// const Navbar = () => {
//    const [menu, setMenu] = useState('shop')
//    const { getTotalCartItems } = useContext(ShopContext)
//    return (
//       <div className='navbar'>
//          <div className='nav-logo'>
//             <img src={logo2} alt='' />
//             <p>LikeMart</p>
//          </div>
//          <div>
//             <ul className='nav-menu'>
//                <li
//                   onClick={() => {
//                      setMenu('shop')
//                   }}>
//                   <Link style={{ textDecoration: 'none' }} to='/'>
//                      Shop
//                   </Link>
//                   {menu === 'shop' ? <hr /> : <></>}
//                </li>
//                <li
//                   onClick={() => {
//                      setMenu('mens')
//                   }}>
//                   <Link style={{ textDecoration: 'none' }} to='/mens'>
//                      Men
//                   </Link>
//                   {menu === 'mens' ? <hr /> : <></>}
//                </li>
//                <li
//                   onClick={() => {
//                      setMenu('womens')
//                   }}>
//                   <Link style={{ textDecoration: 'none' }} to='/womens'>
//                      Women
//                   </Link>
//                   {menu === 'womens' ? <hr /> : <></>}
//                </li>
//                <li
//                   onClick={() => {
//                      setMenu('kids')
//                   }}>
//                   <Link style={{ textDecoration: 'none' }} to='/kids'>
//                      Kids
//                   </Link>
//                   {menu === 'kids' ? <hr /> : <></>}
//                </li>
//             </ul>
//          </div>
//          <div className='nav-login-cart'>
//             {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
//             <Link to='/login'>
//                <button>Login</button>
//             </Link>}
//             <Link to='/cart'>
//                <img src={cart_icon} alt='' />
//             </Link>
//             <div className='nav-cart-count'>{getTotalCartItems()}</div>
            // <Link to='/fav'>
            //    <img className='nav-fav' src={wishlist1_icon} alt='' />
            // </Link>
//          </div>
//       </div>
//    )
// }
// export default Navbar