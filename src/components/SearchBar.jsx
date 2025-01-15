import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file for styles

const SearchBar = () => {
    const [query, setQuery] = useState(''); // State to hold the search query

    const handleInputChange = (e) => {
        setQuery(e.target.value); // Update the query state as user types
    };

    const handleSearch = () => {
        // Implement search functionality here
        // For example, you can use the query to filter a list of colleges
        console.log('Searching for:', query);
        // Add your search logic or API call here
    };

    return (
        <section className="search-bar">
            <input
                type="text"
                placeholder="Search for College"
                value={query} // Bind the input value to the state
                onChange={handleInputChange} // Handle input change
            />
            <button onClick={handleSearch}>Search</button> {/* Call search on button click */}
        </section>
    );
};

export default SearchBar;
