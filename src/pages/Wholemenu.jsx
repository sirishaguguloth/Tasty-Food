import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import { useCart } from '../context/Context';
import '../styles/menu.css'; // Import your menu styles

export default function Wholemenu() {
    const { cart, setcart } = useCart();
    const [products, setProducts] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get("https://tastyfood-backend.onrender.com/getproducts")
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                toast.error(err.response.data);
            });
    }, []);

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

    const renderCategory = (categoryName) => {
        const filteredProducts = products.filter(item => item.category === categoryName);

        return (
            localStorage.getItem("userid") ?
            <div>
                <h2 style={{ paddingLeft: "2rem" }}>{categoryName}</h2>
                <div className="menudiv">
                    {filteredProducts.map((item, index) => (
                        <div className='menuitemdiv' key={index}>
                            <div className='menuitemp1'>
                                <img className='menuitemp1img' src={item.image} alt="" />
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
                    ))}
                </div>
            </div>
             : <Navigate to={'/login'} />
        );
    }

    return (
        <div className='wholemenu'>
            <h1 style={{ textAlign: "center" }}>Menu</h1>
            {renderCategory("biryani")}
            {renderCategory("burger")}
            {renderCategory("breakfast")}
            {renderCategory("milkshakes")}
            <ToastContainer />
           
        </div>
       
    )
}
