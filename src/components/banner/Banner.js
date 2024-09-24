import React from 'react'
import './Banner.css'

//importing react-icons
import { TiTick } from "react-icons/ti";
import { FaRegCirclePlay } from "react-icons/fa6";

//importing images
import tShirt from '../../assets/tshirt.jpeg'
import girlImg from '../../assets/girl.png'


const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='banner-content'>
        <div className='banner-title'>
          <h1>Create and sell</h1>
          <h1>custom Products</h1>
          <ul>
            <li><TiTick size={20}  color='green'/>100% Free to use</li>
            <li><TiTick size={20}  color='green'/>900+ High-Quality Products</li>
            <li><TiTick size={20}  color='green'/>Largest global print network</li>
          </ul>
          <div className='banner-btn'>
            <button className='banner-btn-green'>Start for free</button>
            <button><FaRegCirclePlay size={16}/>How it works ?</button>
          </div>
          <h3>Trusted by over 8M selfers around the world</h3>
        </div>
        <div className='banner-img'>
          <div className='img-container-1'>
            <img src={tShirt} alt='banner-img-1' className='t-img-1'/>
          </div>
          <div className='img-container-2'>
            <img src={girlImg} alt='banner-img-2' className='t-img-2'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
