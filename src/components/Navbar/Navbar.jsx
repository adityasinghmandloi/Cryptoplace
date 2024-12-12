//import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  const currecyhandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
{/*         <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li> */}
      </ul>
      <div className="nav-right">
        <select onChange={currecyhandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>

        <ul>
          <ul>
            {isAuthenticated && (
              <li className="user-info">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="user-avatar"
                />
              </li>
            )}
          </ul>

          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out <img src={arrow_icon} alt="Arrow icon" />
            </button>
          ) : (
            <button onClick={loginWithRedirect}>
              Log In <img src={arrow_icon} alt="Arrow icon" />
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
