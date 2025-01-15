import React, { useState } from 'react';

const UniversityDetails = ({ university }) => {
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('');
    const [yearOfStudy, setYearOfStudy] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            reviewer: 'Anonymous', // You can change this to ask for the reviewer's name
            rating: parseFloat(rating),
            comment: comment,
            date: new Date().toISOString().split('T')[0], // Current date
        };

        // Add the new review to the university reviews
        university.reviews.push(newReview);
        // Reset the form fields
        setComment('');
        setRating('');
        setYearOfStudy('');
        setShowReviewForm(false); // Hide the form after submission
    };

    return (
        <div>
            <h2>{university.name}</h2>
            <p>{university.description}</p>
            {/* Other university details */}

            <button onClick={() => setShowReviewForm(!showReviewForm)}>
                {showReviewForm ? 'Cancel' : 'Add Review'}
            </button>

            {showReviewForm && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Comment:</label>
                        <input
                            type="text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Rating:</label>
                        <input
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            min="1"
                            max="5"
                            required
                        />
                    </div>
                    <div>
                        <label>Year of Study:</label>
                        <input
                            type="text"
                            value={yearOfStudy}
                            onChange={(e) => setYearOfStudy(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}

            <div>
                <h3>Reviews:</h3>
                {university.reviews && university.reviews.length > 0 ? (
                    university.reviews.map((review) => (
                        <div key={review.date}>
                            <h4>{review.reviewer} - {review.rating} ⭐</h4>
                            <p>{review.comment}</p>
                            <p>{review.date}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews available.</p>
                )}
            </div>
        </div>
    );
};

export default UniversityDetails;
