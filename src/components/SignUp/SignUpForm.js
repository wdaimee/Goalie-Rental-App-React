import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import Select from 'react-select';

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
        sport: '',
        skill_level: '',
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

        if(this.state.goalie === true) {
            extraSelectList = 
            <>
                <div className="form-group">
                    <div className="col-sm-12">
                        <Select options={sportList} name="sport" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <Select options={skillLevelList} name="skill_level" onChange={this.handleChange} />
                    </div>
                </div>
            </>
            } 
        return (
            <div>
                <header className="header-footer">Sign Up</header>
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
                            <input type="text" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
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
                            <Select options={isGoalie} name="goalie" onChange={this.handleChange} />
                        </div>
                    </div>
                    {extraSelectList}
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button ClassName="btn btn-default" default={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
