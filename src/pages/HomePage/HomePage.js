import React, { Component } from 'react';
import WelcomeComponent from '../../components/WelcomeComponent/WelcomeComponent';
import * as gameService from '../../utils/gameService';

class HomePage extends Component {
    state = {
        request_status: 'open',
        user: this.props.user._id,
        active_requests: []
    }

    async componentDidMount() {
        const requests = await gameService
                        .getRequests(this.state.user, this.state.request_status);
        console.log(requests)
        this.setState({active_requests: [...this.state.active_requests, requests]})
    }

    render() {
        return(
            <WelcomeComponent user={this.props.user}/>
        )
    }
}

export default HomePage;