import React from "react";
import Header from "../component/Header";


const WardenHome = function() {
    return (
        <><div className="HomeHead">
            <Header />
        </div><div className="homeContainer">
                <div className="homeBar">
                    <ul>
                        <li>
                            <a href="/">
                                <span className="icon"></span>
                                <span className="title">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Prisonerinfo">
                                <span className="icon"></span>
                                <span className="title">Prisoner Information</span>
                            </a>
                        </li>
                        <li>
                            <a href="/policeinfos">
                            <span className="icon"></span>
                            <span className="title">Police Officer Information</span>
                             </a>
                        </li>
                        <li>
                            <a href="warden/wardenLogin/wardenHome/Visitorinfos">
                            <span className="icon"></span>
                            <span className="title">Visitor Information</span>
                             </a>
                        </li>
                        <li>
                            <a href="warden/registration/wardenLogin/wardenHome/otherworkerinfos">
                            <span className="icon"></span>
                            <span className="title">OtherWorkers Information</span>
                             </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className="icon"></span>
                                <span className="title">LogOut</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div></>
    );
}

export default WardenHome;