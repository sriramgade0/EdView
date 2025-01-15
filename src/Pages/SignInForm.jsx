import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignInForm.css';

const SignInForm = ({ handleSignIn = () => {} }) => { // Default to an empty function
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  const navigate = useNavigate(); // Initialize navigate for programmatic routing

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error messages
    setIsSubmitting(true); // Disable form while submitting

    try {
      const response = await axios.post(`http://localhost:9000/api/login`, formData);
      console.log('User signed in successfully:', response.data);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Save token in localStorage
        handleSignIn(); // Call parent function to update state
        navigate('/'); // Redirect to homepage after successful sign-in
      }
    } catch (error) {
      console.error('Error signing in:', error); // Log the full error
      const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
      setError(message); // Show error message to user
    } finally {
      setIsSubmitting(false); // Re-enable form
    }
  };

  // Handle back button to go to the homepage
  const handleBackToMain = () => {
    navigate('/'); // Redirect to homepage
  };

  return (
    <div className="signin-form">
      <h2>Sign In</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Signing In...' : 'Submit'}
        </button>
      </form>
      <button onClick={handleBackToMain} disabled={isSubmitting}>
        Back to Main
      </button>
    </div>
  );
};

export default SignInForm;
