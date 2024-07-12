import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const Address = React.createContext();
const Cart = React.createContext();
const Items = React.createContext();

export const useAddress = () => {
    return useContext(Address);
}

export const useCart = () => {
    return useContext(Cart);
}

export const useProducts = () => {
    return useContext(Items);
}

export default function Context({ children }) {
    const [address, setaddress] = useState({});
    const [cart, setcart] = useState([]);
    const [products, setproducts] = useState([]);
    useEffect(() => {
        axios.get("https://resturantbackend-otgt.onrender.com/getproducts").then(res => { setproducts(res.data) }).catch(err => alert(err.response.data));
        axios.get(`https://resturantbackend-otgt.onrender.com/getthecart/${localStorage.getItem("userid")}`).then(res => { setcart(res.data) }).catch(err => alert(err.response.data));
    }, []);
    return (
        <Address.Provider value={{ address, setaddress }}>
            <Cart.Provider value={{ cart, setcart }}>
                <Items.Provider value={{ products, setproducts }}>
                    {children}
                </Items.Provider>
            </Cart.Provider>
        </Address.Provider>
    )
}