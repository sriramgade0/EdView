import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import './home.css';

// Import college images from src/assets/colleges/
import college1 from '../assets/colleges/engineering/college1.jpg';
import college2 from '../assets/colleges/engineering/college2.jpg';
import college3 from '../assets/colleges/engineering/college3.jpg';
import college4 from '../assets/colleges/engineering/college4.jpg';
import college5 from '../assets/colleges/engineering/college5.jpg';
import college6 from '../assets/colleges/engineering/college6.jpg';
import college7 from '../assets/colleges/engineering/college7.jpg';
import college8 from '../assets/colleges/engineering/college8.jpg';
import college9 from '../assets/colleges/engineering/college9.jpg';
import college10 from '../assets/colleges/engineering/college10.jpg';
import college11 from '../assets/colleges/medical/college11.jpg';
import college12 from '../assets/colleges/medical/college12.jpg';
import college13 from '../assets/colleges/medical/college13.jpg';
import college14 from '../assets/colleges/medical/college14.jpg';
import college15 from '../assets/colleges/medical/college15.jpg';
import college16 from '../assets/colleges/medical/college16.jpg';
import college17 from '../assets/colleges/medical/college17.jpg';
import college18 from '../assets/colleges/medical/college18.jpg';
import college19 from '../assets/colleges/medical/college19.jpeg';
import college20 from '../assets/colleges/medical/college20.jpg';
import college21 from '../assets/colleges/degree/college21.jpg';
import college22 from '../assets/colleges/degree/college22.jpeg';
import college23 from '../assets/colleges/degree/college23.jpg';
import college24 from '../assets/colleges/degree/college24.jpg';
import college25 from '../assets/colleges/degree/college25.jpg';
import college26 from '../assets/colleges/degree/college26.jpg';
import college27 from '../assets/colleges/degree/college27.jpg';
import college28 from '../assets/colleges/degree/college28.jpg';
import college29 from '../assets/colleges/degree/college29.jpg';
import college30 from '../assets/colleges/degree/college30.jpg';

const colleges = {
    engineering: [
        { id: 1, name: 'Dhanikula Institute of Technology', image: college1 },
        { id: 2, name: 'KL University', image: college2 },
        { id: 3, name: 'SRK Institute of Technology', image: college3 },
        { id: 4, name: 'Potti Shriramulu Institute of Technology', image: college4 },
        { id: 5, name: 'RK Engineering College', image: college5 },
        { id: 6, name: 'Siddartha Engineering College', image: college6 },
        { id: 7, name: 'Andhra loyola College', image: college7 },
        { id: 8, name: 'Vellore Institute of Technology', image: college8 },
        { id: 9, name: 'SRM Engineering College', image: college9 },
        { id: 10, name: 'Amrita Institute of Technology', image: college10 },
    ],
    medical: [
        { id: 11, name: 'Sibar dental College', image: college11 },
        { id: 12, name: 'Paramedical and allied sciences', image: college12 },
        { id: 13, name: 'Apollo Medical College', image: college13 },
        { id: 14, name: 'SV Institute of Medical Sciences', image: college14 },
        { id: 15, name: 'Sri gosalites Medical College', image: college15 },
        { id: 16, name: 'Nimra Institute of Medical Sciences', image: college16 },
        { id: 17, name: 'Karthikeya Medical College', image: college17 },
        { id: 18, name: 'Vikas Pharmacy College', image: college18 },
        { id: 19, name: 'Sapthagiri Medical College', image: college19 },
        { id: 20, name: 'Ramaiah Medical College', image: college20 },
    ],
    degree: [
        { id: 21, name: 'Sri Vijaya Vidyalaya College of Arts and Science', image: college21 },
        { id: 22, name: 'VHS College of Arts & Sciences', image: college22 },
        { id: 23, name: 'Gandhiji womens Degree College', image: college23 },
        { id: 24, name: 'Krishnaveni Degree College', image: college24 },
        { id: 25, name: 'Andhra Loyola degree College', image: college25 },
        { id: 26, name: 'Gowtham degree college', image: college26 },
        { id: 27, name: 'Govt Degree College', image: college27 },
        { id: 28, name: 'Nalanda Degree College', image: college28 },
        { id: 29, name: 'Siddartha college of Arts and Sciences', image: college29 },
        { id: 30, name: 'St josephs Degree College', image: college30 },
    ],
};

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('engineering');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            {/* <SearchBar /> */}
            <section className="college-categories">
                <h2>Select College Category</h2>
                <div className="category-buttons">
                    <button onClick={() => handleCategoryChange('engineering')}>Engineering</button>
                    <button onClick={() => handleCategoryChange('medical')}>Medical</button>
                    <button onClick={() => handleCategoryChange('degree')}>Degree</button>
                </div>
            </section>

            <section className="college-list">
                {colleges[selectedCategory].map((college) => (
                    <div key={college.id} className="college-card">
                        <img src={college.image} alt={college.name} />
                        <h3>{college.name}</h3>
                        <Link to={`/college-details/${college.id}`}>View Details</Link>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Home;
