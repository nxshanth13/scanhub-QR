import React from 'react'
import { Link } from 'react-router-dom'

import NavbarMain from './components/NavbarMain'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faBusinessTime, faTruckMedical, faLifeRing, faBolt } from '@fortawesome/free-solid-svg-icons'

import QR from './images/scan.jpg'
import safety from './images/safety.jpg'
import mission1 from './images/mission1.webp'
import qrtest from './images/qrtest.jpg'
import Footer3 from './components/Footer3'

const HomePage = () => {
  return (
    <div>
      <NavbarMain />
      <section className='mainLand'>
        <div className='leftLand'>
          <img src={QR} style={{width:'100%',height:'60%'}} />
        </div>
        <div className='rightLand'>
          <h4>WELCOME TO SCANHUB</h4>
          <h1>A QR CODE CAN SAVE YOUR LIFE</h1>
          <p>ScanHub Info Services is an emergency information QR code system that  can be a helpful way to provide crucial information to first responders or anyone who needs it in case of an emergency. This QR code can be placed on a physical item like a wallet card, phone case, or even on your smartphone's lock screen</p>
          <Link to='/features'><button>Proceed Now!</button></Link>
        </div>
      </section>
      <section className='safetySection'>
        <img src={safety} />
        <div className='overlay2'></div>
        <div className='safetyContents'>
          <h1>Your safety is our priority</h1>
          <p>At ScanHubGen, we believe in safeguarding lives with cutting-edge technology. Our mission is simple: to provide quick and easy access to critical medical information during emergencies. With our QR code medical emergency cards, you'll have peace of mind knowing that crucial details about your health are just a scan away.</p>
        </div>
      </section>
      <section className='missionUs'>
        <div className='topMission'>
          <h1>Our Mission</h1>
          <p>Recieving inputs from clients and giving you the best service, in a short period of time, at a low of cost process.</p>
        </div>
        <div className='imageUs'>
          <img src={mission1} />
          <img src='' />
          <img src='' />
          <img src='' />
        </div>
      </section>
      <section className='howItWorks'>
        <img src={qrtest} style={{height:'100%',width:'30%'}} />
        <div className='howItDiv'>
          <div>
            <h1>SCAN THE QR CODE</h1>
            <h3>AND SEE HOW IT WORKS!</h3>
          </div>
          <Link to='/manual' style={{width:'80%'}}>
            <button className='card-btn'  style={{backgroundColor:'transparent',border:'2px solid #333'}}>See how the page will look like
            <FontAwesomeIcon icon={faBolt} style={{color: "#100f0f", marginLeft: '8px'}} />
            </button>
          </Link>
        </div>
      </section>
      <h1 style={{margin:'20px 0',color:'#333',textAlign:'center',width:'100%'}}>Why Us ?</h1>
      <section className='featureSection'>
        <div>
          <FontAwesomeIcon icon={faHandHoldingDollar}></FontAwesomeIcon>
          <h3>Free Cost</h3>
          <p>We are a customer basis service to help people.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faBusinessTime}></FontAwesomeIcon>
          <h3>No Downtime</h3>
          <p>Our service is guaranteed to run for 24hrs per day.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faTruckMedical}></FontAwesomeIcon>
          <h3>Medical Analysis</h3>
          <p>It will also show the medical conditions of an user.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faLifeRing}></FontAwesomeIcon>
          <h3>Saves Your Life</h3>
          <p>Life is unpredictable, but your safety doesn't have to be compromised.</p>
        </div>
      </section>
      <Footer3 />
    </div>
  )
}

export default HomePage