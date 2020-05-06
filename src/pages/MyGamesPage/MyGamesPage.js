import React, { Component } from 'react';
import WelcomeGameComponent from '../../components/WelcomeGameComponent/WelcomeGameComponent';
import GameInfoComponent from '../../components/MyGameInfoComponent/MyGameInfoComponent';
import TableComponent from '../../components/TableComponent/TableComponent';
import ViewsDropDownComponent from '../../components/ViewsDropDownComponent/ViewsDropDownComponent';
import * as gameService from '../../utils/gameService';

class MyGamesPage extends Component {
    state = {
        request_status: "confirmed",
        user: this.props.user._id,
        request_list: []
    }

    async componentDidMount() {
        let requests = await gameService
                        .getGamesForGoalie(this.state.user, this.state.request_status);
        requests.map(request => {
            this.setState({request_list: [...this.state.request_list, request]})
        });
    }

    getGames = async () => {
        let requests = await gameService
                        .getGamesForGoalie(this.state.user, this.state.request_status);
        requests.map(request =>  {
            this.setState({request_list: [...this.state.request_list, request]})
        })
    }

    handleChangeSelectBox = (value, state) => {
        this.setState({[state]: value}, () => {
            this.setState({request_list: []}, () => {
                this.getGames().catch(e => {});
            });
        });
    }

    render() {
        return(
            <>
                <WelcomeGameComponent user={this.props.user}/>
                <GameInfoComponent request_status={this.state.request_status}/>
                <ViewsDropDownComponent request_status={this.state.request_status} 
                                        handleChangeSelectBox={this.handleChangeSelectBox}
                                        request_list={this.state.request_list} />
                <TableComponent user={this.props.user}
                                request_list={this.state.request_list} 
                                request_status={this.state.request_status} />
            </>   
        )
    }
}

export default MyGamesPage;

