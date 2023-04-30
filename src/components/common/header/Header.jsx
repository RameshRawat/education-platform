import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Colleges</Link>
            </li>
            <li>
              <Link to='/about'>About us</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/Scholarships'>Scholarships</Link>
            </li>
            {/* <li>
              <Link to='/journal'>All Courses</Link>
            </li> */}
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
          </ul>
          <div className='start'>

          <div class="search-container">
  {/* <button class="button search-button">FIND BEST COLLEGES</button> */}
  <div class="search-box">
    <input type="text" placeholder="Search..." />
    
  </div>
</div>
            {/* <div className='button button-search'>FIND BEST COLLEGES</div>
            <input type="text" className="search-box" placeholder="search here" /> */}
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
