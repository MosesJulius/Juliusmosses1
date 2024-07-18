import { Link } from "react-router-dom";
import Header from "../component/Header";

const adminLogin = () => {
    let Login = "Login"
    return (
        <><div className="HomeHead">
            <Header />
        </div><div className="policeOfficer">
                <div className="Container">
                    <h2>Sign In!</h2>
                    <span className="LoginSigin">Admin</span>
                    <form>
                        <div className="inputBox">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="inputBox">
                            <Link to="/home">
                                <input type="submit" value={Login} id="login" />
                            </Link>
                        </div>
                    </form>
                </div>
            </div></>
    );
};

export default adminLogin;