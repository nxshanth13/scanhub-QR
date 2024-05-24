import React from 'react'

import { Link } from 'react-router-dom'

import dashboard from './images/dashboard.png'

import NavbarMain from './components/NavbarMain'
import Footer3 from './components/Footer3'

const Landingpage = () => {

    const isLoggedIn = localStorage.getItem('isLoggedIn')

    return (
        <div>
            <NavbarMain/>
            <div>
                <p className='head' style={{ fontSize: '25px', marginTop: '30px', marginLeft: '100px' }}>
                    Welcome to ScanHubGen!</p>
            </div>
            <div>
                <p style={{ marginTop: '20px', fontWeight: '400', fontSize: '20px', marginLeft: '150px', lineHeight: '30px', maxWidth: '1300px' }}>
                    ScanHubGen, seamlessly <b>generate and affix QR code</b> embedding your crucial contact particulars at your discretion.
                    In situations of lost belongings or emergencies, individuals can effortlessly scan the QR code, expeditiously accessing
                    the requisite information and establishing a prompt and effective connection with the designated owner.
                    Elevate security and convenience through our sophisticated, user-centric platform, guaranteeing the safeguarding of
                    possessions and well-being with utmost professionalism.</p>
                <hr style={{ marginTop: '20px', marginLeft: '100px', maxWidth: '1400px' }} />
            </div>
            
            <div>
                <p className='head' style={{ fontSize: '25px', marginTop: '30px', marginLeft: '100px' }}>
                    Secure Connections Made Simple</p>
            </div>

            <div className="item__layout">
                <div className="flex-item">
                    <img className="item1" src='https://me-qr.com/data/front/static_preview/651415ebca4c28.80230463.png' />
                    <p class="item-body">Admin site generation</p>
                    <p class="item-stat">Empower safety and connection with your personalized QR code. Swiftly connect in times of need for 
                    enhanced security.</p>
                    <button className='button2'>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to='/generate'>Enter</Link>
                    </button>
                </div>

                <div className="flex-item">
                    <img className="item1" src='https://uniqode.wpengine.com/wp-content/uploads/2019/07/Bulk.png' />
                    <p class="item-body">Mass Generation QR</p>
                    <p class="item-stat">Enter the required number and generate the qr which are readymade to be printed when needed.</p>
                    <button className='button2'>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to='/massgen'>Enter</Link>
                    </button>
                </div>
                {isLoggedIn ? (
                    <div className="flex-item" style={{}}>
                        <img className="item1" src={dashboard} style={{height:'150px',width:'175px',margin:'0 auto'}} />
                        <h1 class="item-body">Dashboard</h1>
                        <p class="item-stat">Swiftly access all the user details, upto date and edit the details when needed for the changes.</p>
                        <button className='button2'> <Link to='/dashboard' style={{ color: 'white', textDecoration: 'none' }}>Enter</Link> </button>
                    </div>
                ) : (
                    <>
                    </>
                )}
            </div>

            <Footer3 />
        </div>
    )
}

export default Landingpage