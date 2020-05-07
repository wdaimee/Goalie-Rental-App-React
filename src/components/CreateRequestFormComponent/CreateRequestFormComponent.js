import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import * as arenaService from '../../utils/arenaService';
import * as gameService from '../../utils/gameService';
import './CreateRequestFormComponent.css';

const sportList = [
    {value: 'hockey', label: 'Hockey'},
    {value: 'soccer', label: 'Soccer'},
    {value: 'lacrosse', label: 'Lacrosse'}
]

const skillLevelList = [
    {value: {str: 'A', value: 5}, label: 'A'},
    {value: {str: 'B', value: 4}, label: 'B'},
    {value: {str: 'C', value: 3}, label: 'C'},
    {value: {str: 'D', value: 2}, label: 'D'},
    {value: {str: 'Beginner', value: 1}, label: 'Beginner'}
]

const cityList = [
    {value: 'Toronto', label: 'Toronto'},
    {value: 'Mississauga', label: 'Mississauga'},
    {value: 'Brampton', label: 'Brampton'}
]

class CreateRequestFormComponent extends Component {    
    state = {
        requestor: this.props.user._id,
        sport: "",
        skill_level: "",
        city: "",
        arena: "",
        request_time: "",
        request_date: "",
        team_name: "",
        description: "",
        arenaList: []
     }

     //handle any changes to form if text changes
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    //handle any changes to form select boxes
    handleChangeSelectBox = (value, state) => {
        this.setState({[state]: value});
    }

    //handle change for when city checkbox changes, will fetch and update arean list
    handleChangeSelectBoxCity = (value, state) => {
        this.handleChangeSelectBox(value, state);
        this.setState({arenaList: []}, () => {
            this.handleArenaGet(this.state.city).catch(e => {
            });
        });
    }

    //update arean list state when city changes, get list of areans from backend for each city
    handleArenaGet = async city => {
        const arenas = await arenaService.getArenasByCity(city);
        arenas.map(arena => {
            this.setState({arenaList: [...this.state.arenaList, {value: arena.name, label: arena.name}]})
        });
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        //create a req.body from state without the areanList. Don't want to send arena list in req.body
        const body = Object.keys(this.state).reduce((object, key) => {
            if (key !== "arenaList") {
                object[key] = this.state[key]
            }
            return object
        }, {})
        try {
            await gameService.create(body); 
            this.props.history.push('/');
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.sport && this.state.skill_level && this.state.city && this.state.arena 
                 && this.state.request_time && this.state.request_date && this.state.team_name);
    }

    render() {
        return(
            <div className="create-container">
                <div className="create-caption">
                    <header className="header-footer create-header">Create a Request for a Goalie</header>
                    <p>Fill out the form below to make a game request, goalies will see the request online and can request to join.</p>
                </div>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <Select options={sportList} 
                                    placeholder="Select Sport: Hockey, Soccer, or Lacrosse" 
                                    name="sport" 
                                    onChange={({ value }) => this.handleChangeSelectBox(value, "sport")} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <Select options={skillLevelList} 
                                    placeholder="Select the Skill Level for the Game" 
                                    name="skill_level" 
                                    onChange={({ value }) => this.handleChangeSelectBox(value, "skill_level")} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <Select options={cityList} 
                                    placeholder="Select the City" 
                                    name="city"
                                    onChange={({ value }) => this.handleChangeSelectBoxCity(value, "city")} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <Select options={this.state.arenaList} 
                                    placeholder="Select the Arena" 
                                    name="arena"
                                    onChange={({ value }) => this.handleChangeSelectBoxCity(value, "arena")} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="Enter the Time in Military: HH:MM:SS" 
                                   value={this.state.request_time} name="request_time" 
                                   onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="Enter the Date: YYYY-MM-DD" 
                                   value={this.state.request_date} name="request_date" 
                                   onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="What is Your Team Name?" 
                                   value={this.state.team_name} name="team_name" 
                                   onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="Add Any Other Details Here. Ex. 5v5 or League Game" 
                                   value={this.state.description} name="description" 
                                   onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-success" default={this.isFormInvalid()}>Create Request</button>&nbsp;&nbsp;
                            <Link className="btn btn-danger" to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
         );
     }
}

export default CreateRequestFormComponent;