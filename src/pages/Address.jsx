import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { useAddress } from '../context/Context';
import '../styles/address.css';

export default function Address() {
    const [addr,setaddr]= useState({name:"", phn:"", village:"",city:"",pin:"",dist:"",state:""})
    const { setaddress } = useAddress();
    const changehandler = (e) => {
        setaddr({ ...addr, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setaddress(addr);
    }
  return (
    <div className='addresspage'>
        <div className="addrwrap">
        <h1>Delivery Address</h1>
      <form className="details" onSubmit={submitHandler}>
        <input onChange={changehandler} type="text" name="name" placeholder='Name' className='addrdetails'/>
        <input onChange={changehandler} type="text" name="phn" placeholder='Mobile No' className='addrdetails'/>
        <input onChange={changehandler} type="text" name="village" placeholder='Address' className='addrdetails'/>
        <input onChange={changehandler} type="text" name="city" placeholder='City' className='addrdetails'/>
        <input onChange={changehandler} type="text" name="pin" placeholder='PIN code' className='addrdetails'/>
        <input onChange={changehandler} type="text" name="dist" placeholder='Distric' className='addrdetails'/>
        <input onChange={changehandler} type="text" name="state" placeholder='State' className='addrdetails'/>
       <button className='addrbtn'><Link to='/payment' className='links'>Go to payment</Link></button>
       </form>
      </div>
    </div>
  )
}
