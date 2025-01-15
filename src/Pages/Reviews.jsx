import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Reviews from './Reviews'; // Import the new Reviews component

const ParentComponent = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showReviews, setShowReviews] = useState(false); // State for showing reviews

  const handleSignIn = () => {
    console.log('User has signed in.');
    setIsAuthenticated(true);
  };

  const handleSignUp = () => {
    console.log('User has signed up.');
    setIsAuthenticated(true);
  };

  const handleBackToMain = () => {
    setShowReviews(false); // Hide the reviews and go back to the main content
  };

  const handleAddReview = () => {
    setShowReviews(true); // Show the reviews when clicked
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome! You are logged in.</h2>
          <button onClick={handleAddReview}>Review</button> {/* Button to show reviews */}
          {showReviews && <Reviews handleBackToMain={handleBackToMain} />} {/* Display Reviews */}
        </div>
      ) : (
        <div>
          {isSignIn ? (
            <SignInForm handleSignIn={handleSignIn} handleBackToMain={handleBackToMain} />
          ) : (
            <SignUpForm 
              handleSignUp={handleSignUp} 
              handleBackToMain={() => setIsSignIn(true)} 
            />
          )}
          <div>
            {isSignIn ? (
              <button onClick={() => setIsSignIn(false)}>Go to Sign Up</button>
            ) : (
              <button onClick={() => setIsSignIn(true)}>Go to Sign In</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentComponent;
