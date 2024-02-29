//A text review a user can leave on a movie.

import React from 'react';

const Review = ({ author, content}) => {
  return (
    <div className="review">
      <div className="review-header">
        <span className="review-author">{author}</span>
      </div>
      <p className="review-content">{content}</p>
    </div>
  );
};

export default Review;
