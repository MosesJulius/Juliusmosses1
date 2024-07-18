import { Link} from "react-router-dom";
import Header from "../component/Header";
const wardenLogin = () => {
    let Login = "Login";
    return (
        <><div className="HomeHead">
            <Header />
        </div><div className="PoliceOfficer">
                <div className="Container">
                    <h2>Sign In!</h2>
                    <span className="LoginSignin">Warden</span>
                    <form>
                        <div className="inputBox">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="inputBox">
                            <Link to="/wardenHome">
                                <input type="submit" value={Login} id="login" />
                            </Link>
                        </div>
                    </form>
                </div>
            </div></>
    );
};

export default wardenLogin;
