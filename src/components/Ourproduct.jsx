import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import funituredata from '../data/funiture';

function Ourproduct() {
  const [typeData, setTypeData] = useState(funituredata);
  const [active, setActive] = useState("all");

  const dataCategory = [
    {
      id: 1,
      image: "https://i.pinimg.com/564x/ac/1e/f5/ac1ef581b47d1e4133e085221fb6e349.jpg",
      title: "Dining Chair"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/564x/11/31/3d/11313d1a8fa0dcaf46cf5fd23151359e.jpg",
      title: "Table"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/564x/5e/8c/5f/5e8c5f31cf3375dcce5eb9278661fa19.jpg",
      title: "mirror"
    }
  ];
  const dataAbout = [
    {
      id: 1,
      image: "https://i.pinimg.com/564x/5d/66/f8/5d66f8a37549f81c9be419ba6986834d.jpg"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/564x/4c/07/31/4c0731518224a406713eeef7baff5f6d.jpg"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/564x/0e/bc/3a/0ebc3aaa951e9ad071b906069fe5f6c0.jpg"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/564x/bb/b4/5d/bbb45d49801cd5e9d6e51e2203249f43.jpg"
    }
  ]
  const filterData = (type) => {
    const filteritem = funituredata.filter((itemdata) => {
      return itemdata.type === type;
    })
    setTypeData(filteritem);
  }
  return (
    <div className='sell'>
      <div className='sell_category'>
        <div className='category_text'>
          <h3>Shop by category</h3>
          <div className='line'></div>
          <div className='category_amount'>
            <i className="fa fa-cube" aria-hidden="true"></i>
            <p>100+ Unique products</p>
          </div>
          <Link>All category <i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
        </div>
        <div className='category_image'>
          {
            dataCategory.map(item => (
              <div className='category_item' key={item.id}>
                <img src={item.image} />
                <h3>{item.title}</h3>
              </div>
            ))
          }
        </div>
      </div>
      <div className='more'>
        <div className='more_item'>
          <img src='https://i.pinimg.com/564x/1c/7b/cc/1c7bcc3ebb02ab5ae82a81205636fe73.jpg' />
          <div className='more_item-text'>
            <p>50% off all order</p>
            <h3>Living room</h3>
            <button>Shop now</button>
          </div>
        </div>
        <div className='more_item'>
          <img src='https://i.pinimg.com/736x/9d/27/b2/9d27b2f0d0fbf5aea36ca168487ff6a1.jpg' />
          <div className='more_item-text'>
            <p>50% off all order</p>
            <h3>Dining room</h3>
            <button>Shop now</button>
          </div>
        </div>
      </div>
      <div className='hot'>
        <div className='hot_control'>
          <div className="hot_title">
            <h3>Our Products</h3>
            <div className='line'></div>
          </div>
          <div className='hot_control_item'>
            <div onClick={() => { setTypeData(funituredata); setActive("all"); }} className={active === "all" ? "div animation_line" : "div"}>All product</div>
            <div onClick={() => { filterData("newmod"); setActive("newmod"); }} className={active === "newmod" ? "div line1" : "div"}>Latest product</div>
            <div onClick={() => { filterData("selling"); setActive("selling"); }} className={active === "selling" ? "div line2" : "div"}>Top rating</div>
            <div onClick={() => { filterData("discount"); setActive("discount"); }} className={active === "discount" ? "div line3" : "div"}>Best seller</div>
            <div className='animation_line line'></div>
          </div>
          <Link to="/menu">go to menu<i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
        </div>
        <div className='hot_wrapper'>
          {typeData.map(item => (
            <div className='wrapper-item' key={item.id}>
              <img src={item.image} alt="" />
              {item.type === "discount" && <div className='type_item'>{item.type}</div>}
              {item.type === "selling" && <div className='type_item'>{item.type}</div>}
              {item.type === "newmod" && <div className='type_item'>{item.type}</div>}
              <div className='wrapper_control'>
                <div className='control_list'>
                  <Link className='control_item'>
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                  </Link>
                  <Link className='control_item' to={`/details/${item.id}`}>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </Link>
                  <Link className='control_item'>
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
              <div className='wrapper_description'>
                <img src={item.rating} alt="" />
                <h3>{item.title}</h3>
                {item.type === "discount" ? <div className='pricecalse'><p className='price_old'>${item.price}</p><p className='price_new'>${item.pricesale}</p></div> : <p>${item.price}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='supplise'>
        <div className='supplise_text'>
            <h2>We design digital products</h2>
            <i className="fa fa-cubes" aria-hidden="true"></i>
            <p>
            A house with beautiful interior design brings back aesthetic value 
            and value for money. When your home is beautifully furnished, it 
            will certainly appreciate more when you sell it. Besides, 
            everyone wants to live in a beautiful space, 
            because it will directly affect the owners psychology.
            </p>
        </div>
        <div className='supplise_image'>
          {
            dataAbout.map(item => (
              <div className='supplise_item' key={item.id}>
                  <img src={item.image}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Ourproduct