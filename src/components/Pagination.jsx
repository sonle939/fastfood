import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number,index) => (
          <li key={number}>
            <a onClick={() =>{ paginate(number);console.log(index) }} className={number ===  number ? "page_link":"page_link active"}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination