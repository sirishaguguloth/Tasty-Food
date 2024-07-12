import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Ordersuccess() {
  return (
    <div className='ordersuc'> 
     <h2>Your Order is Successfull. Go to Orders</h2>
     <button ><Link className='link' to={'/order'}>Orders</Link></button>
    </div>
  )
}
