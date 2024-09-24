import React from 'react'
import './Features.css'

//importing images
import proFit from '../../assets/profit.png'
import scaleIng from '../../assets/scale.png'
import selcTion from '../../assets/selection.png'


const Features = () => {
  return (
    <div className='feature-container'>
      <div className='features'>
        <div className='profits'>
          <img src={proFit} alt='profit' className='feature-img'/>
          <h1>Higher Profits</h1>
          <p>We offer some of the lowest prices in the industry because print providers continously compete to win your buisness.</p>
        </div>
        <div className='scaling'>
          <img src= {scaleIng} alt='scaling' className='feature-img'/>
          <h1>Robust Scaling</h1>
          <p>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
        </div>
        <div className='selection'>
          <img src={selcTion} alt='selection' className='feature-img'/>
          <h1>Best Selection</h1>
          <p>With 900+ products and top quality brands, you can choose the best products for your business.</p>
        </div>
      </div>
    </div>
  )
}

export default Features
