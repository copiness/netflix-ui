// Register.jsx
import { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './register.scss';

function Register() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/home')

  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="./netflix.png" alt="" />
         
            <button className="loginButton">
              <NavLink to='/login'>Sign In</NavLink>
              
              
              </button>
          
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input">
          <input
            type="email"
            placeholder="email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="registerButton" onClick={handleRegister}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
