import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import * as arenaService from '../../utils/arenaService';
import * as gameService from '../../utils/gameService';

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

const cityList = [
    {value: 'Toronto', label: 'Toronto'},
    {value: 'Mississauga', label: 'Mississauga'},
    {value: 'Brampton', label: 'Brampton'}
]

class EditGamePage extends Component {    
    state = {
        invalidForm: false,
        formData: this.props.location.state.item,
        arenaList: []
    }

    formRef = React.createRef();

    async componentDidMount() {
        this.handleArenaGet(this.state.formData.city);
    }

    //handle any changes to form if text changes
    handleChange = (evt) => {
        const formData = {...this.state.formData, [evt.target.name]: evt.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    }

    //handle any changes to form select boxes
    handleChangeSelectBox = (value, state) => {
        const formData = {...this.state.formData, [state]: value}
        this.setState({
            formData,
            invalid: !this.formRef.current.checkValidity()
        });
    }

    //handle change for when city checkbox changes, will fetch and update arean list
    handleChangeSelectBoxCity = (value, state) => {
        this.handleChangeSelectBox(value, state);
        this.setState({arenaList: []}, () => {
            this.handleArenaGet(this.state.formData.city).catch(e => {
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
        const body = Object.keys(this.state.formData).reduce((object, key) => {
            if (key !== "arena") {
                object[key] = this.state.formData[key]
            }
            return object;
        }, {})
        const arena = this.state.formData.arena
        try {
            await gameService.editGame(body, arena); 
            this.props.history.push('/requests');
        } catch (err) {
            console.log(err);
        }
    }

    isFormInvalid() {
        return !(this.state.sport && this.state.skill_level && this.state.city && this.state.arena 
                 && this.state.request_time && this.state.request_date && this.state.team_name);
    }

    //function to capitilize first letter of a string
    capFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        return(
            <div className="create-container">
                <div className="create-caption">
                    <header className="header-footer create-header">Edit Your Request</header>
                    <p>Use the form below to edit your request.</p>
                </div>
                <form ref={this.formRef} className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <Select options={sportList} 
                                    placeholder="Select Sport: Hockey, Soccer, or Lacrosse" 
                                    name="sport"
                                    value={{label: this.capFirstLetter(this.state.formData.sport)}} 
                                    onChange={({ value }) => this.handleChangeSelectBox(value, "sport")} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <Select options={skillLevelList} 
                                    placeholder="Select the Skill Level for the Game" 
                                    name="skill_level" 
                                    value={{label: this.state.formData.skill_level}}
                                    onChange={({ value }) => this.handleChangeSelectBox(value, "skill_level")} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <Select options={cityList} 
                                    placeholder="Select the City" 
                                    name="city"
                                    value={{label: this.state.formData.city}}
                                    onChange={({ value }) => this.handleChangeSelectBoxCity(value, "city")} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <Select options={this.state.arenaList} 
                                    placeholder="Select the Arena" 
                                    name="arena"
                                    value = {{label: this.state.formData.arena.name ? this.state.formData.arena.name : this.state.formData.arena}} 
                                    onChange={({ value }) => this.handleChangeSelectBox(value, "arena")} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="Enter the Time in Military: HH:MM:SS" 
                                   value={this.state.formData.request_time} name="request_time" 
                                   onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="Enter the Date: YYYY-MM-DD" 
                                   value={this.state.formData.request_date} name="request_date" 
                                   onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="What is Your Team Name?" 
                                   value={this.state.formData.team_name} name="team_name" 
                                   onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="Add Any Other Details Here. Ex. 5v5 or League Game" 
                                   value={this.state.formData.description} name="description" 
                                   onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-success" default={this.isFormInvalid()}>Edit Request</button>&nbsp;&nbsp;
                            <Link className="btn btn-danger" to='/requests'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
         );
     }
}

export default EditGamePage;