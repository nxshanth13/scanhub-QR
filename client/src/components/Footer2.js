import React from 'react'
import logo from '../images/logo2.png'
import '../app.css'
import { Link } from 'react-router-dom'


const Footer2 = () => {
    return (
        <div style={{ boxShadow: "0 0 10px rgba(255, 255, 0, 0.9)", overflow: 'hidden' }} >
            <div className="footerSection newFooter" >
                <div className="footerRight">
                    <h3 style={{ fontSize: '14px', lineHeight: '22px', letterSpacing: '1px' }}>Contact Us,</h3>
                    <h4 style={{ fontSize: '14px', lineHeight: '22px', letterSpacing: '1px' }}>Address: Chennai, Tamil Nadu </h4>
                    <h4 style={{ fontSize: '14px', lineHeight: '22px', letterSpacing: '1px' }}>Tel:  9952090732/ 7904262162 <br /></h4>
                </div>
                <div className="footerBottom">
                    <h4 style={{ fontSize: '14px', lineHeight: '22px', letterSpacing: '1px' }}>Copyright © 2024 Scanhub</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer2