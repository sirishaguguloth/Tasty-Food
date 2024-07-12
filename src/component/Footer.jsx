import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import '../styles/footer.css';
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <center>
      <div className="footerhead">
        <h1>Tasty Foods</h1>
      </div>
      <div className="footercontact">
        <h3>Contact</h3><br/>
        <div><FaMobileAlt /> +91 7330656759</div>
        <div><MdAttachEmail /> Tastyfood@gmail.com</div>
      </div>
      <div className="footericons">
      <BsInstagram />
      <FaXTwitter />
      <FaFacebookSquare />
      </div>
      </center>
      </div>
    </div>
  )
}
