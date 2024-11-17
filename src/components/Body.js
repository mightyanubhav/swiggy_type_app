import Data_Offline from "../utils/Data";
import useNetAcessData from "../utils/useNetAcessData";

import Layer1 from "./Layer1";
import Layer2 from "./Layer2";
import Layer3 from "./Layer3";
import Offline from "./Offline";

let  Body = () =>{
   
    // console.log(Data_Offline?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    let data_layer_1 = Data_Offline?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    let data_layer_2 = Data_Offline?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants;
    
    const onLine = useNetAcessData();

    return !onLine ?  <Offline /> : (
        <div className="body">
            <div className="body-container">
                <Layer1 data = {data_layer_1} />
                <div className="line"></div>
                <Layer2 data = {data_layer_2}/>
                <div className="line"></div>
                <Layer3 data = {data_layer_2}/>
            </div>
        </div>
    );
}
export default Body;