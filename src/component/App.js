import "./App.css";
import React  from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Admini from "../pages/Admini";
import Home from "../pages/Home";
import PoliceOfficer from "../pages/PoliceOfficer";
import Wardeni from "../pages/Wardeni";
import HomePrison1 from "../pages/HomePrison1";
import Schedule from "../pages/Schedule";
import Registration from "../pages/Registration";
import WardenRegi from "../pages/WardenRegi";
import Adminreg from "../pages/Adminregi";
import WardenHome from "../pages/WardenHome";
import PoliceHome from "../pages/PoliceOfficerHome";
import Logout from "../pages/Logout";
import AddPrisoner from "../pages/AddPrisoner";
import AddVisitor from "../pages/AddVisitor";
import CreateSchedule from "../pages/Schedule";
import OtherWorkers from "../pages/OtherWorkers";
import ScheduleInfos from "../pages/scheduleInfos";
import Prisonerinfo from "../pages/Prisonerinfo";
import Visitorinfos from "../pages/Visitorinfo";
import PoliceInfos from "../pages/Policeinfo";
import OtherWorkersInfos from "../pages/OtherWorkerinfos";


function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/otherworkerinfos" element= {<OtherWorkersInfos />} />
        <Route path="/policeinfos" element= {<PoliceInfos />} />
        <Route path="/prisonerinfo" element = {<Prisonerinfo />} />
        <Route path="/scheduleinfos" element={<ScheduleInfos />} />
        <Route path="/schedule" element={<CreateSchedule/>} />
        <Route path="/addvisitor" element={<AddVisitor />} />
        <Route path="workers" element={<OtherWorkers />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/policeHome" element={<PoliceHome />} />
        <Route path="/wardenHome" element={<WardenHome />} />
        <Route path="/adminreg" element={<Adminreg />} />
        <Route path="/warden" element={<WardenRegi />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/" element={<HomePrison1 />} />
        <Route path="/admin" element={<Admini />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/policeOfficerForm" element={<PoliceOfficer />} />
        <Route path="/wardenLogin" element={<Wardeni />} />
        <Route path="warden/wardenLogin/wardenHome/Visitorinfos" element={<Visitorinfos/>}/>
        <Route path="adminreg/admin/home/AddPrisoner" element={<AddPrisoner/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App;