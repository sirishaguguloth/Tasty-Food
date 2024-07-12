import React, { useState } from 'react';
import '../styles/login.css';
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const navigate = useNavigate();
    const [login, setlogin] = useState({ username: "", password: "" });
    const changeHandler = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
    }
    const submitHnalder = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", login).then(res => {localStorage.setItem("userid", res.data); return navigate('/')}).catch(err => toast(err.response.data));
    }
    return (
        <div className='login'>
            <div className="loginwrap">
                <div className="loginchilddivs loginimg"></div>
                <div className="loginchilddivs loginformdiv">
                    <form onSubmit={submitHnalder} className='loginform'>
                        <h2 className='loginhead'>Login</h2>
                        <div className="inputdivs">
                            <FaUserCircle className='loginicons' />
                            <input onChange={changeHandler} name='username' className='logininputs' type="text" placeholder='Username' />
                        </div>
                        <div className="inputdivs">
                            <RiLockPasswordFill className='loginicons' />
                            <input onChange={changeHandler} name='password' className='logininputs' type="password" placeholder='password' />
                        </div>
                        <input type="submit" value="Login" className='loginsubmit' />
                        <div className='registerredirect'>New User? <Link to={'/register'} className='logintoregister'>Create accouont</Link></div>
                    </form>
                </div>
            </div>
              <ToastContainer />
        </div>
    )
}