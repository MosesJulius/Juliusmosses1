import React from "react";
import Header from "../component/Header";


const PoliceHome = function() {
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
                            <a href="/prisonerinfo">
                                <span className="icon"></span>
                                <span className="title">Prisoner Information</span>
                            </a>
                        </li>
                        <li>
                            <a href="/scheduleinfos">
                                <span className="icon"></span>
                                <span className="title">Schedule Information</span>
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

export default PoliceHome;