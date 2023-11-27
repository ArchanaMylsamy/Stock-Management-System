import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from  '../Dashboard';
import './Login.css'; // Import your CSS file

const YourComponent = () => {
  const loginTextRef = useRef(null);
  const loginFormRef = useRef(null);
  const loginBtnRef = useRef(null);
  const signupBtnRef = useRef(null);
  const signupLinkRef = useRef(null);

  const switchToSignup = () => {
    loginFormRef.current.style.marginLeft = '-50%';
    loginTextRef.current.style.marginLeft = '-50%';
  };

  const switchToLogin = () => {
    loginFormRef.current.style.marginLeft = '0%';
    loginTextRef.current.style.marginLeft = '0%';
  };

  const switchForm = () => {
    signupBtnRef.current.click();
    return false;
  };

  return (
    <div className='Loginpage'>
    <div className="wrapper">
      <p className='stockhead'>Stock Management System</p>
      <div className="title-text">
      
        <div ref={loginTextRef} className="title login">Login</div>
        <div className="title signup">Signup</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" defaultChecked />
          <input type="radio" name="slide" id="signup" />
          <label htmlFor="login" className="slide login" onClick={switchToLogin}>Login</label>
          <label htmlFor="signup" className="slide signup" onClick={switchToSignup}>Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form action="#" className="login" ref={loginFormRef}>
            <p className='sidehead'>Login to start your session!!</p>
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
           <Link to="/Dashboard"> <div className="field btn">
              <div className="btn-layero"></div>
              <input type="submit" value="Login" />
            </div></Link>
            <div className="signup-link">
              Not a member?      Signup now
            </div>
          </form>
          <form action="#" className="signup">
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Confirm password" required />
            </div>
            <div className="field btn">
              <div className="btn-layero"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default YourComponent;
