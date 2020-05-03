import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

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
            this.props.history.push('/');
        } catch (err) {
            alert('Invalid Credentials!');
        }
    } 

    render() {
        return (
            <div className="LoginPage" style={{height: "70vh"}}>
                <header className="header-footer">Log In</header>
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
                            <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;