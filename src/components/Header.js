import swiggyLogo from "../utils/swiggyLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <div className="in-header">
                <div className="in-in-header">
                    <div className="logo-holder">
                        <img className="logo" src={swiggyLogo} alt="Swiggy Logo" />
                    </div>
                    <div className="other">
                        <div className="button">
                            <h5>Other</h5>
                            <div className="underline"></div>
                        </div>
                        <FontAwesomeIcon
                            className="icon"
                            style={{ color: "#FF5200" }}
                            icon={faAngleDown}
                        />
                    </div>

                    <div className="space"></div>

                    <div className="nav-items">
                        <div className="nav-content">
                            <FontAwesomeIcon className="icon" icon={faBriefcase} />
                            <Link to="/corporate" className="custom-link"> Swiggy Corporate </Link>
                            
                        </div>
                        <div className="nav-content">
                            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                            <Link to="/search" className="custom-link"> Search </Link>
                        </div>
                        <div className="nav-content">
                            <FontAwesomeIcon className="icon" icon={faPercent} />
                            <Link to="/offers" className="custom-link"> Offers </Link>
                        </div>
                        <div className="nav-content">
                            <FontAwesomeIcon className="icon" icon={faCircleInfo} />
                            <Link to="/help" className="custom-link"> Help </Link>
                        </div>
                        <div className="nav-content">
                            <FontAwesomeIcon className="icon" icon={faUser} />
                            <Link to="/sign-in" className="custom-link"> Sign in </Link>
                        </div>
                        <div className="nav-content">
                            <FontAwesomeIcon className="icon" icon={faCartShopping} />
                            <Link to="/cart" className="custom-link"> Cart </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
