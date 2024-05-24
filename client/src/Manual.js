import React from 'react';

import NavbarMain from './components/NavbarMain';
import Footer3 from './components/Footer3';


const Manual = () => {
    return (
        <>
            <NavbarMain />
            <div style={{ paddingLeft: '100px', paddingTop: '100px' }}>
                <div>
                    <span style={{ textDecoration: 'underline', fontSize: '18px', fontWeight: 'bold' }}>QR Emergency Card User Manual</span>
                </div>

                <div style={{ maxWidth: '1200px' }}>
                    <h1 style={{ marginTop: '20px', fontWeight: '500', fontSize: '18px', color: '#DF2C2C' }}>1. Introduction</h1>
                    <p style={{ marginTop: '5px' }}>The QR Emergency Card is a digital tool designed to provide quick access to your emergency contact
                        and medical information in case of an emergency. It uses a QR code that can be scanned by first responders or
                        anyone with a smartphone. This user manual will guide you through the process of using the QR Emergency Card.</p>
                </div>

                <div>
                    <h1 style={{ marginTop: '20px', fontWeight: '500', fontSize: '18px', color: '#DF2C2C' }}>2. Getting Started</h1>
                    <p style={{ marginTop: '5px', color: '#16B40A', marginBottom: '5px' }}>2.1 What You'll Need</p>
                    <p>To use the QR Emergency Card, you'll need the following:</p>
                    <li>Fill in all your details, generate your own QR code, and download it as a PNG file.</li>
                    <li>Access to the internet to register and update your information.</li>

                    <p style={{ marginTop: '15px', color: '#16B40A', marginBottom: '5px' }}>2.2 Registering Your QR Emergency Card</p>
                    <p style={{ marginTop: '5px', marginBottom: '5px' }}>Follow these steps to register your QR Emergency Card:</p>
                    <li>Open your smartphone's web browser.</li>
                    <li>Click on to get up your personalized QR</li>
                    <li>Fill out the required information, including your name, emergency contacts, medical conditions,
                        and any relevant allergies or medications.</li>
                    <li>Follow the on-screen instructions to confirm your registration.</li>
                    <li>Once registered, you can download your QR and make it as a physicial product and use it everywhere.!</li>
                </div>

                <div>
                    <h1 style={{ marginTop: '20px', fontWeight: '500', fontSize: '18px', color: '#DF2C2C' }}>3. Updating Your Emergency Information</h1>
                    <p style={{ marginTop: '5px', marginBottom: '5px' }}>It's important to keep your emergency information up to date. Follow these steps to update your QR Emergency Card:</p>
                    <li>Just in the bottom down in the footer you can look up to the E-mail onclick will redirect to the mail and message
                        us the required changes in your Qr code. </li>
                </div>

                <div>
                    <h1 style={{ marginTop: '20px', fontWeight: '500', fontSize: '18px', color: '#DF2C2C' }}>4. Using the QR Emergency Card</h1>
                    <p style={{ marginTop: '5px', marginBottom: '5px' }}>In an emergency, your QR Emergency Card can be a lifesaver. Here's how to use it:</p>
                    <li>In case of an emergency, first responders or anyone with a smartphone can scan the QR code on your card using a QR code
                        scanner app.</li>
                    <li>The scanner will redirect them to the web page where your emergency information is stored.</li>
                    <li>They can access your name, emergency contacts, medical conditions, allergies, medications, and any other vital information
                        you provided during registration.</li>
                </div>

                <div>
                    <h1 style={{ marginTop: '20px', fontWeight: '500', fontSize: '18px', color: '#DF2C2C' }}>5. Emergency Procedures</h1>
                    <p style={{ marginBottom: '5px', marginTop: '5px' }}>In an emergency, remember the following procedures:</p>
                    <li>Stay calm and call 112 or the appropriate emergency number if necessary.</li>
                    <li>If conscious and able, inform first responders or helpers about your QR Emergency Card and how to access it.</li>
                    <li>Ensure your QR code is easily accessible on your person, for example, in your wallet, phone case, or as a pendant.</li>
                </div>

                <div>
                    <h1 style={{ marginTop: '20px', fontWeight: '500', fontSize: '18px', color: '#DF2C2C' }}>6. Contact Information</h1>
                    <p style={{ marginTop: '5px', marginBottom: '5px' }}>If you have any questions or need assistance, please contact our customer support team:</p>
                    <li> Email: abc@gmail.com</li>
                    <li> Phone: 9952090732 / 7904262162</li>
                </div>
            </div>
            <Footer3 />
        </>
    );
};

export default Manual;
