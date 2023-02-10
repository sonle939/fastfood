import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate,setCurrentPage,currentPage}) {
    const pageNumbers = [];
 
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    console.log(currentPage)
    console.log(pageNumbers.length)
    const countupapni = ()=>{
      if(currentPage < pageNumbers.length){
          setCurrentPage(currentPage + 1);
      }
    }
    const countdownapni = ()=>{
      if(currentPage > 1){
        setCurrentPage(currentPage - 1);
      }
    }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() =>{ paginate(number)}} className={currentPage == number ?  "page_link active": "page_link"}>
              {number}
            </a>
          </li>
          
        ))}
        <li onClick={()=>countdownapni()}>
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </li>
        <li onClick={()=>countupapni()}>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination