import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import userService from '../../utils/userService';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';

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
        <NavbarComponent />
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
        </Switch>
        <FooterComponent />
      </>
    );
  }
}

export default App;