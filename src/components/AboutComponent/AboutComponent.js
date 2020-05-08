import React from 'react';
import './AboutComponent.css';

export default function AboutComponent() {
    return(
       <div className="about-sec container-fluid padding">
           <div className="row about text-center">
                <div className="col-12">
                   <h1 className="display-4">gÜber</h1>
                   <p style={{fontSize: "30px"}}>The Goalie Rental Company</p>
                </div>
                <hr className="hr-about"/>
                <div className="col-12">
                    <p className="lead para">gÜber is a goalie rental website.
                    You can signup to rent goalies for a game
                    or you can signup to become a rental goalie.
                    We know finding a goalie can be rough, that's why we created this app. 
                    We want to help you to make sure your games never get cancelled because 
                    you don't have a goalie.
                    </p>
                </div>
                <hr className="hr-about"/>
                <div className="col-12">
                   <p style={{fontSize: "30px"}}>How It Works</p>
                </div>
                <hr className="hr-about" />
                <div className="col-12">
                    <p className="lead para">
                        You can signup and make a game request to rent a goalie, you choose sports from: Hockey, Soccer, and Lacroose.
                        One of our goalies can choose to fill your game by requesting to fill the goalie in your game. You then have the option 
                        of accepting or declining the goalie. If you decline, a new goalie can request to join.
                    </p>
                </div>
                <hr className="hr-about"/>
           </div>
       </div> 
    )


}