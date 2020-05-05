import React from 'react';

export default function WelcomePage(props) {
    return (
        <div className="jumbotron jumbotron-fluid welcome" style={{padding: "2em", marginBottom: 0}}>
            <h1 className="display-3">Welcome {props.user.name}!</h1>
        </div>
    )
}