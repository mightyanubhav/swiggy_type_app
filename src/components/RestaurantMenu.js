import { useEffect, useState } from "react";
import { ITEM_URL, ITEM_URL2, ITEM_URL3 } from "../utils/Constant";
import getData from "./RandomFood";
import Shimmer from "./Shimmer";

// https://www.swiggy.com/city/patna/pizza-hut-kankar-bagh-kankarbagh-rest725082
const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);


    const fetchData = async (url, setData) => {
        try {
            const list = await getData(url);
            setData(list);
            console.log(list);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };
    
    useEffect(() => {
        fetchData(ITEM_URL, setResInfo);
        fetchData(ITEM_URL2, setResInfo);
        fetchData(ITEM_URL3, setResInfo);
    }, [ITEM_URL, ITEM_URL2, ITEM_URL3, setResInfo]);

    return resInfo === null ?  (<Shimmer />) : 
     (
        <div className="restaurant-menu">
            <h1>This is header</h1>
            <h2>This is restaurant menu card</h2>
            <h3>{resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.vegOnlyDetails?.description}</h3>
        </div>
    );
}
export default RestaurantMenu;