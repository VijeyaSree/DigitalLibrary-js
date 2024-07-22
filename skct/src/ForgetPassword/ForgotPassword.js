// ForgotPassword.js
import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send a password reset email
    // For the sake of this example, let's just display a message
    setMessage(`Password reset link has been sent to ${email}`);
    setEmail('');
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
