import React from 'react';
import './FooterComponent.css';

export default function FooterComponent() {
    return (
        <footer>
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-md-4">
                        <hr className="light" />
                        <p style={{fontSize: '30px'}}>gUber</p>
                        <p>The Goalie Rental Company</p>
                        <hr className="light" />
                        <p>555-555-5555</p>
                        <p>email@email.com</p>
                        <p>123 Fake Street</p>
                        <p>City, State, Postal Code</p>
                    </div>
                    <div className="col-md-4">
                        <hr className="light" />
                        <h5>Our Hours</h5>
                        <hr className="light" />
                        <p>Monday: 9AM to 5PM</p>
                        <p>Saturday: 10AM to 4PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div className="col-md-4">
                        <hr className="light" />
                        <h5>Cities Where We Operate:</h5>
                        <hr className="light" />
                        <p>Toronto</p>
                        <p>Mississauga</p>
                        <p>Brampton</p>
                    </div>
                    <div className="col-12">
                        <hr className="copy" />
                        <h5>&copy; gUber.com</h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}