import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrum() {
    return (
            <div className="breadcrumb">
                <Link to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
                <p>/</p>
                <Link to="/menu">Menu</Link>
            </div>
    )
}

export default Breadcrum