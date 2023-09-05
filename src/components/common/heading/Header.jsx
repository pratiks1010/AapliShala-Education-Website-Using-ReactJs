import React, { useState } from 'react'
import Head from './Head'
import "./header.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Header = () => {

    const [click,setClick]= useState(false)



  return (
    <div>

    <Head></Head>
    <header>
      <nav className='flexSB'>
        <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=> setClick(false)}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/about">Pricing</Link></li>
          <li><Link to="/journal">Journal</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="start">
          <div className="button">GET CERTIFICATE</div>
        </div>

        <button className='toggle' onClick={()=> setClick(!click)}>
          {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
        </button>
      </nav>
    </header>


    </div>
  )
}

export default Header