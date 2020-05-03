import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponent.css';

export default function CarouselComponent() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, evt) => {
        setIndex(selectedIndex);
    }
    
    return( 
        <Carousel activeIndex={index} onSelect={handleSelect} slide={true}>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="hockey-goalie.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h1 className="display-2">gUber</h1>
                <p>We've got you covered for your rental needs!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="soccer-goalie.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
                <h1 className="display-2"></h1>
                <p>We've got goalies for soccer too!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="lacrosse-goalie.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
                <h1 className="display-2"></h1>
                <p>You better believe we've got goalies for lacrosse!</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
        // <div id="slides" className="carousel slide" data-ride="carousel">
        //     <ul className="carousel-indicators">
        //         <li data-target="#slides" data-slide-to="0" className="active"></li>
        //         <li data-target="#slides" data-slide-to="1"></li>
        //         <li data-target="#slides" data-slide-to="2"></li>
        //     </ul>
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //            <img src="hockey-goalie.jpg" />
        //            <div className="carousel-caption">
        //                <h1 className="display-2">Rent a Goalie!</h1>
        //            </div>
        //         </div>
        //         <div className="carousel-item">
        //            <img src="soccer-goalie.jpg" />
        //         </div>
        //         <div className="carousel-item">
        //            <img src="lacrosse-goalie.jpg" />
        //         </div> 
        //     </div>
        // </div>
    );
}