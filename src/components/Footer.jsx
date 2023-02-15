import React from 'react'
import logo from "../assets/logo3.png";
import { Link } from "react-router-dom";
function Footer() {
    return ( 
        <div className='footer'>
            <div className='footer_top'>
                <div className='repo'>
                    <img src={logo} alt="" />
                    <div className='top_input'>
                        <input type="text" placeholder='Enter your email address..' />
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='top_icon'>
                    <div className='top_icon-item'>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </div>
                    <div className='top_icon-item'>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                    <div className='top_icon-item'>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                    <div className='top_icon-item'>
                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className='line'>
            </div>
            <div className='footer_bottom'>
                <h3>Copyright @ 2001 <p>LeeXsfuniture.com</p> All rights Resered</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer