import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer3 = () => {
  return (
    <footer className='mainFooter' id='contact'>
      <div className='leftFooter'>
        <Link to='/login' style={{ color: 'white', textDecoration: 'none', cursor: 'text' }}><h1>ScanHubGen</h1></Link>
        <p>An emergency information QR code system that can be a helpful way to provide crucial information to first responders
          or anyone who needs it in case of an emergency. </p>
        <p style={{ marginTop: '20px' }}>Customer care: 9952090732 / 7904262162</p>
      </div>
      <div className='rightFooter'>
        <div className='footerLogos'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <p>www.scanhub.co.in</p>
        <div className="footerBottom">
          <h4 style={{ fontSize: '14px', lineHeight: '22px', letterSpacing: '1px' }}>Copyright © 2024 Scanhub </h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer3