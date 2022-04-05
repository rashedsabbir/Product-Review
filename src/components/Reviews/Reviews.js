import React, { useEffect, useState } from 'react';

import Review from '../Review/Review';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('Reviews.JSON')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <br />
            <div className="container">
                <h2 className="mt-5 text-center title">Customer Review(6)</h2>
                <div className="review-container">
                    {
                        reviews.map(reviews => <Review
                            key={reviews.key}
                            review={reviews}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;