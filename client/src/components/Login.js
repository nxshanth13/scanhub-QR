import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Footer from './Footer'
import '../app.css'
import logo from '../images/logo2.png'
import flanzer1 from '../images/flanzer1.png'
import Footer3 from './Footer3'

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        if (email === "admin@gmail.com" && password === "123") {
            console.log("yes")
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/')
        } else {
            console.log("no")
        }
    }

    return (
        <>
            <nav className="navbar" style={{ backgroundColor: '#333', padding: '4px',display:'flex', alignItems:'center',zIndex:'100', justifyContent:'center',position:'sticky',top:'0',flexDirection:'column',boxShadow: "0 0 10px rgba(255, 255, 0, 0.9)", }}>
                <div className="left-section">
                <h1 style={{padding:'20px 0'}}>ScanHubGen</h1>
                </div>
                {/* <div style={{ display: 'flex', marginLeft: '10px', display: 'inline-block' }}>
                    <span className="powered-by">
                    <Link style={{ color: 'white', textDecoration: 'none', fontSize: '11px' }} target="_blank" to='https://www.theflanzer.com/'>
                        supported by</Link></span>
                    <img style={{ height: '20px', paddingLeft: '5px',position:'relative',top:'6px' }} src={flanzer1} alt='flanzer1' />
                </div> */}
            </nav>

            <div className='loginContainer' style={{ marginBottom: '50px' }}>
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{ margin: '10px 0', }}>Lets Sign you in</h1>
                    <p style={{ margin: '10px 0', }}>Welcome Back Admin,<br />You have been missed</p>
                    <input typeof='text' placeholder='Email , Register number' onChange={(e) => { setEmail(e.target.value) }} className='username' style={{}}></input>
                    <input typeof='text' placeholder='Password' className='password' onChange={(e) => { setPassword(e.target.value) }}></input>
                    <button className='loginButton' style={{backgroundColor:'#333'}} onClick={handleSubmit}>Sign in</button>
                </form >
            </div >

            <Footer3 />
        </>
    )
}