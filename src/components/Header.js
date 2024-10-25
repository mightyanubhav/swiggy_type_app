import swiggyLogo from "../utils/swiggyLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
                            <p>Swiggy Corporate</p>
                        </div>
                        <div className="nav-content">
                            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                            <p>Search</p>
                        </div>
                        <div className="nav-content">
                            <FontAwesomeIcon className="icon" icon={faPercent} />
                            <p>Offers</p>
                        </div>
                        <div className="nav-content">
                            <FontAwesomeIcon className="icon" icon={faCircleInfo} />
                            <p>Help</p>
                        </div>
                        <div className="nav-content">
                            <FontAwesomeIcon className="icon" icon={faUser} />
                            <p>Sign in</p>
                        </div>
                        <div className="nav-content">
                            <FontAwesomeIcon className="icon" icon={faCartShopping} />
                            <p>Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
