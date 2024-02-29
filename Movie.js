import React, { useState } from 'react';
import StarsRating from './StarRating.js';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import './Movie.css';

const Movie = ({ movie }) => {
    const { id, image, title, synopsis, reviews } = movie;

    // State to manage the list of reviews
    const [movieReviews, setMovieReviews] = useState(reviews || []);

    // Function to add a new review
    const addReview = (newReview) => {
        // Generate a unique ID for the new review
        const id = Math.random().toString(36).substr(2, 9);
        // Add the new review to the existing list of reviews
        setMovieReviews([...movieReviews, { id, ...newReview }]);
    };

    return (
        <div className="movie-container row">
            <div className="col-md-8">
                <div className="movie">
                    <img src={image} alt={title} className="card-img-top img-fluid" style={{ maxWidth: '150px' }} />
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{synopsis}</p>
                    <p className="card-text"><small className="text-muted">Rating: {movie.rating}</small></p>
                    <StarsRating totalStars={5} initialRating={movie.rating} readOnly={true} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="review-box">
                    <h2>Reviews for {title}</h2>
                    {/* Pass the list of reviews to the ReviewList component */}
                    <ReviewList reviews={movieReviews} />
                    {/* Pass the addReview function as a prop to ReviewForm */}
                    <ReviewForm addReview={addReview} />
                </div>
            </div>
        </div>
    );
};

export default Movie;