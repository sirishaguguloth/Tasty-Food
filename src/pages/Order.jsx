import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/orders.css'
export default function Order() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/getorders/${localStorage.getItem("userid")}`)
            .then(res => setOrders(res.data))
            .catch(err => toast.error(err.response.data));
    }, []);

    return (
        <div className='orders'>
            <div className="orders-wrap">
                <h2 style={{color:"red",display:"flex",alignItems:"center",justifyContent:"center"}}>Orders</h2>
                {orders.length > 0 ? (
                    orders.map(item => (
                        <div key={item._id} className="order">
                            <div className="order-header">
                                <h2>{item.address && item.address.name}</h2>
                                <div className="order-status">
                                    Status: {item.status ? "Delivered" : "Yet to be Delivered"}
                                </div>
                                <div className="order-total">
                                    {item.total ? `Total: RS ${item.total} /-` : 'Total not available'}
                                </div>
                            </div>
                            <div className="order-items">
                                {item.cart.map(pro => (
                                    pro.productid && (
                                        <div key={pro.productid._id} className="order-item">
                                            <div className="item-image">
                                                {pro.productid.image && (
                                                    <img className='item-img' src={pro.productid.image} alt="product" />
                                                )}
                                            </div>
                                            <div className="item-details">
                                                <div className="item-name">{pro.productid.name}</div>
                                                <div className="item-price">Price: Rs {pro.productid.price} /-</div>
                                                <div className="item-quantity">Quantity: {pro.quantity}</div>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-orders">
                        <center>No orders yet</center>
                    </div>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}
