import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({ setShowLogin }) => {
    const [currState, setcurrState] = useState("Login")



    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
                </div>
                <div className="login-popup-input">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />}

                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing i agree to the term of use & privecy Policy.</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account?<span onClick={() => setcurrState("Sign Up")}>Click here</span></p>
                    : <p>Alredy have an account?<span onClick={() => setcurrState("Login")}>Login</span></p>

                }


            </form>
        </div>
    )
}

export default LoginPopup
