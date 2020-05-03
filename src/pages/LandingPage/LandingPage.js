import React, { Component } from 'react';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import ConnectComponent from '../../components/ConnectComponent/ConnectComponent';

class LandingPage extends Component {
    render() {
        return(
            <>
                <CarouselComponent />
                <ConnectComponent />
            </>    
        );
    };
}

export default LandingPage;