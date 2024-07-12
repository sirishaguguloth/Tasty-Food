import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function Products() {
  const [product, setproduct] = useState({ name: "", image: "", price: "", category: "" });
  const [products, setproducts] = useState([]);
  const changeHandler = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value })
    console.log(products);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/addproduct", product).then(res => { toast(res.data) }).catch(err => toast(err.response.data));
  }
  const productDelete = (id) => {
    axios.delete(`http://localhost:5000/deleteproduct/${id}`).then(res => { toast(res.data); window.location.reload() }).catch(err => toast(err.response.data));
  }
  useEffect(() => {
    axios.get("http://localhost:5000/getproducts").then(res => { setproducts(res.data) }).catch(err => toast(err.response.data));
  }, [])
  return (
    localStorage.getItem("adminlogin") ?
      <div className='adminproducts'>
        <div className='adddprodct'>
          <form onSubmit={submitHandler}  className="addproduct">
            <input name='name' onChange={changeHandler} type="text" placeholder='name' />
            <input name='image' onChange={changeHandler} type="text" placeholder='image' />
            <input name='price' onChange={changeHandler} type="text" placeholder='price' />
            <select onChange={changeHandler} name="category">
              <option value="biryani">Select an option</option>
              <option value="biryani">Biryani</option>
              <option value="burger">burger</option>
              <option value="breakfast">Breakfast</option>
              <option value="milkshakes">Milkshakes</option>
            </select>
            <input type="submit" value="Add" />
          </form>
        </div>
        <div className="productslist">
          {products.length > 0 && products.map((item) => {
            return (
              <div className='adminproduct' key={item._id}>
                <div className='adminproimg'>
                  <img className='adminproductimg' src={item.image} alt="" />
                </div>
                <div>
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                  <div>{item.category}</div>
                  <button onClick={() => productDelete(item._id)} >Delete</button>
                </div>
              </div>
            )
          })}
        </div>
        <ToastContainer />
      </div>
      : <Navigate to={'/adminlogin'} />
  )
}
