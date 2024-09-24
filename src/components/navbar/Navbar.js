import React from 'react'
import './Navbar.css'

import logoImg from '../../assets/logo.png'

const App = () => {
  return (
    <div className='header-container'>
      <div className='header'>
        <div className='logo-container'>
          <img src={logoImg} alt="logo"/>
        </div>
        {/* Navigation Links */}
        <div className='nav-container'>
          <nav>
              <ul>
                <li>Catalog</li>
                <li>How it works</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Service</li>
                <li>Use-cases</li>
                <li>Needd help?</li>
              </ul>
            </nav>
        </div>
        <div className='nav-btn-container'>
          <button>Log in</button>
          <button className='btn-green'>Sign up</button>
        </div>
      </div>      
    </div>
  )
}

export default App
