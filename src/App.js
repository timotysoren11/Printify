import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Descript from './components/description/Descript'
import Ecommerce from './components/ecommerce/Ecommerce'
import MerchantExp from './components/merchant_exp/MerchantExp'
import Selling from './components/selling/Selling'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Features />
      <Descript />
      <Ecommerce />
      <MerchantExp />
      <Selling />
      <Footer />
    </div>
  )
}

export default App
