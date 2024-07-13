import React, { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import biryani from '../assets/loginimg.jpg';
import burger from '../assets/loginimg.jpg';
import dosa from '../assets/loginimg.jpg';
import milkshake from '../assets/loginimg.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useCart } from '../context/Context';
import '../styles/menu.css'; // Import your menu styles

export default function Menu() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const { cart, setcart } = useCart();

    useEffect(() => {
        axios.get("https://tastyfood-backend.onrender.com/getproducts")
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                toast.error(err.response.data);
            });
    }, []);

    const filterProducts = products.filter(item => item.category === category);

    const addtocart = (id) => {
        axios.post("https://tastyfood-backend.onrender.com/addtocart", { userid: localStorage.getItem("userid"), productid: id, quantity: 1 })
            .then(res => {
                setcart(res.data);
                toast("Added to cart");
            })
            .catch(err => {
                toast.error(err.response.data);
            });
    }

    return (
        localStorage.getItem("userid") ?
            <div className='menu'>
                <div className="menuwrap">
                    <div className='menuheadimg'>
                        {category === "biryani" && <img className='menubanimg' src={biryani} alt="Biryani" />}
                        {category === "burger" && <img className='menubanimg' src={burger} alt="Burger" />}
                        {category === "breakfast" && <img className='menubanimg' src={dosa} alt="Dosa" />}
                        {category === "milkshakes" && <img className='menubanimg' src={milkshake} alt="Milkshake" />}
                    </div>
                    <div className='menuhead'>
                        <h2 className='menuheading'>{category} Menu</h2>
                    </div>
                </div>
                <div className="menudiv">
                    {filterProducts.length > 0 ?
                        filterProducts.map((item, index) => (
                            <div className='menuitemdiv' key={index}>
                                <div className='menuitemp1'>
                                    <img className='menuitemp1img' src={item.image} alt={item.name} />
                                </div>
                                <div>
                                    <div className='menuitemtitle'>{item.name}</div>
                                    <div className='menuitemprice'>RS: {item.price} /-</div>
                                    <div>
                                        {cart.some(cartItem => cartItem.productid && cartItem.productid._id === item._id) ? (
                                            <button className='menuitemaddbtn'><Link className='link' to={'/cart'}>Go to Cart</Link></button>
                                        ) : (
                                            <button onClick={() => addtocart(item._id)} className='menuitemaddbtn'>Add</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                        : <div>No products available in this category.</div>
                    }
                </div>
                <ToastContainer />
            </div>
            : <Navigate to={'/login'} />
    )
}
