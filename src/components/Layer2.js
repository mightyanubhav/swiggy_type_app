import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const Layer2 = () =>{
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
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                {data.map((x) => (
                    <Tiles key={x.id} id = {x.id} image = {x.imageId} />
                ))}

            </div>
        </div>
    );
}

export default Layer2;