import React from 'react'
import '../styles/contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      <div className="contact">
        
        <div className="head">
   <h1>Organic</h1>
   <h2>Food</h2>
   </div>
    <div className="contacticons">
        <div>
          <div ><FaPhoneAlt  className='conticon'/></div><br/><br/>
          <div >Cell us</div>
          <div >+91 7330656759</div>
        </div>
        <div>
        <div ><FaLocationDot className='conticon'/></div><br/><br/>
          <div >Location</div>
          <div >Khammam</div>
        </div>
        <div>
        <div ><MdAttachEmail className='conticon'/></div><br/><br/>
          <div >Email</div>
          <div >Tastyfood@gmail.com</div>
        </div>
    </div>
 </div>
    </div>
  )
}
