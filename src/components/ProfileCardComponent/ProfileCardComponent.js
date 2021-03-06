import React from 'react';
import './ProfileCardComponent.css';
import { Link } from 'react-router-dom';

export default function ProfileCardComponent(props) {
    let sport_info;

    //function to capitilize first letter of a string
    let capFirstLetter = function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if (props.user.goalie) {
        sport_info = <>
                        <p className="card-text">Sports Played: {capFirstLetter(props.user.sport.join(", "))}</p>
                        <p className="card-text">Skill Level: {props.user.skill_level.str}</p>
                     </>   
    }

    return(
        <>
            <div className="card w-50 text-white bg-dark mb-3 mx-auto">
                <div className="card-header text-center" style={{borderBottom: "2px solid white"}}>Details</div>
                <div className="card-body">
                    <h5 className="card-title">Contact Information</h5>
                    <p className="card-text">Email: {props.user.email}</p>
                    <p className="card-text">Phone Number: {props.user.phone_num}</p>
                </div>
                <hr />
                <div className="card-body">
                    <h5 className="card-title">General Information</h5>
                    <p className="card-text">Age: {props.user.age}</p>
                </div>
                <hr />
                <div className="card-body">
                    <h5 className="card-title">Sport Information</h5>
                    <p className="card-text">Is User a Goalie?: {props.user.goalie ? "Yes" : "No"}</p>
                    {sport_info}
                </div>
            </div>
            <div className="container-fluid profile-ed-contain">
                <Link className="btn btn-primary btn-lg profile-ed-btn" 
                      style={{verticalAlign: "middle"}}
                      to={{
                            pathname: '/profile/edit', 
                            state: {props} 
                          }}
                >Edit</Link>
            </div>
        </>
    )
}
