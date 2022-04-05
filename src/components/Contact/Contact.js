import React from 'react';

import Button from 'react-bootstrap/Button';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <br /><br />
            <div className="container">
                <h1 className="text-center title my-5">Contact Us</h1>



                <div className="banner-right px-5">
                    <textarea className="form-control" placeholder="Write your comment here" id="exampleFormControlTextarea1" rows="7"></textarea>
                    <Button className="btn btn-warning my-4">Send</Button>
                </div>

            </div>
        </div>
    );
};

export default Contact;