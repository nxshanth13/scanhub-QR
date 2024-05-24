import React from 'react'

import pic from './images/a.jpeg'

import NavbarMain from './components/NavbarMain'
import Footer3 from './components/Footer3'

const Aboutus = () => {
    return (
        <>
            <NavbarMain />
            <h1 style={{ marginTop: '30px', textAlign: 'center' }}>About us</h1>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>Finding Inspiration in Every Turn</p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                <p style={{ maxWidth: '740px', textAlign: 'center' }}>Welcome to Scanhub, your reliable provider of Emergency QR Code Cards.Are you ready for unforeseen emergencies?
                    At Scanhub, we offer a distinctive and cutting-edge solution to enable individuals and organizations to react promptly and effectively
                    during urgent situations. Our Emergency QR Code Cards are created with your safety as the foremost concern.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                <img style={{ width: '35%', }} src={pic} alt='' />
            </div>
            <div className='about_us'>
                <div>
                    <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Our Story</h1>
                    <div style={{ backgroundColor: 'black', height: '3px', width: '50px', margin: '10px auto 60px auto' }}></div>
                </div>
                <div style={{ marginLeft: '300px', marginRight: '220px', marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '20px', marginBottom: '5px', fontWeight: '500' }}>Who are we?</h1>
                    <p>At Scanhub, our team consists of committed individuals united by a common passion for enhancing emergency
                        response with technology. Our mission is to offer an easy-to-use yet impactful solution that can save lives
                        during critical moments.</p>

                    <h1 style={{ marginTop: '20px', fontSize: '20px', fontWeight: '500', marginBottom: '3px' }}>Our Mission</h1>
                    <p>Seamlessly generate and affix QR code embedding your crucial contact particulars at your discretion.
                        Elevate security and convenience through our sophisticated, user-centric platform, guaranteeing the safeguarding of
                        possessions and well-being with utmost professionalism.</p>

                    <h1 style={{ marginTop: '20px', fontSize: '20px', fontWeight: '500', marginBottom: '3px' }}>The Scanhub story</h1>
                    <p>Our journey began with a personal experience that highlighted the need for a more efficient way to share personal and vital medical
                        information with first responders during emergencies. This experience ignited the creation of Scanhub as a
                        solution to this pressing issue.</p>

                    <h1 style={{ marginTop: '20px', fontSize: '20px', fontWeight: '500', marginBottom: '3px' }}>Our Commitment to Privacy and Security</h1>
                    <p>We understand the sensitivity of medical information. That's why we've implemented stringent security measures to
                        safeguard your data. You're in control of who can access your information through your QR code.</p>

                    <h1 style={{ marginTop: '20px', fontSize: '20px', fontWeight: '500', marginBottom: '3px' }}>Join us</h1>
                    <p>Join us on our mission to make the world a safer place during emergencies.
                        Get our QR code and incorporate it into your daily routine to experience the peace of mind that comes
                        from being prepared for life's unexpected twists and turns.</p>
                </div>
            </div>
            <Footer3 />
        </>

    )
}

export default Aboutus