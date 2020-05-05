import React, { Component } from 'react';
import WelcomeComponent from '../../components/WelcomeComponent/WelcomeComponent';
import * as gameService from '../../utils/gameService';

class FindGamesPage extends Component {
    state = {
        user: this.props.user._id,
        request_list: []
    }

    async componentDidMount() {
        let requests = await gameService.getOpen();
        requests.map(request => {
            this.setState({request_list: [...this.state.request_list, request]})
        });
    }

    render() {
        return(
            <>
                <WelcomeComponent user={this.props.user}/>
            </>
        )
    }
}

export default FindGamesPage;
