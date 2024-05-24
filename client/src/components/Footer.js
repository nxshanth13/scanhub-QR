import React from 'react'
import logo from '../images/logo2.png'
import '../app.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div style={{ overflow: 'hidden' }} id='footer'>
            <div className="footerSection">
                <div className="footerTop">
                    <div className="footerLeft">
                        <img style={{ height: '60px', width: '130px' }} src={logo} alt='logo' />
                        <p style={{ fontSize: '14px', lineHeight: '22px', letterSpacing: '1px' }}>Meet Scanhub -
                            <br />Generate discreet QR codes with essential contact details for emergency access. Elevate security and
                            professionalism through our user-centric platform.</p>
                    </div>
                    <div className="footerRight">
                        <h3 style={{ fontSize: '14px', lineHeight: '22px', letterSpacing: '1px' }}>Contact Us,</h3>
                        <h4 style={{ fontSize: '14px', lineHeight: '22px', letterSpacing: '1px' }}>Address: Chennai, Tamil Nadu </h4>
                        <h4 style={{ fontSize: '14px', lineHeight: '22px', letterSpacing: '1px' }}>Tel:  9952090732 / 7904262162 <br /></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer