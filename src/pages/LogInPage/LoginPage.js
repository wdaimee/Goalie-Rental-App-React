import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './LoginPage.css';

class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    };

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/requests');
        } catch (err) {
            alert('Invalid Credentials!');
        }
    } 

    render() {
        return (
            <div className="login-page" style={{height: "80vh"}}>
                <div className="login-caption">
                    <header className="header-footer login-header">gÜber</header>
                    <p>Log In to Your Account</p>
                </div>
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-success">Log In</button>&nbsp;&nbsp;&nbsp;
                            <Link className="btn btn-danger" to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
                <div className="link-signup">
                        <p>Don't have an account? Sign up below.</p>
                        <Link className="btn btn-secondary" to='/signup'>Sign Up</Link>
                </div>
            </div>
        );
    }
}

export default LoginPage;