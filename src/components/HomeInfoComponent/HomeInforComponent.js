import React from 'react';

export default function WelcomeInfoComponent(props) {
    let info;
    if (props.request_status === 'open') {
        info =  <div className="jumbotron jumbotron-fluid" style={{padding: "1em 2em", marginBottom: 0}}>
                    <h2 className="display-5">See, Edit, Cancel Your Open Requests Below</h2>
                    <p style={{marginTop: "15px"}}>Open requests are any requests you have made that do not have a confirmed goalie.</p>
                    <p style={{marginBottom: 0}}>To view requests with confirmed goalies or a list of pervious requests, view your History tab under the Profile Nav Link.</p>
                </div>
        }

    return (
        <>
            {info}
        </>
    );
}