import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewHome = (props) => {
    const { name, desc, rate, img } = props.review;
    return (
        <div className="reviewHome my-5" >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <hr />
                    <Card.Text> {desc}</Card.Text>

                    <Button variant="primary" className="btn btn-success"><span>
                        <FontAwesomeIcon className="text-warning" icon={faStar} /> {rate}
                    </span></Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default ReviewHome;