import React from 'react'
import './MerchantExp.css'


const MerchantExp = () => {
  return (
    <div className='merchant-container'>
      <div className='merchant-content'>
        <div className='content-1'>
          <h1>Trusted by over 8M sellers around the world</h1>
        </div>
        <div className='content-2'>
        <p>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchangt experience</p>                    
        </div>
      </div>
      {/* Slider Container */}
      <div className='slider-container'>
        <div className='user-details'>
          <img src='' alt='' />
          <div className='user-name'>
            <h1>Robert A. Voltaire</h1>
            <div className='user-name-1'>
              <h4>Store link</h4>
              <h4>* * * * *</h4>
            </div>
          </div>
          <p>Printify has been an incrdible service for us musicians unable to keep large amount of inventory, now we can create designs previously too expensive to print without having to have 1000 shirts in our jam space. Thanks Printy</p>
        </div>

        <div className='user-details'>
          <img src='' alt='' />
          <div className='user-name'>
            <h1>Robert A. Voltaire</h1>
            <div className='user-name-1'>
              <h4>Store link</h4>
              <h4>* * * * *</h4>
            </div>
          </div>
          <p>Printify has been an incrdible service for us musicians unable to keep large amount of inventory, now we can create designs previously too expensive to print without having to have 1000 shirts in our jam space. Thanks Printy</p>
        </div>
        
      </div>      
    </div>
  )
}

export default MerchantExp
