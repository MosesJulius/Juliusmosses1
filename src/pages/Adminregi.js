import { Link } from "react-router-dom";


const AdminReg = function(){
    let Submit = "Submit"
    let Login = "Login"
    return (
        <><h3>WELCOM TO THE PRISON REGISTRATION SYSTEM</h3>
        <div className="container">
            <h4>Register Here!</h4>
            <form>
                <div className="inputBox">
                    <input type="text" placeholder="First Name" />
                </div>
                <div className="inputBox">
                    <input type="text" placeholder="Second Name" />
                </div>
                <div className="inputBox">
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className="inputBox">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="inputBox">
                    <input type="address" placeholder="Address" />
                </div>
                <div className="inputBox">
                    <input type="tell" placeholder="Phone Number" />
                </div>
                <div className="radioButton">
                    <input type="radio" placeholder="Male" />Male
                    <input type="radio" placeholder="Female" />Female
                </div>
                <div className="inputBox">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="inputBox">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="inputBox">
                    <input type="password" placeholder="Confirm your Password" />
                </div>
                <div className="inputBox">
                    <Link to={"/admin"}>
                        <input type="submit" value={Submit} id="Submit" />
                    </Link>
                </div>
                <div className="inputBox">
                    <Link to={"/admin"}>
                    <input type="submit" value={Login} id="Login"/>
                    </Link>
                </div>
            </form>
        </div></>
    );
};

export default AdminReg;