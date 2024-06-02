import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import call from "./images/call.webp";
import ambulance from "./images/ambulance.png";
import conversation from "./images/conversation.png";
import cross from "./images/cross.webp";
import card from "./images/card.png";
import download from "./images/download.png";
import history from "./images/history.png";
import update from "./images/update.png";
import logo from './images/logo2.png'
import flanzer1 from './images/flanzer1.png'
import siren from './images/siren.png'
import gif from './images/loading.gif'

import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import ConfirmationModal from "./components/ConfirmationModal";
import Footer3 from "./components/Footer3";

function QRCodeScanner() {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);
  const [showInfoPrompt, setShowInfoPrompt] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [expDate, setExpDate] = useState('')
  const { uniqueNumber } = useParams();
  const [infoData, setInfoData] = useState({
    personName: "",
    age:"",
    gender: "",
    bloodGroup: "",
    phoneNumber: "",
    emergencyNumber: "",
    address: "",
    profileImage: "",
    disease: "",
    allergies: "",
    regularHospital: "",
    doctor: "",
  });

  setTimeout(()=>{
    const gif = document.getElementById('loading-gif')
    gif.style.display = 'none'
  },1000)

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(
        `https://scanhubgen.vercel.app/user-details/${uniqueNumber}`
      );
      const user = response.data.user.userDetails;
      
      var existsInDB = true;
      if (user.address === "") {
        existsInDB = false;
      }
      if (existsInDB) {
        setUserDetails(user);
        const expirationDate = new Date(response.data.user.expirationDate);

        const formattedExpirationDate = expirationDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });

        setExpDate(formattedExpirationDate)

        setError(null);
      } else {
        setShowInfoPrompt(true);
      }
    } catch (error) {
      console.error(error);
      setError("Error fetching user details");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [uniqueNumber]);


  const handleInfoSubmit = async (e) => {
    setInfoData(e)
    console.log(infoData)
    setShowConfirmationModal(true);
    setTimeout(()=>{
      window.scrollTo(0, 2180);
    },500)
  };

  const handleSubmit = async () => {
    try {
      // Send request to backend
      await axios.post("https://scanhubgen.vercel.app/update-details", {
        uniqueIdentifier: uniqueNumber,
        userDetails: infoData,
      });
      console.log("User details saved successfully:");
      setShowConfirmationModal(false);
      window.location.reload();
      await fetchUserDetails();
      // Handle success message or redirect to another page
    } catch (error) {
      console.error("Error saving user details:", error.message);
      // Handle error message or display it to the user
    }
  };

  const handleContactDownload = () => {
    const printableContent =
      document.getElementById("printable-content").innerHTML;
    const printWindow = window.open("", "_blank");

    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>QR Codes</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
            <style>
              *{
                margin:0;
                padding:0;
                font-family:'Poppins';
                color:black;
              }
              .showdetails{
                width:50vw;
                margin:0 auto;
                text-align:center;
              }
            </style>
          </head>
          <body>${printableContent}</body>
        </html>
      `);
      printWindow.document.close();

      printWindow.print();
    } else {
      alert("Please allow pop-ups for this site to enable printing.");
    }
  };

  return (
    <div style={{ overflow: "hidden",minHeight:'100vh' }}>
      <nav className="navbar" style={{ backgroundColor: '#333', padding: '6px',display:'flex', alignItems:'center',zIndex:'100', justifyContent:'center',position:'sticky',top:'0',flexDirection:'column',boxShadow: "0 0 10px rgba(255, 255, 0, 0.9)", }}>
          <div className="left-section">
            <h1 style={{padding:'30px 0'}}>ScanHubGen</h1>
          </div>
          {/* <div style={{ display: 'flex', marginLeft: '10px', display: 'inline-block' }}>
              <span className="powered-by">
              <Link style={{ color: 'white', textDecoration: 'none', fontSize: '11px' }} target="_blank" to='https://www.theflanzer.com/'>
                  supported by</Link></span>
              <img style={{ height: '20px', paddingLeft: '5px',position:'relative',top:'6px' }} src={flanzer1} alt='flanzer1' />
          </div> */}
      </nav>

      <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'200px 0'}} id="loading-gif">
        <img src={gif}  style={{width:'50px',height:'50px'}} />
      </div>

      {error && <p>{error}</p>}
      {userDetails && (
        <div id="printable-content" style={{ overflow: "hidden", backgroundColor:'black' }}>
          <div
            className="showdetails"
            style={{
              boxShadow: "0 0 10px rgba(255, 255, 0, 0.9)",
              marginBottom: "100px",
              backgroundColor: 'black',
            }}
          >
            <h3 style={{color:'red',textAlign:'center'}}>Expire date : {expDate}</h3>
            <form>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    width: "100px",
                    borderRadius: "50px",
                    marginTop: "30px",
                    height: '100px',
                    objectFit: 'cover'
                  }}
                  src={userDetails.profileImage}
                />
                <p
                  style={{
                    color: "#E42A3C",
                    fontSize: "50px",
                    textAlign: "center",
                    position: "absolute",
                    right: "0",
                    bottom: "10px",
                    fontWeight: "600",
                  }}
                >
                </p>
              </div>
              <p style={{ color: "white", fontSize: "18px", marginTop: "8px" }}>
                {userDetails.personName}
              </p>
                <p style={{color:'#E42A3C'}}><b >Blood Group : {userDetails.bloodGroup}</b></p>
              <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginTop: "30px",
                    backgroundColor: "#E42A3C",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    letterSpacing: "1px",
                  }}
                >
                  Quick Calls
                </p>

              <div style={{ marginTop: "15px" }}>
                <a href="tel:112">
                  <img
                    style={{
                      height: "50px",
                      width: "50px",
                      objectFit: "cover",
                      paddingRight: "5px",
                    }}
                    src={call}
                    alt="call"
                  />
                </a>
                <a href="tel:102">
                  <img
                    style={{
                      height: "50px",
                      width: "50px",
                      objectFit: "cover",
                      paddingRight: "5px",
                      paddingLeft: "5px",
                    }}
                    src={ambulance}
                    alt="ambulance"
                  />
                </a>
                <a href="tel:100">
                  <img
                    style={{
                      height: "50px",
                      width: "50px",
                      objectFit: "cover",
                      borderRadius:'50%',
                      paddingLeft: "5px",
                    }}
                    src={siren}
                    alt="conversation"
                  />
                </a>
              </div>

              <div>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginTop: "30px",
                    backgroundColor: "#41a3e9",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    letterSpacing: "1px",
                  }}
                >
                  Personal Details
                </p>

                <div
                  style={{
                    color: "white",
                    fontSize: "16px",
                    marginTop: "10px",
                    textAlign: "left",
                    lineHeight: "28px",
                    letterSpacing: "1px",
                  }}
                >
                  <p><b>Gender:</b> {userDetails.gender}</p>
                  <p><b>Age:</b> {userDetails.age}</p>
                  <p><b>Contact no:</b> {userDetails.phoneNumber}</p>
                  <p><b>Emergency contact:</b> {userDetails.emergencyNumber}</p>
                  <p><b>Address:</b> {userDetails.address}</p>
                </div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    backgroundColor:'#FF782D',
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    letterSpacing: "1px",
                  }}
                >
                  Medical Information
                </p>

                <div
                  style={{
                    color: "white",
                    fontSize: "16px",
                    marginTop: "10px",
                    textAlign: "left",
                    lineHeight: "25px",
                    letterSpacing: "1px",
                  }}
                >
                  <p><b>Disease:</b> {userDetails.disease === "" ? "Nil" : userDetails.disease}</p>
                  <p><b>Allegries:</b> {userDetails.disease === "" ? "Nil" : userDetails.allergies}</p>
                  <p style={{ marginTop: "20px" }}>
                    <b>Regular hospital:</b> {userDetails.disease === "" ? "Nil" : userDetails.regularHospital}
                  </p>
                  <p><b>Doctor:</b> {userDetails.disease === "" ? "Nil" : userDetails.doctor}</p>
                </div>
              </div>

              <button
                style={{
                  backgroundColor: "#16B40A",
                  border: "none",
                  color: "white",
                  height: "40px",
                  width: "200px",
                  borderRadius: "8px",
                  marginTop: "40px",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                onClick={handleContactDownload}
              >
                Download This Page
              </button>

              <p style={{margin:'20px auto',color:'white',fontSize:'10px'}}><i>*For any changes contact Rayyanscan</i></p>

            </form>
          </div>
        </div>
      )}
      {showInfoPrompt && <InfoPrompt onSubmit={handleInfoSubmit} />}
      {showConfirmationModal && 
        <ConfirmationModal
          infoData={infoData}
          onClose={() => setShowConfirmationModal(false)}
          onSubmit={handleSubmit}
        />
      }
      <Footer3 />
    </div>
  );
}

function InfoPrompt({ onSubmit }) {
  const [infoData, setInfoData] = useState({
    personName: "",
    gender: "",
    age:"",
    bloodGroup: "",
    phoneNumber: "",
    emergencyNumber: "",
    address: "",
    profileImage: "",
    disease: "",
    allergies: "",
    regularHospital: "",
    doctor: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(infoData);
  };

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonClick = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };

  const handleImageChange = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      const res = reader.result;
      setInfoData((prevData) => ({
        ...prevData,
        profileImage: res,
      }));
    };
  };

  return (
    <div style={{padding:'15px'}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "30px",
        }}
      >
        <p className="head" style={{
          fontSize: "25px",
          '@media (max-width: 768px)': {
            fontSize: "15pxpx"
          }
        }}>
          Welcome to <b>RayyanScanhub!</b>
        </p>

        <div id="details-container">
          <p className="head1">
          <span style={{color:'#E42A3C',fontWeight:'400',fontSize:'23px'}}>*</span>Please do read through instructions and
            fill in the form below to ensure your information is securely
            stored.{" "}
          </p>
        </div>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "600" }}>
            Prior to filling in your details, carefully review the instructions.
          </h1>
          <div
            style={{
              fontSize: "18px",
              lineHeight: "25px",
              letterSpacing: "0.5px",
              paddingLeft: "20px",
              marginTop: "10px",
            }}
          >
            <ul>
              <li style={{ marginBottom: "10px" }}>
                Fill in your details accurately for safety. Make sure they're correct for future reference.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Complete all fields for emergencies. Quick help depends on your information.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Fill out every section for a strong safety plan. If you lose your QR, we can help.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Give detailed information at once. Contact us for any changes needed.
              </li>
            </ul>
          </div>
        </div>
        <div className="container" style={{width:'100%',padding:'0'}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <hr style={{ flex: 1, marginRight: "10px" }} />
            <p style={{ color: "gray" }}>Personal Details</p>
            <hr style={{ flex: 1, marginLeft: "10px" }} />
          </div>
          <form>
            <label className="label" htmlFor="Name">
              Profile Picture<span style={{color:'#E42A3C',fontWeight:'400',fontSize:'15px'}}>*</span>
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                margin:'15px 0'
              }}
            >
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
                required
              />
              <label
                htmlFor="imageInput"
                style={{
                  backgroundColor: "#E42A3C",
                  color: "white",
                  padding: "6px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize:'13px',
                  display:'flex',
                  columnGap:'10px'
                }}
              >
                <img src={update} alt="update" style={{ width: "20px", height: "20px",margin:'auto 0' }} /> 
                Update Profile Picture 
              </label>
              {infoData.profileImage && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <img
                    src={infoData.profileImage}
                    alt="profile"
                    style={{ width: "100px", height: "100px", borderRadius: "50px" }}
                  />
                </div>
              )}
            </div>

            <label className="label" htmlFor="Name">
              Full Name<span style={{color:'#E42A3C',fontWeight:'400',fontSize:'15px'}}>*</span>
            </label>
            <input
              className="input-field"
              type="text"
              placeholder="Name"
              name="personName"
              value={infoData.personName}
              onChange={handleInputChange}
              required
            />

            <label className="label" htmlFor="Age">
              Age<span style={{color:'#E42A3C',fontWeight:'400',fontSize:'15px'}}>*</span>
            </label>
            <input
              className="input-field"
              type="number"
              placeholder="Age"
              name="age"
              value={infoData.age}
              onChange={handleInputChange}
              required
            />

            <label className="label" htmlFor="gender">
            Gender<span style={{color:'#E42A3C',fontWeight:'400',fontSize:'15px'}}>*</span>
            </label>
            <select
              className="select-field"
              name="gender"
              value={infoData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                --Select gender--
              </option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>

            <label className="label" htmlFor="Primary">
            Contact No<span style={{color:'#E42A3C',fontWeight:'400',fontSize:'15px'}}>*</span>
            </label>
            <input
              className="input-field"
              type="number"
              placeholder="Primary No"
              name="phoneNumber"
              required
              value={infoData.phoneNumber}
              onChange={handleInputChange}
            />

            <label className="label" htmlFor="Secondary">
              Emergency contact<span style={{color:'#E42A3C',fontWeight:'400',fontSize:'15px'}}>*</span>
            </label>
            <input
              className="input-field"
              type="number"
              placeholder="Emergency contact"
              required
              name="emergencyNumber"
              value={infoData.emergencyNumber}
              onChange={handleInputChange}
            />

            <label className="label" htmlFor="group">
              Blood Group<span style={{color:'#E42A3C',fontWeight:'400',fontSize:'15px'}}>*</span>
            </label>
            <select
              className="select-field"
              name="bloodGroup"
              required
              value={infoData.bloodGroup}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                --Select Blood group--
              </option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>

            <label className="label" htmlFor="address">
              Address:
            </label>
            <textarea
              className="textarea-field"
              name="address"
              value={infoData.address}
              required
              onChange={handleInputChange}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
                marginTop: "30px",
              }}
            >
              <hr style={{ flex: 1, marginRight: "10px" }} />
              <p style={{ color: "gray" }}>Medical Details</p>
              <hr style={{ flex: 1, marginLeft: "10px" }} />
            </div>

            <div>
              <label className="label" htmlFor="disease">
                Disease<span style={{color:'green',fontWeight:'400',fontSize:'10px'}}>optional</span>
              </label>
              <textarea
                className="textarea-field"
                name="disease"
                value={infoData.disease}
                onChange={handleInputChange}
              />
              <label className="label" htmlFor="allegry">
                Allegries<span style={{color:'green',fontWeight:'400',fontSize:'10px'}}>optional</span>
              </label>
              <textarea
                className="textarea-field"
                name="allergies"
                value={infoData.allergies}
                onChange={handleInputChange}
              />
              <label className="label" htmlFor="hospital">
                Regular Hospital<span style={{color:'green',fontWeight:'400',fontSize:'10px'}}>optional</span>
              </label>
              <textarea
                className="textarea-field"
                name="regularHospital"
                value={infoData.regularHospital}
                onChange={handleInputChange}
              />
              <label className="label" htmlFor="doctor">
                Doctor<span style={{color:'green',fontWeight:'400',fontSize:'10px'}}>optional</span>
              </label>
              <textarea
                className="textarea-field"
                name="doctor"
                value={infoData.doctor}
                onChange={handleInputChange}
              />
            </div>

            <div
              style={{
                textAlign: "center",
                margin: "20px 0",
              }}
            >
              <button
                onClick={handleSubmit}
                style={{
                  backgroundColor: "#16B40A",
                  border: "none",
                  color: "white",
                  height: "40px",
                  width: "200px",
                  borderRadius: "8px",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
              >
                Save
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default QRCodeScanner;
