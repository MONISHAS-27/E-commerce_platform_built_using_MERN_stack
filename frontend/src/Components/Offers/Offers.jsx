import React from 'react'
import './Offers.css'
import dress1 from '../Assets/Frontend_Assets/dresses1.png'
import { Link } from 'react-router-dom'
const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button><Link style={{ textDecoration: 'none' , color: 'white'}} to='/womens'>Check Now</Link></button>
        </div>
        <div className="offers-right">
            <img src={dress1} alt=""/>
        </div>
    </div>
  )
}
export default Offers