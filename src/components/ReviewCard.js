import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="review-card">
            <h3>{review.title}</h3>
            <p>{review.content}</p>
            <p><strong>Rating:</strong> {review.rating}</p>
        </div>
    );
};

export default ReviewCard;
