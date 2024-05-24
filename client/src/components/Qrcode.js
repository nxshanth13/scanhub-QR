import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';


const Qrcode = ({ detailsString, showQRCode, animate, handleGenerateQRCode }) => {
  const qrCodeAnimation = useSpring({
    opacity: showQRCode ? 1 : 0,
    transform: showQRCode ? 'scale(1)' : 'scale(0)',
  });

  const download = () => {
    document.querySelector('.button1').addEventListener('click', function() {
      const img = document.getElementById('myImage');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'image.png';
      
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    window.onload = function() {
      const img = document.getElementById('myImage');
      img.style.display = 'block';
      img.onload = function() {
        img.style.display = 'none';
      }
    }
  }

  return (
    showQRCode && (
      <>
        <div className={`overlay ${animate ? 'zoom-in white-popup' : ''}`}/>
        <animated.div className={`qr-code ${animate ? 'zoom-in white-popup' : ''}`} style={qrCodeAnimation} onTransitionEnd={handleGenerateQRCode}>
          <div>
            <p className='qr-header'>Your information has been submitted successfully.</p>
          </div>
          <img src={detailsString} id='myImage'/>
          <div>
            <button className='button1' onClick={download}>Save as PNG</button>
            <span className="close-btn"><Link to='/'>X</Link></span>
          </div>
        </animated.div>
      </>
    )
  );
};

export default Qrcode;
