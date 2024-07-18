import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";


const Registration = function() {
    let Submit = "Submit"
    let Login = "Login"

const [firstName, setFirstName] = useState("");
const [secondName, setSecondName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [male, setMale] = useState(" ");
const [female, setFemale] = useState(" ");
const [userName, setUserName] = useState(" ");
const [password, setPassword] = useState(" ")

    

  const register = {firstName, secondName, lastName, phoneNumber, address ,male ,female, userName, password};

      const Save = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/register/adding ', register)
        alert ("data added successfully")

      }
    return (
        <><h3>WELCOM TO THE PRISON REGISTRATION SYSTEM</h3>
        <div className="container">
            <h4>Register Here!</h4>
            <form>
                <div className="inputBox">
                    <input type="text"
                    placeholder="First Name"
                    id='validation'
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="inputBox">
                    <input type="text"
                    placeholder="Second Name"id='validation'
                    required
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}/>
                </div>
                <div className="inputBox">
                    <input type="text"
                    placeholder="Last Name"
                    id='validation'
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="inputBox">
                    <input type="email"
                    placeholder="Email" id='validation'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="inputBox">
                    <input type="address"
                    placeholder="Address" id='validation'
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className="inputBox">
                    <input type="tell"
                    placeholder="Phone Number" id='validation'
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>
                <div className="radioButton"> 
                    <input type="radio" placeholder="Male" id='validation'
                    required
                    value={male}
                    onChange={(e) => setMale(e.target.value)}/>Male
                    <input type="radio" placeholder="Female" id='validation'
                    required
                    value={female}
                    onChange={(e) => setFemale(e.target.value)}/>Female  
                </div>
                <div className="inputBox">
                    <input type="text" placeholder="Username" id='validation'
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="inputBox">
                    <input type="password" placeholder="Password" id='validation'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="inputBox">
                    <input type="password" placeholder="Confirm your Password" />
                </div>
                <div className="inputBox">
                    <Link to={"/policeOfficerForm"}>
                        <input type="submit" value={Submit} onClick={Save} id="Submit" />
                    </Link>
                    <div className="inputBox">
                        <Link to={"/policeOfficerForm"}>
                    <input type="submit" value={Login} id="Login"/>
                        </Link>
                    </div>
                </div>
            </form>
        </div></>
    )
}

export default Registration;