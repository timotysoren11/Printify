import React from 'react'
import './Ecommerce.css'

//importing brands
import { TbBrandWix } from "react-icons/tb";
import { SiWoo } from "react-icons/si";
import { FaSquarespace } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { SiBigcommerce } from "react-icons/si";
import { SiPrestashop } from "react-icons/si";

//importing images
import logoBtn from '../../assets/logo-btn.png'

const Ecommerce = () => {
  return (
    <div className='e-container'>
      <div className='e-title'>
        <h1>Connect your store</h1>
        <p>Printify easily integrates with major e-commerce platforms and market place</p>
      </div>
      <div className='e-platforms'>
        <div className='e-platform-btns'>
          <button className='btn-1-big'><SiBigcommerce size={80}/></button>
          <button className='btn-2-square'><FaSquarespace size={80}/></button>
          <button className='btn-3-wix'><TbBrandWix size={80}/></button>
          <button className='btn-4-presta'><SiPrestashop size={80} color='blue'/></button>
          <button className='btn-5'><img src={logoBtn} alt='logo-btn' /></button>
          <button className='btn-6-woo'><SiWoo size={45} color='purple'/></button>
          <button className='btn-7-api'>API</button>
          <button className='btn-8-more'>And more</button>
          <button className='btn-9-shopify'><SiShopify size={80} color='green'/></button>
          <button className='btn-10-esty'>Etsy</button>
        </div>
      </div>
      
    </div>
  )
}

export default Ecommerce
