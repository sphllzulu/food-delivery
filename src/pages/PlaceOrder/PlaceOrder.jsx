import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount}=useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='Province' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Postal Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone number' />

      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>R{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>R{getTotalCartAmount()===0?0:15}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>R{getTotalCartAmount()===0?0: getTotalCartAmount()+15}</b>
            </div>
          </div>
          <button>Pay</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder