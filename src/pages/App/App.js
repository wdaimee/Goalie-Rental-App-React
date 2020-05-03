import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import userService from '../../utils/userService';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';

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
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
