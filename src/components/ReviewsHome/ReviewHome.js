import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewHome from '../ReviewHome/ReviewHome';
import './ReviewHome.css'

const ReviewsHome = () => {
    const [reviewHome, setReviewHome] = useState([])
    useEffect(() => {
        fetch('reviewHome.Json')
            .then(res => res.json())
            .then(data => setReviewHome(data))
    }, [])
    return (
        <div className="container">
            <h2 className="mt-5 text-center title">Customer Review(3)</h2>
            <div className="review-container">
                {
                    reviewHome.map(reviewHome => <ReviewHome
                        key={reviewHome.key}
                        review={reviewHome}
                    ></ReviewHome>)
                }
            </div>
            <Button className="btn btn-warning">
                <Link to='/reviews' className='button-text'>See all Reviews</Link>
            </Button>
        </div>
    );
};

export default ReviewsHome;