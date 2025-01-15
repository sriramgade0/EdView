import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const ParentComponent = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showColleges, setShowColleges] = useState(false); // State for showing college buttons

  const handleSignIn = () => {
    console.log('User has signed in.');
    setIsAuthenticated(true);
  };

  const handleSignUp = () => {
    console.log('User has signed up.');
    setIsAuthenticated(true);
  };

  const handleBackToMain = () => {
    console.log('Navigating back to main.');
  };

  const handleAddReview = () => {
    console.log('Navigating to Add Review page.');
  };

  const handleReviewClick = () => {
    setShowColleges(true); // Show college buttons when "Review" is clicked
  };

  // List of colleges
  const colleges = [
    'Dhanikula Institute of Technology',
    'KL University',
    'SRK Institute of Technology',
    'Potti Shriramulu Institute of Technology',
    'RK Engineering College',
    'Siddartha Engineering College',
    'Andhra Loyola College',
    'Vellore Institute of Technology',
    'SRM Engineering College',
    'Amrita Institute of Technology',
    'Sibar Dental College',
    'Paramedical and Allied Sciences',
    'Apollo Medical College',
    'SV Institute of Medical Sciences',
    'Sri Gosalites Medical College',
    'Nimra Institute of Medical Sciences',
    'Karthikeya Medical College',
    'Vikas Pharmacy College',
    'Sapthagiri Medical College',
    'Ramaiah Medical College',
    'Sri Vijaya Vidyalaya College of Arts and Science',
    'VHS College of Arts & Sciences',
    'Gandhiji Women\'s Degree College',
    'Krishnaveni Degree College',
    'Andhra Loyola Degree College',
    'Gowtham Degree College',
    'Govt Degree College',
    'Nalanda Degree College',
    'Siddartha College of Arts and Sciences',
    'St Joseph\'s Degree College'
  ];

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome! You are logged in.</h2>
          <button onClick={handleAddReview}>Review</button> {/* Change to Review */}
          {showColleges && (
            <div>
              {colleges.map((college, index) => (
                <button key={index} onClick={() => console.log(`${college} clicked`)}>
                  {college}
                </button>
              ))}
            </div>
          )}
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
