import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAddress, useCart } from '../context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Payment() {
    const navigate = useNavigate();
    const { address } = useAddress();
    const { cart } = useCart();

    // Check if cart is undefined or empty
    if (!cart || cart.length === 0) {
        return (
            <div className='payment'>
                <div className="paymentwrap">
                    <h2 className='paymenthead'>No items in the cart to process payment.</h2>
                    <button className='faibtn paymentbtns'>
                        <Link className='link' to={'/cart'}>Back to Cart</Link>
                    </button>
                </div>
                <ToastContainer />
            </div>
        );
    }

    // Calculate total price of items in cart
    const total = cart.reduce((accumulator, item) => {
        return accumulator + (item.productid?.price * item.quantity);
    }, 0);

    // Function to place order
    const placeOrder = () => {
        axios.post("http://localhost:5000/placeanorder", {
            userid: localStorage.getItem("userid"),
            cart: cart,
            total: total,
            address: address,
            status: false
        })
        .then(res => {
            toast.success(res.data);
            navigate('/ordersuccess');
        })
        .catch(err => {
            toast.error(err.response?.data || 'An error occurred while placing the order.');
        });
    };

    return (
        <div className='payment'>
            <div className="paymentwrap">
                <h2 className='paymenthead'>Choose Payment Option</h2>
                <button onClick={placeOrder} className='sucbtn paymentbtns'>Success</button>
                <button className='faibtn paymentbtns'>
                    <Link className='link' to={'/orderfail'}>Failure</Link>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
