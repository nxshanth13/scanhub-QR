import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const NavbarMain = () => {

  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  }

  return (
    <nav className='mainNav'>
        <h1 style={{color:'white',fontWeight:600}}>Scanhub Gen</h1>
        <div>
            <Link to='/' style={{textDecoration:'none'}}><h2>Home</h2></Link>
            <Link to='/aboutus' style={{textDecoration:'none'}}><h2>About Us</h2></Link>
            <Link to='/manual' style={{textDecoration:'none'}}><h2>User Guide</h2></Link>
            <Link style={{textDecoration:'none'}}><h2>Contact Us</h2></Link>
        </div>
        {isLoggedIn ? (
          <button onClick={handleLogout}>
            Logout
            <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
          </button>
        ) : (
          <>
          </>
        )}
    </nav>
  )
}

export default NavbarMain