import React, { Component } from 'react';
import WelcomeComponent from '../../components/WelcomeComponent/WelcomeComponent';
import * as gameService from '../../utils/gameService';
import GamesInfoComponent from '../../components/GamesInfoComponent/GamesInfoComponent';
import TableGamesComponent from '../../components/TableGamesComponent/TableGamesComponent';

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
                <WelcomeComponent user={this.props.user} />
                <GamesInfoComponent />
                <TableGamesComponent request_list={this.state.request_list} />
            </>
        )
    }
}

export default FindGamesPage;
