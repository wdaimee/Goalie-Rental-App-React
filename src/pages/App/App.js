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
import ProfilePage from '../ProfilePage/ProfilePage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';

class App extends Component {
  state = {
    user: ''
  }

  componentWillMount() {
    document.title = "gÜber"
  }

  async componentDidMount() {
    let user = await userService.getUser();
    this.handleUserStateChange(user);
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleUserStateChange = (user) => {
    this.setState({ user })
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
            userService.getUser() && userService.getUser().goalie ?
              <FindGamesPage user={this.state.user} />
                :
              <Redirect to="/requests" />
          )} />
          <Route exact path="/requests/edit" render={({ location, history }) => (
            userService.getUser() ?
              <EditGamePage location={location} history={history}/>
                :
              <Redirect to="/login" />
          )} />
          <Route exact path="/mygames" render={() => (
            userService.getUser() && userService.getUser().goalie ?
              <MyGamesPage user={this.state.user}/>
                :
              <Redirect to="/requests" />
          )} />
          <Route exact path="/profile" render={() => (
            userService.getUser() ?
              <ProfilePage user={this.state.user} />
                :
              <Redirect to="/login" />
          )} />
          <Route exact path="/profile/edit" render={({ location, history }) => (
            userService.getUser() ?
              <EditProfilePage location={location} 
                               history={history}
                               user={this.state.user}
                               handleUserStateChange={this.handleUserStateChange}/>
                :
              <Redirect to="/login" />
          )} />
          <Route path="/*" render={() => (
            <div className="error">
              <h2>404</h2>
              <h2>Nothing to See Here</h2>
            </div>  
          )} />
        </Switch>
        <FooterComponent />
      </>
    );
  }
}

export default App;
