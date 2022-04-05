import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import img from "./img/product.png"

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="container py-5">
                    <div className="d-flex">
                        <div className="banner-left pt-5">
                            <p className="welcoming">Welcome to</p>
                            <p className="welcoming dfr-color-a fw-bold">TS Bustle</p>
                            <p className="text-color-a banner-desc fw-light">Take a tour of us. Our first priority is to meet your expectation. We have a lot of idea and variant for each and every product.</p>
                            <Button className="btn btn-outline-warning rounded-pill">
                                <Link className="px-4 dtn-txt" to='/contact'>Contact Us</Link>
                            </Button>
                        </div>
                        <div className="banner-right pt-5">
                            <img src={img} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;