import React from 'react';

export default function HomeInfoComponent(props) {
    let info;
    if (props.request_status === 'open') {
        info =  <div className="jumbotron jumbotron-fluid" style={{padding: "1em 2em", marginBottom: 0}}>
                    <h2 className="display-5">See, Edit, Cancel Your Open Requests Below</h2>
                    <p style={{marginTop: "15px"}}>Open requests are any requests you have made that do not have a confirmed goalie.</p>
                </div>
        }
    else if (props.request_status === 'confirmed') {
        info =  <div className="jumbotron jumbotron-fluid" style={{padding: "1em 2em", marginBottom: 0}}>
                    <h2 className="display-5">You Can View All Your Confirmed Requests Here.</h2>
                    <p style={{marginTop: "15px"}}>Review which goalies have joined your games.</p>
                </div>
    }
    else if (props.request_status === 'pending') {
        info =  <div className="jumbotron jumbotron-fluid" style={{padding: "1em 2em", marginBottom: 0}}>
                    <h2 className="display-5">View Your Pending Requests Below.</h2>
                    <p style={{marginTop: "15px"}}>Look through the list and confirm or deny a goalie to join your game.</p>
                </div>
    }
    else {
        info =  <div className="jumbotron jumbotron-fluid" style={{padding: "1em 2em", marginBottom: 0}}>
                    <h2 className="display-5">View a List of All Your Requests Below.</h2>
                    <p style={{marginTop: "15px"}}>You can review your history of requests or you can updated, delete, or confirm requests.</p>
                </div>
    }
    return (
        <>
            {info}
        </>
    );
}