import React, { useState } from 'react';
import '../styles/Register.css';
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const navigate = useNavigate();
    const [register, setregister] = useState({ username: "", email: "", password: "" });
    const changeHandler = (e) => {
        setregister({ ...register, [e.target.name]: e.target.value });
    }
    const submitHnalder = (e) => {
        e.preventDefault();
        axios.post("https://tastyfood-backend.onrender.com/register", register).then(res => {toast(res.data); return navigate('/login')}).catch(err => toast(err.response.data));
    }
    return (
        <div onSubmit={submitHnalder} className='register'>
            <div className="registerwrap">
                <div className="registerchilddivs registerimg"></div>
                <div className="registerchilddivs registerformdiv">
                    <form className='registerform'>
                        <h2 className='registerhead'>Create Account</h2>
                        <div className="inputdivs">
                            <FaUserCircle className='registericons' />
                            <input onChange={changeHandler} name='username' className='registerinputs' type="text" placeholder='Username' />
                        </div>
                        <div className="inputdivs">
                            <MdEmail className='registericons' />
                            <input onChange={changeHandler} name='email' className='registerinputs' type="text" placeholder='Email' />
                        </div>
                        <div className="inputdivs">
                            <RiLockPasswordFill className='registericons' />
                            <input onChange={changeHandler} name='password' className='registerinputs' type="password" placeholder='password' />
                        </div>
                        <input type="submit" value="Sign up" className='registersubmit' />
                        <div className='registerredirect'>Already a member? <Link to={'/login'} className='logintoregister'>Sign in</Link></div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}