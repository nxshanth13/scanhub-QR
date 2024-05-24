import React from 'react';
import '../app.css'
import { Link,useNavigate } from 'react-router-dom'
import logo from '../images/logo2.png'



const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    }

    return (
        <nav className="navbar" style={{backgroundColor:'black',padding:'8px'}}>
            <div className="left-section">
                <Link to='/'>
                    <img className='logo' src={logo} alt='logo' style={{height:'60px',width:'130px',marginLeft:'20px'}} />
                </Link>
            </div>

            <div>
                <button onClick={handleLogout} style={{padding:'6px 14px',marginRight:'20px',fontWeight:'500',borderRadius:'10px',cursor:'pointer',backgroundColor:'#FFDD00',border:'none',}}>Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
