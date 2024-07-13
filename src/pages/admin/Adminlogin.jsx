import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Adminlogin() {
    const navigate = useNavigate();
    const [login, setlogin] = useState({username: '', password: ''});
    const Changehandler = (e) => {
        setlogin({...login, [e.target.name]: e.target.value})
    }
    const submitHnadler = (e) => {
        e.preventDefault();
       // axios.post("http://localhost:5000/adminlogin", login).then(res => {localStorage.setItem("adminlogin", "true"); return navigate('/home')}).catch(err => toast(err.response.data));
       axios.post("https://tastyfood-backend.onrender.com/adminlogin", login).then(res => {localStorage.setItem("adminlogin", "true"); return navigate('/home')}).catch(err => toast(err.response.data));
    }
  return (
    <div>
        <center>
            <h2>Admin Login</h2>
            <form onSubmit={submitHnadler}>
                <input onChange={Changehandler} name='username' type="text" placeholder='username' />
                <br />
                <input onChange={Changehandler} type="password" name="password" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </center>
        <ToastContainer />
    </div>
  )
}