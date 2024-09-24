import React from 'react';
import './Selling.css'

import sellImg from '../../assets/sell-img.png'

const Selling = () => {

  // table data
  const data = [
    { item: 'You sell a t-shirt', price: 30 },
    { item: 'You pay for its production', price: 12 },
    { item: 'Your profit', price: 18 }
  ];

  return (
    <div className='selling-container'>
      <div className='selling-title-container'>
        <div className='selling-title'>
          <h1>Make Money,</h1>
          <h1>Risk-Free</h1>
          <p  className='sell-para-1'>You pay for fulfillment only when you make a sale</p>
        </div>

        <div className='price-table'>
          <table>
            {/* <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead> */}
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.item}</td>
                  <td>${row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className='sell-btn'>Start selling</button>
        <p className='sell-para-2'>100% Free to use 900+ Products - Largest print network</p>
      </div>
      <div className='sell-img-container'>
        <img src={sellImg} alt='sell-img' />
      </div>
    </div>
  );
};

export default Selling;
