import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Adminorders() {
    const [orders, setOrders] = useState([]);

    const changeStatus = ({ id, status }) => {
        axios.put(`http://localhost:5000/updateorders/${id}`, { status })
            .then(res => toast(res.data))
            .catch(err => toast(err.response.data));
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/getorders`)
            .then(res => setOrders(res.data))
            .catch(err => toast(err.response.data));
    }, []);

    return (
        <div className='adminorder'>
            <div className="adminorderwrap">
                {orders.length > 0 ? (
                    orders.map(item => (
                        <div key={item._id} className="ordersdiv">
                            <div className="orderdivleft">
                                <div><h2>{item.userid.userid}</h2></div>
                                <div>Value: RS {item.total} /-</div>
                                <div className="orderstatus">Status: {item.status ? "Delivered" : "Yet to Delivered"} </div>
                                <div className="classchnagestaorde">
                                    <button onClick={() => changeStatus({ id: item._id, status: !item.status })} className='classchnagestaorde'>Change Status</button>
                                </div>
                            </div>
                            <div className="orderitems">
                                {item.cart.map(pro => (
                                    <div key={pro.productid._id} className="orderprodiv">
                                        <div className="prodivimg">
                                            <img className='proorderimg' src={pro.productid && pro.productid.image} alt="product" />
                                        </div>
                                        <div className="proorderdetails">
                                            <div className="productorderdetname">{pro.productid && pro.productid.name}</div>
                                            <div className="productorderdetprice">Rs {pro.productid && pro.productid.price} /-</div>
                                            <div className="productorderdetquantity">Quantity: {pro.quantity}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-orders-message">
                        <h2>No orders available.</h2>
                    </div>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}
