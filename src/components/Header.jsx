import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo2.png";
import funituredata from '../data/funiture';

function Header({ cart }) {
    const [fix, setFix] = useState(false);
    const [data, setData] = useState(funituredata);
    const [input, setInput] = useState(true);
    const [active, setActive] = useState(true);
    const [search, setSearch] = useState('');
    const suggest = [
        {
            id: 1,
            name: "Chair"
        },
        {
            id: 1,
            name: "Table"
        },
        {
            id: 1,
            name: "Clock"
        },
        {
            id: 1,
            name: "Lamp"
        },
        {
            id: 1,
            name: "Mirror"
        },
    ]
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
            <div className={fix ? "header_top active" : "header_top"}>
                <h3>welcome to leexs</h3>
                <div className='header_img'>
                    <img src={logo} />
                </div>
                <div className='header_icon'>
                    <p>Login</p>
                    <div className='header_icon_list'>
                        <Link to="/cart" className='header_icon_icon'>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            {cart.length === 0 ? "(0)" : <p>({cart.length})</p>}
                        </Link>
                        <div className='header_icon_icon'>
                            <i className="fa fa-heart-o" aria-hidden="true"></i> (0)
                        </div>
                        <div className='header_icon_icon'>
                            <i className="fa fa-search" aria-hidden="true" onClick={() => setActive(!active)}></i>
                        </div>
                    </div>
                </div>
            </div>
            <ul className='header_bottom'>
                <li><Link to="/" data-replace="Home"><span>Home</span></Link></li>
                <li><Link to="/menu" data-replace="menu"><span>Menu</span></Link></li>
                <li><Link to="/blogs" data-replace="Blogs"><span>Blogs</span></Link></li>
                <li><Link to="/aboutus" data-replace="About us"><span>About us</span></Link></li>
            </ul>
            <div className={active ? "overlay_search active" : "overlay_search"} >
                <div className='search_container'>
                    <h2>We can help you find ?</h2>
                    <div className="input_wrapper">
                    <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search entrie store here'
                            name="title"
                            value={search}
                            onClick={()=>setInput(!input)}
                        />
                    </div> 
                    <div className='suggest'>
                        <p className='suggest_item' onClick={() => setSearch('table')}>
                            Table
                        </p>
                        <p className='suggest_item' onClick={() => setSearch('chair')}>
                            Chair
                        </p>
                        <p className='suggest_item' onClick={() => setSearch('mirror')}>
                            Mirror
                        </p>
                        <p className='suggest_item' onClick={() => setSearch('lamp')}>
                            Lamp
                        </p>
                        <p className='suggest_item' onClick={() => setSearch('clock')}>
                            Clock
                        </p>
                    </div>
                </div>
                <div className={search === "" ? "content_search" :"content_search active"}>
                    {data.filter((item => item.title.toLowerCase().includes(search)))
                        .map(item => (
                            <>{search === "" ? "" :(<p>{item.title}</p>)}</>
                    ))}
                </div>
                <div className='overlay-icon' onClick={() => setActive(!active)}>
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default Header