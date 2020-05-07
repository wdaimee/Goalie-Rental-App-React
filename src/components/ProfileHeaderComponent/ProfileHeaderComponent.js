import React from 'react';

export default function ProfileHeaderComponent(props) {
    return(
        <>
            <div className="jumbotron jumbotron-fluid welcome" style={{padding: "2em", marginBottom: 0}}>
                <h1 className="display-3 text-center">{props.user.name} Profile</h1>
                <hr />
                <h3 className="display-5 text-center">View Your History of Game Requests</h3>
            </div>
        </>
    )
}