// frontend/src/components/QRCodeGenerator.js

import React, { useState } from 'react';
import axios from 'axios';
import './app.css'

import Qrcode from './components/Qrcode';
import Navbar from './components/Navbar';

import { Link } from 'react-router-dom';
import NavbarMain from './components/NavbarMain';

function QRCodeGenerator() {
  const [uniqueIdentifier, setUniqueIdentifier] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [personName, setPersonName] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');
  const [disease, setDisease] = useState('');
  const [allergies, setAllergies] = useState('');
  const [age, setAge] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [regularHospital, setRegularHospital] = useState('');
  const [doctor, setDoctor] = useState('');

  const [showQRCode, setShowQRCode] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleGenerateQRCode = async () => {
    try {
      const response = await axios.post('https://scanhubgen.vercel.app/generate-qrcode', {
        uniqueIdentifier: uniqueIdentifier,
        userDetails: {
          phoneNumber: phoneNumber,
          personName: personName,
          emergencyNumber: emergencyNumber,
          gender: gender,
          address: address,
          bloodGroup: bloodGroup,
        },
      });
      console.log(response)
      setQrCodeData(response.data.qrCodeData);
      setShowQRCode(true);
      setAnimate(true);
      alert('QR Code generated and user details saved successfully');
    } catch (error) {
      console.error(error);
      alert('Error generating QR Code');
    }
  };

  const handleClosePopup = () => {
    // Close the pop-up
    setShowQRCode(false);
    setAnimate(false);
  };

  const generateRandomString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
    setUniqueIdentifier(randomString);
  };

  console.log(showQRCode)

  return (
    <div>
      <NavbarMain />
      <div className='container'>
        <div className='header'>
          <h1 style={{ textAlign: 'center', fontFamily: 'Arial' }}>QR Generator - Provide Details</h1>
          <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' }} />
        </div>
        <div style={{ marginTop: '5px' }}>
          <label className="label" htmlFor="UniqueNumber">
            UniqueNumber
          </label>
          <input
            className="input-field"
            type="text"
            placeholder="UniqueKey..."
            name="Key"
            value={uniqueIdentifier}
            onChange={(e) => setUniqueIdentifier(e.target.value)}
          />
          <button onClick={generateRandomString}>Random Generator</button>
        </div>
        <div style={{ marginTop: '5px' }}>
          <label className="label" htmlFor="Name">
            Name
          </label>
          <input
            className="input-field"
            type="text"
            placeholder="Name..."
            name="Name"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="gender">
            Gender
          </label>
          <select className="select-field" name="gender" onChange={(e) => setGender(e.target.value)}>
            <option value="" disabled>--Select gender--</option>
            <option value="M" >Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div>
          <label className="label" htmlFor="Primary">
            Contact No
          </label>
          <input
            className="input-field"
            type="number"
            placeholder="Primary No..."
            name="Primary"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="Secondary">
            Emergency contact
          </label>
          <input
            className="input-field"
            type="number"
            placeholder="Emergency contact..."
            name="Secondary"
            value={emergencyNumber}
            onChange={(e) => setEmergencyNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="group">
            Blood Group
          </label>
          <select className="select-field" name="group" onChange={(e) => setBloodGroup(e.target.value)}>
            <option value="" disabled>--Select Bloog group--</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div>
          <label className="label" htmlFor="address">
            Address:
          </label>
          <textarea
            type="text"
            placeholder="Enter Address"
            value={address}
            rows={"6"}
            style={{ width: "100%", resize: 'none', paddingLeft: '5px', border: '1px solid rgba(0,0,0,0.3)', borderRadius: '5px' }}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label className="label" htmlFor="Secondary">
            Disease <span style={{ color: 'green', fontWeight: '400', fontSize: '10px' }}>optional</span>
          </label>
          <input
            className="input-field"
            type="text"
            name="disease"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="Secondary">
            Allegries <span style={{ color: 'green', fontWeight: '400', fontSize: '10px' }}>optional</span>
          </label>
          <input
            className="input-field"
            type="text"
            name="allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="Secondary">
            Regular Hospital <span style={{ color: 'green', fontWeight: '400', fontSize: '10px' }}>optional</span>
          </label>
          <input
            className="input-field"
            type="text"
            name="regularHospital"
            value={regularHospital}
            onChange={(e) => setRegularHospital(e.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="Secondary">
            Doctor <span style={{ color: 'green', fontWeight: '400', fontSize: '10px' }}>optional</span>
          </label>
          <input
            className="input-field"
            type="text"
            name="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
        </div>

        <button className="button" type="button" style={{ marginTop: '20px' }} onClick={handleGenerateQRCode}>
          Generate QR
        </button>

        <Qrcode
          detailsString={qrCodeData}
          showQRCode={showQRCode}
          animate={animate}
          handleClosePopup={() => { setShowQRCode(false); setAnimate(false); }}
        />
      </div>
    </div>
  );
}

export default QRCodeGenerator;
