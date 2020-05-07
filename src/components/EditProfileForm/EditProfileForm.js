import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    {value: {str: 'A', value: 5}, label: 'A'},
    {value: {str: 'B', value: 4}, label: 'B'},
    {value: {str: 'C', value: 3}, label: 'C'},
    {value: {str: 'D', value: 2}, label: 'D'},
    {value: {str: 'Beginner', value: 1}, label: 'Beginner'}
]

export default function EditProfileForm(props) {
        let extraSelectList;

        const isFormInvalid = function() {
            return !(props.formData.name && props.formData.email && props.formData.phone_num && 
                    props.formData.age && props.formData.goalie);
        }

        //if the user selects they are a goalie, fill out the sport they play and their skill level
        if(props.formData.goalie) {
            extraSelectList = 
            <>
                <div className="form-group">
                    <div className="col-sm-12">
                        <Select closeMenuOnSelect={false} 
                                isMulti options={sportList} 
                                placeholder="Select your sports" 
                                name="sport"
                                onChange={(value) => props.handleChangeMulti(value, "sport")} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <Select options={skillLevelList} 
                                placeholder="What's your skill level?" 
                                name="skill_level" 
                                value={{label: props.formData.skill_level.str}} 
                                onChange={({ value }) => props.handleChangeSelectBox(value, "skill_level")} />
                    </div>
                </div>
            </>
            } 

        return (
            <div className="signup-container">
                <div className="signup-caption">
                    <header className="header-footer signup-header">Edit Your Profile</header>
                    <h5 className="display-4 text-center" style={{paddingTop: "5px", fontSize: "20px"}}>You Will Need to Log In Again If You're Making Any Changes</h5>
                </div>
                <form ref={props.formRef} className="form-horizontal" onSubmit={props.handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Name" value={props.formData.name} name="name" onChange={props.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Phone Number" value={props.formData.phone_num} name="phone_num" onChange={props.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Age" value={props.formData.age} name="age" onChange={props.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <Select options={isGoalie} 
                                    placeholder="Want to signup as a goalie?" 
                                    name="goalie"
                                    value={{label: props.formData.goalie ? "Yes" : "No"}} 
                                    onChange={({ value }) => props.handleChangeSelectBox(value, "goalie")} />
                        </div>
                    </div>
                    {extraSelectList}
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                        <button className="btn btn-success" default={isFormInvalid()}>Save Edit</button>&nbsp;&nbsp;
                            <Link className="btn btn-danger" to='/profile'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
}

