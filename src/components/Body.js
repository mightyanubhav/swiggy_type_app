import Data_Offline from "../utils/Data";
import Data from "./RandomFood";

import Layer1 from "./Layer1";
import Layer2 from "./Layer2";

let  Body = () =>{
    // console.log("happy");
    // console.log(Data_Offline?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    let data_layer_1 = Data_Offline?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    
    return(
        <div className="body">
            <div className="body-container">
                <Layer1 data = {data_layer_1} />
                <div className="line"></div>
                <Layer2 />
                
                <div className="main-container"></div>
            </div>
        </div>
    );
}
export default Body;