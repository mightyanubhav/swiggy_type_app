import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Tiles from "./Tiles";


const Layer1 = ({data}) =>{
    // console.log(data);
    return (
        <div className="mind-container">
                    <div className="mind-text">
                        <p className="min">What's on your mind ?</p>
                        <div className="mind-btn">
                            <div className="mind-button left">
                                <FontAwesomeIcon icon={faLeftLong} />
                            </div>
                            <div className="mind-button right">
                                <FontAwesomeIcon icon={faRightLong} />
                            </div>
                        </div>
                    </div>
                    <div className="mind-image">
                        {data.map((x) => (
                            // console.log(x.imageId);
                            <Tiles key={x.id} id = {x.id} image = {x.imageId} />
                        ))}
                        
                    </div>
                    
                    
        </div>
    );
}
export default Layer1;