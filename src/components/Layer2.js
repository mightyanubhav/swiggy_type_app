import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { Link } from "react-router-dom";

const Layer2 = ({data}) =>{
    
    return (
        <div className="chain-container">
            <div className="mind-text">
                        <p className="min">Top Restaurant chains in Patna</p>
                        <div className="mind-btn">
                            <div className="mind-button left">
                                <FontAwesomeIcon icon={faLeftLong} />
                            </div>
                            <div className="mind-button right">
                                <FontAwesomeIcon icon={faRightLong} />
                            </div>
                        </div>
            </div>
            <div className="card-container1">
                
                {
                    data.map((x) => (
                        <Link className="links" key={x.info.id} to={"/restaurant/" + x.info.id}>
                            <Card  name = {x.info.name} image = {x.info.cloudinaryImageId} area = {x.info.areaName} rating = {x.info.avgRating} time = {x.info.sla.slaString} menu = {x.info.cuisines} items = {x.info.aggregatedDiscountInfoV3}/>
                        </Link>
                    ))
                }
               

            </div>
        </div>
    );
}

export default Layer2;