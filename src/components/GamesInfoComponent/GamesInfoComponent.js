import React from 'react';

export default function GamesInfoComponent(props) {
    return (
        <div className="jumbotron jumbotron-fluid" style={{padding: "1em 2em", marginBottom: 0}}>
            <h2 className="display-5">List of Open Games</h2>
            <p style={{marginTop: "15px"}}>You can request to join any of the games below by clicking the request to join button.</p>
        </div>
    );
}