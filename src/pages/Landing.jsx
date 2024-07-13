import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/landing.css';
import img1 from '../assets/loginimg.jpg';
import i1 from  '../assets/cont1.jpg';
import i2 from '../assets/loginimg.jpg';
import i3 from '../assets/loginimg.jpg';
import i4 from '../assets/contactimg.jpg';
import { Link } from 'react-router-dom';

export default function Landing() {
    const[promotion1]=useState([i1,i2,i3,i4]);// initialization for imgs
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 1000, 
   
      };
  return (
    <div className='landing'>
        <div className="landingimgs">
      <Slider {...settings}>
      <div className='landingimg'>
          <img className='bg1' src={img1} alt="img" />
      </div>
      <div className='landingimg'>
          <img className='bg2' src={img1} alt="img" />
      </div>
      <div className='landingimg'>
          <img className='bg3' src={img1} alt="img" />
      </div>
      <div className='landingimg'>
          <img className='bg4' src={img1} alt="img" />
      </div>
      <div className='landingimg'>
          <img className='bg5' src={img1} alt="img" />
      </div>
    </Slider>
    </div> 
    <div className="cat">
        <div className="catwrap">
            <div className="catimg">
                <div className="1">
                 <Link to={'/menu/milkshakes'}className='links'>
                <img className='foodimg' src={img1} alt="img" />
                <div className="foodname">Milkshake</div>
                </Link>
                </div>
                <div className="2">
                <Link to={'/menu/breakfast'}className='links'>
                <img className='foodimg' src={img1} alt="img" />
                <div className="foodname">Breakfast</div>
                </Link>
                </div>
                <div className="3">
                <Link to={'/menu/biryani'}className='links'>
                <img className='foodimg' src={img1} alt="img" />
                <div className="foodname">Biryani</div>
                </Link>
                </div>
                <div className="4">
                <Link to={'/menu/burger'}className='links'>
                <img className='foodimg' src={img1} alt="img" />
                <div className="foodname">Burger</div>
                 </Link>
                </div>
            </div>
        </div>
    </div>
  <div className="promotionlandings">
    <div className="promotion1">
        <h2>Special Item of us</h2>
      <div className="proimgs">
      {promotion1.map((pro,index)=>(
           <img key={index} className='proimg' src={pro} alt="" />
       )
   )}
      </div>
    </div>
    <div className="promotion2">
        <h2>Top pics of customers</h2>
        <div className="proimgs">
        {promotion1.map((pro,index)=>( 
           <img key={index} className='proimg' src={pro} alt="" />
       )
   )}
        </div>
    </div>
 </div> 
</div>
  )
}
