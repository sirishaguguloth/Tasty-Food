import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './component/Navbar';
//import Landing from './pages/Landing';
import Footer from './component/Footer';
import Adminlogin from './pages/admin/Adminlogin';
import Home from './pages/admin/Home';
import Adminorder from './pages/admin/Adminorder';
import Contact from './pages/Contact';
//import Menu from './pages/Menu';
//import Wholemenu from './pages/Wholemenu';
import Products from './pages/admin/Products';
//import Cart from './pages/Cart';
import Context from './context/Context';
import Address from './pages/Address';
import Payment from './pages/Payment';
import Ordersuccess from './pages/Ordersuccess';
import Orderfail from './pages/Orderfail';
import Order from './pages/Order';
import Load from './component/Loading';
import Loading from './component/Loading';

const Landing = lazy(() => import('./pages/Landing'));
const Wholemenu = lazy(() => import('./pages/Wholemenu'));
const Menu = lazy(() => import('./pages/Menu'));
const Cart = lazy(() => import('./pages/Cart'))


function withnav() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      
    </>
  )
}
//mongodb+srv://user:<password>@cluster0.rkuhcm0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={<Loading/>}>
      <Context>
        <Routes>
          <Route exact path='/' Component={withnav}>
            <Route exact path='/' Component={Landing} />
          </Route>
          <Route exact path='/contact' Component={withnav}>
            <Route exact path='/contact' Component={Contact} />
          </Route>
         <Route exact path='/menu/:category' Component={withnav}>
            <Route exact path='/menu/:category' Component={Menu} />
          </Route>
           
          <Route exact path='/menu' Component={withnav}>
            <Route exact path='/menu' Component={Wholemenu} />
          </Route>
          <Route exact path='/cart' Component={withnav}>
            <Route exact path='/cart' Component={Cart} />
          </Route>
          <Route exact path='/address' Component={withnav}>
            <Route exact path='/address' Component={Address} />
          </Route>
          <Route exact path='/payment' Component={withnav}>
            <Route exact path='/payment' Component={Payment} />
          </Route>
          <Route exact path='/ordersuccess' Component={withnav}>
            <Route exact path='/ordersuccess' Component={Ordersuccess} />
          </Route>
          <Route exact path='/orderfail' Component={withnav}>
            <Route exact path='/orderfail' Component={Orderfail} />
          </Route>
          <Route exact path='/order' Component={withnav}>
            <Route exact path='/order' Component={Order} />
          </Route>
    
          <Route path='/register' Component={Register} />
          <Route path='/login' Component={Login} />

          {/*.....admin.....*/}
          <Route  exact path='/adminlogin' Component={Adminlogin} />
          <Route path='/home' Component={Home} />
          <Route path='/adminorder' Component={Adminorder} />
          <Route path='/products' Component={Products} />
        </Routes>
        </Context>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;