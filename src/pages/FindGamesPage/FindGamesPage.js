import React, { Component } from 'react';
import WelcomeFindGameComponent from '../../components/WelcomeFindGameComponent/WelcomeFindGameComponent';
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

    renderOpenList = async () => {
        let requests = await gameService.getOpen();
        requests.map(request => {
            this.setState({request_list: [...this.state.request_list, request]})
        })
    }

    handleJoinClick = async (gameId, user) => {
        await gameService.joinGame(gameId, user).then( _ => 
            this.setState({request_list: []}, () => {
                this.renderOpenList().catch(e => {});
            })
         )
    }

    render() {
        return(
            <>
                <WelcomeFindGameComponent user={this.props.user} />
                <GamesInfoComponent />
                <TableGamesComponent user={this.props.user} request_list={this.state.request_list} handleJoinClick={this.handleJoinClick} />
            </>
        )
    }
}

export default FindGamesPage;
