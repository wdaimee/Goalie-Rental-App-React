import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import Select from 'react-select';
import './SignUpForm.css';

const isGoalie = [
    {value: true, label: 'Yes'},
    {value: false, label: 'No'}
]

const sportList = [
    {value: 'hockey', label: 'Hockey'},
    {value: 'soccer', label: 'Soccer'},
    {value: 'lacrosse', label: 'Lacrosse'}
]

const skillLevelList = [
    {value: 'A', label: 'A'},
    {value: 'B', label: 'B'},
    {value: 'C', label: 'C'},
    {value: 'D', label: 'D'},
    {value: 'Beginner', label: 'Beginner'}
]

class SignUpForm extends Component {

    state = {
        name: '',
        email: '',
        phone_num: '',
        age: '',
        goalie: false,
        sport: null,
        skill_level: null,
        password: '',
        passwordConf: ''
    };


    //handle any changes to form if text changes
    handleChange = (evt) => {
        this.props.updateMessage('');
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    //handle any changes to form select boxes
    handleChangeSelectBox = (value, state) => {
        this.setState({[state]: value});
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await userService.signup(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.phone_num && 
                this.state.age && this.state.goalie && this.state.password === this.state.passwordConf);
    }


    render() {
        let extraSelectList;

        //if the user selects they are a goalie, fill out the sport they play and their skill level
        if(this.state.goalie) {
            extraSelectList = 
            <>
                <div className="form-group">
                    <div className="col-sm-12">
                        <Select options={sportList} name="sport" value={this.state.value} 
                                onChange={({ value }) => this.handleChangeSelectBox(value, "sport")} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <Select options={skillLevelList} name="skill_level" value={this.state.value} 
                                onChange={({ value }) => this.handleChangeSelectBox(value, "skill_level")} />
                    </div>
                </div>
            </>
            } 
        return (
            <div className="signup-container">
                <div className="signup-caption">
                    <header className="header-footer signup-header">Sign Up to Get Started!</header>
                    <p>Sign up to find goalies to rent. Goalies, sign up to find games to play in your area.</p>
                </div>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Phone Number" value={this.state.phone_num} name="phone_num" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Age" value={this.state.age} name="age" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <Select options={isGoalie} name="goalie" value={this.state.value} 
                                    onChange={({ value }) => this.handleChangeSelectBox(value, "goalie")} />
                        </div>
                    </div>
                    {extraSelectList}
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-success" default={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                            <Link className="btn btn-danger" to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
