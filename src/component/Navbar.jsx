import React from 'react';
import '../styles/navbar.css';
import { HiMenu } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userlogin");
    return navigate('/login');
  }
  return (
    <div className='navbar'>
      <div className="navwrap">
      <div className="part1"><h2 className="logo">Logo</h2></div>
      <div className="icon"><HiMenu /></div>
      <div className='part2'>
        <ul className='navlists'>
          <li className='listitems'><Link to={'/'} className='links'>Home</Link></li>
          <li className='listitems'><Link to={'/menu'} className='links'>Menu</Link></li>
          <li className='listitems'><Link to={'/contact'} className='links'>Contact</Link></li>
          <li className='listitems'><Link to={'/cart'} className='links'>Cart</Link></li>
          <li className='listitems'><Link to={'/order'} className='links'>Order</Link></li>
          <li className='listitems'><button className='navaction' onClick={logout}>Logout</button></li>
        </ul>
      </div>
      </div>
    </div>
  )
}