import React, { useEffect, useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../Image/dllogo2.png'

const Contact = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (password.length < 10) {
      alert('Password should be at least 10 characters long.');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match. Please re-enter.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      // Proceed with creating the account
      navigate('/login');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div id='holer'>
      <center>
        <div className='cool'>
          <img src={img1} width={80} height={80}></img>
          <h1>DIGITAL-Library</h1>
        </div>
        <div id='rbody'>
          <h1 id='reg'>SIGNUP</h1>
          <h3 id='label'>FULL NAME</h3>
          <input type='text' placeholder='ENTER THE NAME' id='input' required></input>
          <h3 id='label'>EMAIL ID</h3>
          <input
            type='email'
            placeholder='EMAIL ID'
            id='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <h3 id='label'>PASSWORD</h3>
          <input
            type='password'
            placeholder='PASSWORD'
            id='input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <h3 id='label'>CONFIRM PASSWORD</h3>
          <input
            type='password'
            placeholder='CONFIRM PASSWORD'
            id='input'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          ></input>
          <br></br>
          <br></br>
          <button onClick={handleCreateAccount} id='regbutton'>
            CREATE AN ACCOUNT
          </button>
          <br></br>
          <br></br>
          <p id='nm'>
            ALREADY HAVE AN ACCOUNT?
            <a href='/login' id='mn'>
              {' '}
              LOGIN
            </a>
          </p>
        </div>
      </center>
    </div>
  );
};

export default Contact;
