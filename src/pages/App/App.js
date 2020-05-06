import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import CreateRequestPage from '../CreateRequest/CreateRequestPage';
import YourRequestPage from '../YourRequestPage/YourRequestPage';
import FindGamesPage from '../FindGamesPage/FindGamesPage';
import EditGamePage from '../EditGamePage/EditGamePage';
import MyGamesPage from '../MyGamesPage/MyGamesPage';

class App extends Component {
  state = {
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <>
        <NavbarComponent user={this.state.user} handleLogout={this.handleLogout} handlePageChange={this.handlePageChange} />
        <Switch>
          <Route exact path="/" render={() => (
            <LandingPage />
          )} />
          <Route exact path="/signup" render={({ history }) => (
            <SignUpPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
          )} />
          <Route exact path="/login" render={({ history }) => (
            <LogInPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
          )} />
          <Route exact path="/create" render={({ history }) => (
            userService.getUser() ?
              <CreateRequestPage user={this.state.user} history={history}/>
                :
              <Redirect to="/login" />
          )} />
          <Route exact path="/requests" render={() => (
            userService.getUser() ?
              <YourRequestPage user={this.state.user}/>
                :
              <Redirect to="/login" />
          )} />
          <Route exact path="/games" render={() => (
            userService.getUser() ?
              <FindGamesPage user={this.state.user} />
                :
              <Redirect to="/login" />
          )} />
          <Route exact path="/requests/edit" render={({ location, history }) => (
            userService.getUser() ?
              <EditGamePage location={location} history={history}/>
                :
              <Redirect to="/login" />
          )} />
          <Route exact path="/mygames" render={() => (
            userService.getUser() ?
              <MyGamesPage user={this.state.user}/>
                :
              <Redirect to="/login" />
          )} />
        </Switch>
        <FooterComponent />
      </>
    );
  }
}

export default App;
