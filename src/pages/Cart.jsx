import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/Context';
import '../styles/cart.css';

export default function Cart() {
    const { cart, setcart } = useCart();

    const total = cart.reduce((total, item) => {
        return Number(total) + Number(item.productid.price * item.quantity);
    }, 0);

    const quatityHandler = ({ cartid, quantity }) => {
        axios.put(`http://localhost:5000/updateproduct/${cartid}`, { quantity })
            .then(res => toast(res.data))
            .catch(err => toast(err.response.data));
    }

    const removefromcart = (id) => {
        axios.delete(`http://localhost:5000/removefromcart/${id}/${localStorage.getItem("userid")}`)
            .then(res => {
                setcart(res.data);
                toast("Removed successfully");
            })
            .catch(err => toast(err.response.data));
    }

    return (
        <div className='cart'>
            <div className="cartitems">
                {cart.map(item => (
                    <div key={item._id} className='cartitemdiv'>
                        <div className='cartitemimgdiv'>
                            <img className='cartitemimg' src={item.productid?.image} alt="" />
                        </div>
                        <div className="cartitemdeldiv">
                            <div style={{ textTransform: "capitalize" }}>{item.productid?.name}</div>
                            <div>Quantity: &nbsp;
                                <select defaultValue={item.quantity} onChange={(e) => quatityHandler({ cartid: item._id, quantity: e.target.value })} name="" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="cartitemprice">RS: {item.productid?.price} /-</div>
                        </div>
                        <div className="removecart">
                            <button className='removecartbtn' onClick={() => removefromcart(item.productid?._id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="totalcart">
                <div className='totalofcart'>Total: RS {total} /-</div>
                <div className="placeorderbtndiv">
                    <button className='placeorderbtn'><Link className='link' to={'/address'}>Place an order</Link></button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
