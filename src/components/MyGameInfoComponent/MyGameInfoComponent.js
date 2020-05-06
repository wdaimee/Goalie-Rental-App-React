import React from 'react';

export default function MyGameInfoComponent(props) {
    let info;
    if (props.request_status === 'confirmed') {
        info =  <div className="jumbotron jumbotron-fluid" style={{padding: "1em 2em", marginBottom: 0}}>
                    <h2 className="display-5">View All the Games You're Confirmed For and Have Played.</h2>
                    <p style={{marginTop: "15px"}}>This is your history of games as well as what's coming up.</p>
                </div>
    }
    else if (props.request_status === 'pending') {
        info =  <div className="jumbotron jumbotron-fluid" style={{padding: "1em 2em", marginBottom: 0}}>
                    <h2 className="display-5">View Your Pending Games Below.</h2>
                    <p style={{marginTop: "15px"}}>Your request to join a game is pending. The requestor will review your request and confirm the request.</p>
                </div>
    }
    else {
        info =  <div className="jumbotron jumbotron-fluid" style={{padding: "1em 2em", marginBottom: 0}}>
                    <h2 className="display-5">View a List of All Your Games Below, Pending and Confirmed.</h2>
                    <p style={{marginTop: "15px"}}>You can view all the games you have played, what's coming up, and what requests are currently pending. See it all here!</p>
                </div>
    }
    return (
        <>
            {info}
        </>
    );
}
