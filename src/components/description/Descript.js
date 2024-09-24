import React from 'react'
import './Descript.css'

//importing images
import descripTion from '../../assets/description.jpeg'
import tshirt from '../../assets/tshirt.jpeg'
import customProducts from '../../assets/t-1.png'
import sellTerms from '../../assets/t-2.png'
import handleFul from '../../assets/t-3.png'

const Descript = () => {
  return (
    <div className='descript-container'>

      <div className='descript-content'>
        <div className='desc-img-container'> 
          <img src={descripTion} alt='desc-img'/>
        </div>
        <div className='desc-content'>
          <h1>Easily add your design to a</h1>
          <h1>wide range of products</h1>
          <p>with our free design tools, you can easily add your custom design to t-shirts, mugs, phone cases, and hundereds of other products</p>
          <button className='products'>All products</button>
        </div>
      </div>
      
      <div className='edit-img'>
        <div className='edit-btn-container'>
          <button className='edit-btn'>Edit</button>
          <button className='edit-btn'>Preview</button>
        </div>
          <img src={tshirt} alt='prev-img' className='prev-img'/>
          <button className='prev-btn'>.......</button>
      </div>

      <div className='swipper-container'>
        <div className='swip-1'>
          <img src={customProducts} alt='swip-img' />
          <h1 className='heading'>CREATE</h1>
          <h1>custom products</h1>
          <p>Easily add your designs to a wide range of products using our free tools</p>
        </div>
        <div className='swip-2'>
          <img src={sellTerms} alt='swip-img' />
          <h1 className='heading'>SELL</h1>
          <h1>on your terms</h1>
          <p>You choose the products, sale price, and where to sell</p>
        </div>
        <div className='swip-3'>
          <img src={handleFul} alt='swip-img' />
          <h1 className='heading'>WE HANDLE</h1>
          <h1>fulfillment</h1>
          <p>Once an order is placed, we automatically handle all the printing and delivery logistics</p>
        </div>
      </div>
    </div>
  )
}

export default Descript
