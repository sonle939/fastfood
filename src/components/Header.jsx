import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo2.png";
function Header() {
    const [fix, setFix] = useState(false);
    const fixHide = () => {
        if (window.scrollY >= 100) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener('scroll', fixHide);
    return (
        <div className='header'>
            <div className={fix ? "header_top active":"header_top"}>
                <h3>welcome to leexs</h3>
                <div className='header_img'>
                    <img src={logo} />
                </div>
                <div className='header_icon'>
                    <p>Login</p>
                    <div className='header_icon_list'>
                        <div className='header_icon_icon'>
                            <i className="fa fa-heart-o" aria-hidden="true"></i> (0)
                        </div>
                        <div className='header_icon_icon'>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i> (0)
                        </div>
                    </div>
                </div>
            </div>
            <ul className='header_bottom'>
                <li><Link to="/"  data-replace="Home"><span>Home</span></Link></li>
                <li><Link to="/menu"  data-replace="menu"><span>Menu</span></Link></li>
                <li><Link to="/blogs"  data-replace="Blogs"><span>Blogs</span></Link></li>
                <li><Link to="/aboutus"  data-replace="About us"><span>About us</span></Link></li>
            </ul>
        </div>
    )
}

export default Header