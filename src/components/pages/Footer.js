import React from 'react';
import {FaFacebook, FaTwitter, FaLinkedin, FaInfoCircle, FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
        <h2>Social Networks</h2>
        <div className="links">
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaLinkedin size={30} />
            <FaInstagram size={30} />
            <FaInfoCircle size={30} />
        </div>
    </div>
  )
}
