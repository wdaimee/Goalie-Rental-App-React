import React, { Component } from 'react';
import WelcomeComponent from '../../components/WelcomeComponent/WelcomeComponent';
import WelcomeInfoComponent from '../../components/HomeInfoComponent/HomeInforComponent';
import TableComponent from '../../components/TableComponent/TableComponent';
import * as gameService from '../../utils/gameService';

class HomePage extends Component {
    state = {
        request_status: 'open',
        user: this.props.user._id,
        request_list: []
    }

    async componentDidMount() {
        let requests = await gameService
                        .getRequests(this.state.user, this.state.request_status);
        requests.map(request => {
            this.setState({request_list: [...this.state.request_list, request]})
        });
    }

    render() {
        return(
            <>
                <WelcomeComponent user={this.props.user}/>
                <WelcomeInfoComponent request_status={this.state.request_status}/>
                <TableComponent request_list={this.state.request_list} request_status={this.state.request_status}/>
            </>    
        )
    }
}

export default HomePage;