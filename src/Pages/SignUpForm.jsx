import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css';

const SignUpForm = ({ handleSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:9000/api/register`, formData);
      console.log(response.data);
      
      handleSignUp(); // Call handleSignUp after successful registration
      navigate('/'); // Redirect to homepage after successful sign-up
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'Successfully Registered! Click on Sign In.';
      
      console.error('Error signing up:', errorMessage);
      setError(errorMessage);
    }
  };

  const goToSignIn = () => {
    navigate('/signin'); // Navigate to the SignIn page
  };

  return (
    <div className="sign-up-form">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
        <button type="button" onClick={goToSignIn}>Sign In</button> {/* Navigate to SignIn */}
      </form>
    </div>
  );
};

export default SignUpForm;
