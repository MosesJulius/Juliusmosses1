import React from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";

const HomePrison1 = function() {
   return(
    <><div className="HomeHead">
           <Header />
       </div><div className="prisonContainer">
               <div className="prisonBar">
                   <ul>
                       <li>
                           <Link to="/registration">
                               <span className="icon"></span>
                               <span className="title">police officer</span>

                           </Link>
                       </li>
                       <li>
                           <Link to="/warden">
                               <span className="icon"></span>
                               <span className="title">Warden</span>
                           </Link>
                       </li>
                       <li>
                           <Link to="/adminreg">
                               <span className="icon"></span>
                               <span className="title">Admin</span>
                           </Link>
                       </li>
                   </ul>
               </div>
           </div></>
   ); 
};

export default HomePrison1;