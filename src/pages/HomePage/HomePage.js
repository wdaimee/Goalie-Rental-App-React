import React, { Component } from 'react';
import WelcomeComponent from '../../components/WelcomeComponent/WelcomeComponent';
import WelcomeInfoComponent from '../../components/WelcomeInfoComponent/WelcomeInfoComponent';
import TableComponent from '../../components/TableComponent/TableComponent';
import * as gameService from '../../utils/gameService';

class HomePage extends Component {
    state = {
        request_status: 'open',
        user: this.props.user._id,
        request_list: []
    }

    async componentDidMount() {
        const requests = await gameService
                        .getRequests(this.state.user, this.state.request_status);
        this.setState({request_list: [...this.state.request_list, requests]});
        console.log(this.state.request_list[0])
    }

    render() {
        return(
            <>
                <WelcomeComponent user={this.props.user}/>
                <WelcomeInfoComponent />
                <TableComponent request_list={this.state.request_list}/>
            </>    
        )
    }
}

export default HomePage;