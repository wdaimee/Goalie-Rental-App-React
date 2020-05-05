import React from 'react';

export default function WelcomePage(props) {
    return (
        <div className="jumbotron jumbotron-fluid" style={{padding: "2em"}}>
            <h2 className="display-5">See, Edit, Cancel Your Active Requests Below</h2>
            <p>Active requests are any requests you have made that do not have a confirmed goalie.</p>
            <p>To view requests with confirmed goalies or a list of pervious requests, view your History tab under the Profile Nav Link.</p>
        </div>
    )
}