import React, { Component } from 'react';
import WelcomeComponent from '../../components/WelcomeComponent/WelcomeComponent';

class HomePage extends Component {
    render() {
        return(
            <WelcomeComponent user={this.props.user}/>
        )
    }
}

export default HomePage;