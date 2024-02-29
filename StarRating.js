//A reusable component for rating movies.

import React from 'react';
import './Stars.css'; // Import CSS file for styling

class StarsRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverRating: 0, // Track the rating being hovered over
            selectedRating: props.initialRating || 0 // Track the selected rating
        };
    }

    handleStarHover = (rating) => {
        this.setState({ hoverRating: rating });
    };

    handleStarClick = (rating) => {
        this.setState({ selectedRating: rating });
        if (this.props.onRateChange) {
            this.props.onRateChange(rating);
        }
    };

    render() {
        const { totalStars } = this.props;
        const { hoverRating, selectedRating } = this.state;

        const stars = [];

        for (let i = 1; i <= totalStars; i++) {
            stars.push(
                <span
                    key={i}
                    className={i <= (hoverRating || selectedRating) ? "star filled" : "star"} // Apply filled class if hoverRating or selectedRating is greater than or equal to star index
                    onMouseEnter={() => this.handleStarHover(i)} // Handle onMouseEnter event
                    onMouseLeave={() => this.handleStarHover(0)} // Handle onMouseLeave event
                    onClick={() => this.handleStarClick(i)} // Handle onClick event
                >
                    &#9733;
                </span>
            );
        }

        return (
            <div className="stars">
                {stars}
            </div>
        );
    }
}

export default StarsRating;