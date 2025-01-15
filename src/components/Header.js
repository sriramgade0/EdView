import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to include this line if you have specific styles for the header
import logo from '../assets/logo.jpg'; // Adjust the path according to your project structure

const Header = ({ isAuthenticated, onSignOut }) => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="EdView Logo" />
                </div>
                <h1>EdView</h1>
                <div className="header-buttons">
                    {isAuthenticated ? (
                        <>
                            <button onClick={onSignOut}>Sign Out</button>
                            {/* <Link to="/add-review">
                                <button></button>
                            </Link> */}
                        </>
                    ) : (
                        <>
                            <Link to="/signin">
                                <button>Sign In</button>
                            </Link>
                            <Link to="/signup">
                                <button>Sign Up</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
