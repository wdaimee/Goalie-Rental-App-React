import React, { Component } from 'react';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import ConnectComponent from '../../components/ConnectComponent/ConnectComponent';
import AboutComponent from '../../components/AboutComponent/AboutComponent';

class LandingPage extends Component {
    render() {
        return(
            <>
                <CarouselComponent />
                <AboutComponent />
                <ConnectComponent />
            </>    
        );
    };
}

export default LandingPage;