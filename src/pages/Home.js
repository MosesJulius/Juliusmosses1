import React from "react";
import Header from "../component/Header";

const Home = function(){
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
                            <a href="adminreg/admin/home/AddPrisoner">
                                <span className="icon"></span>
                                <span className="title">Prisoner</span>
                            </a>
                        </li>
                        <li>
                            <a href="/addvisitor">
                                <span className="icon"></span>
                                <span className="title">Visitor</span>
                            </a>
                        </li>
                        <li>
                            <a href="/workers">
                            <span className="iconn"></span>
                            <span className="title">Other Workers</span>
                            </a>
                        </li>
                        <li>
                            <a href="/schedule">
                            <span className="iconn"></span>
                            <span className="title">Schedule</span>
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
};

export default Home;