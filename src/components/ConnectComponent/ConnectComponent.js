import React from 'react';
import './ConnectComponent.css';

export default function ConnectComponent() {
    return (
        <div className="container-fluid padding connect">
            <div className="row text-center padding">
                <div className="col-12">
                    <h2 className="connect-caption">Come Check Us Out Below</h2>
                </div>
                <hr />
                <div className="col-12 social padding">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    )
}