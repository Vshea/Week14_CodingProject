//A list of reviews

import React from 'react';
import Review from './Review'; 

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => (
        <Review
          key={review.id} 
          author={review.author}
          content={review.content}
        />
      ))}
    </div>
  );
};

export default ReviewList;