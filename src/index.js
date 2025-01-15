import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import App from './App';
import './App.css';

// Create a root element to enable concurrent features in React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
