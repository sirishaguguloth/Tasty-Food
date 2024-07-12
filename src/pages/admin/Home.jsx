import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../../styles/admin.css';

export default function Home() {
  const navigate = useNavigate();
  const adminLogout = () => {
    localStorage.removeItem("adminlogin");
    return navigate('/adminlogin')
  }
  return (
    localStorage.getItem("adminlogin") ?
      <div className='adminhome'>
        <div className="adminlogindiv">
          <button onClick={adminLogout} className="adminloginbtn">Logout</button>
        </div>
        <div className='adminhomebox'><Link className='link' to={'/adminorder'}>Orders</Link></div>
        <div className='adminhomebox'><Link className='link' to={'/products'}>Products</Link></div>
      </div> : <Navigate to={'/adminlogin'} />
  )
}