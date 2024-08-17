import React, {useState , useEffect} from "react";
import "./Navbar.css";
import defaltProfileImage from "./profile.png"
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";
import home from "./icons/home.png"
import calander from "./icons/calander.png"
import signup from "./icons/signup.png"
import login from "./icons/login.png"
import logout from "./icons/logout.png"




function Navbar() {
  const [User, setUser] = useState("");

  const Logout = () => {
    localStorage.clear();
    toast.success("Logged out successfully");

    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  const Login = () => {
    window.location.href = "/login";
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      setUser(currentUser);
    }

    console.log(currentUser);
  }, []);

  return (
    <div>
      <div className="nav-bar-container">
        <div className="profile-container">
          <img
            src={User ? User.profilePhoto : defaltProfileImage}
            alt="profile-image"
            className="profile-image"
          />

          <p className="user-name">{User ? User.fullName : "No User"}</p>
        </div>

        <ul type="none" className="list-container">
          <Link to="/">
            <li className="list">Home</li>
          </Link>

          <Link to="/bmi-calculator">
            <li className="list">Calander</li>
          </Link>

          <Link to="/signup">
            <li className="list">Signup</li>
          </Link>

          <li className="list">
            {User ? 
            (
              <li onClick={Logout} className="L-btn">
                Logout
              </li>
            ) 

            
            :
            (
              <li onClick={Login} className="L-btn">
                Login
              </li>
            )}
          </li>
        </ul>

        <ul type="none" className="mobile-menu-container">
          <Link to="/">
            <li className="list"><img className="item-logo" src={home} /></li>
          </Link>

          <Link to="/calander">
          <li className="list"><img className="item-logo" src={calander} /></li>
          </Link>

          <Link to="/signup">
            <li className="list"><img className="item-logo" src={signup} /></li>
          </Link>

          <li className="list">
            {User ? 
            (
              <li onClick={Logout} className="L-btn">
                <img className="item-logo" src={logout} />
              </li>
            ) 

            
            :
            (
              <li onClick={Login} className="L-btn">
                <img className="item-logo" src={login} />
              </li>
            )}
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;
