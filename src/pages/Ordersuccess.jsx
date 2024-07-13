import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/orders.css'

export default function Ordersuccess() {
  return (
    <div className='ordersuc'> 
     <h2>Your Order is Successfull. Go to Orders</h2>
     <button  className='ordersucbtn'><Link className='link' to={'/order'}>Orders</Link></button>
    </div>
  )
}
