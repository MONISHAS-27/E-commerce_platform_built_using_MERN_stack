import React from 'react'
import './Hero.css'
import shop1 from '../Assets/Frontend_Assets/shop4.png'
import arrow_icon from '../Assets/Frontend_Assets/arrow.png'
import hero_image from '../Assets/Frontend_Assets/hero_image.png'
import { Link } from 'react-router-dom'
 const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h1>Spend Minimum, take Maximum!!! </h1>
            <div>
                <div className="hero-shop">
                    <p>new</p>
                    <img src={shop1} alt=""/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest collections</div>
                
                <Link to='/mens'><img src={arrow_icon} alt=""/></Link>
            </div>

        </div>
        <div className="hero-right">
            <img src={hero_image} alt=""/>

        </div>
    </div>
  )
}
export default Hero