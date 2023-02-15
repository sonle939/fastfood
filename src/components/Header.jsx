import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo2.png";
import funituredata from '../data/funiture';

function Header({ cart }) {
    const [fix, setFix] = useState(false);
    const [data, setData] = useState(funituredata);
    const [active, setActive] = useState(true);
    const [search, setSearch] = useState('');
    const [hide, setHide] = useState(true);
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
                <img src={logo} />
                <div className='header_icon'>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <div className='header_icon_list'>
                        <Link to="/cart" className='header_icon_icon'>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            {cart.length === 0 ? (<p>(0)</p>) : <p>({cart.length})</p>}
                        </Link>
                        <div className='header_icon_icon'>
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <p>(0)</p>
                        </div>
                        <div className='header_icon_icon'>
                            <i className="fa fa-search" aria-hidden="true" onClick={() => setActive(!active)}></i>
                        </div>
                    </div>
                </div>
                <div className='menu_drop'>
                    <div className='dropdown_icon' onClick={() => setHide(!hide)}>
                        <p>utilities</p>
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                        <div className={hide ? "drop_list active" : "drop_list"}>
                            <Link to="/cart" className='header_icon_icon'>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                <p>Cart</p>
                            </Link>
                            <div className='header_icon_icon'>
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                <p>favourite</p>
                            </div>
                            <div className='header_icon_icon'>
                                <i className="fa fa-search" aria-hidden="true" onClick={() => setActive(!active)}></i>
                                <p>Search</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className='header_bottom'>
                <li><Link to="/" data-replace="Home"><span>Home</span></Link></li>
                <li><Link to="/menu" data-replace="menu"><span>Menu</span></Link></li>
                <li><Link to="/blogs" data-replace="Blogs"><span>Blogs</span></Link></li>
                <li><Link to="/aboutus" data-replace="About "><span>About</span></Link></li>
            </ul>
            <div className={active ? "overlay_search active" : "overlay_search"} >
                <div className="input_wrapper">
                    <input type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search entrie store here'
                        name="title"
                        value={search}
                    />
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="content_search">
                    {data.filter((item => item.title.toLowerCase().includes(search)))
                        .map(item => (
                            <>
                                {search === "" ? "" :
                                    (<a href={`/details/${item.id}`} className='sear_content'>
                                        <img src={item.image} />
                                        <div className='sear_text'>
                                            <h3>{item.title}</h3>
                                            <p>$ {item.price}</p>
                                        </div>
                                    </a>)}
                            </>
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