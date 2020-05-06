import React, { Component } from 'react';
import WelcomeComponent from '../../components/WelcomeComponent/WelcomeComponent';
import HomeInfoComponent from '../../components/HomeInfoComponent/HomeInforComponent';
import TableComponent from '../../components/TableComponent/TableComponent';
import ViewsDropDownComponent from '../../components/ViewsDropDownComponent/ViewsDropDownComponent';
import * as gameService from '../../utils/gameService';

class YourRequestPage extends Component {
    state = {
        request_status: "open",
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

    getRequests= async () => {
        let requests = await gameService
                        .getRequests(this.state.user, this.state.request_status);
        requests.map(request =>  {
            this.setState({request_list: [...this.state.request_list, request]})
        })
    }

    handleChangeSelectBox = (value, state) => {
        this.setState({[state]: value}, () => {
            this.setState({request_list: []}, () => {
                this.getRequests().catch(e => {});
            });
        });
    }

    handleDeleteClick = async (gameId) => {
        await gameService.deleteGame(gameId).then( _ => 
            this.setState({request_list: []}, () => {
                this.getRequests().catch(e => {});
            })
        )
    }

    render() {
        return(
            <>
                <WelcomeComponent user={this.props.user}/>
                <HomeInfoComponent request_status={this.state.request_status}/>
                <ViewsDropDownComponent request_status={this.state.request_status} handleChangeSelectBox={this.handleChangeSelectBox} />
                <TableComponent request_list={this.state.request_list} request_status={this.state.request_status} handleDeleteClick={this.handleDeleteClick}/>
            </>    
        )
    }
}

export default YourRequestPage;