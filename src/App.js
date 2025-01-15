import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Header from './components/Header';
import Home from './Pages/Home';
import CollegeDetails from './Pages/CollegeDetails';
import Comparison from './Pages/Comparison';
import SignIn from './Pages/SignInForm';
import SignUp from './Pages/SignUpForm';
import './App.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSignIn = () => {
        setIsAuthenticated(true);
    };

    const handleSignOut = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('token'); // Optionally clear the token on sign out
    };

    return (
        <Provider store={store}>
            <Router>
                <Header isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/college-details/:id" element={<CollegeDetails />} />
                    <Route path="/comparison" element={<Comparison />} />
                    <Route path="/signin" element={<SignIn handleSignIn={handleSignIn} />} />
                    <Route path="/signup" element={<SignUp handleSignIn={handleSignIn} />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
