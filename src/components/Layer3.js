import { useEffect, useState } from "react";
import Card from "./Card";
import getData from "./RandomFood";
import Shimmer from "./Shimmer";
const Layer3 = ({ data }) => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    const url2 = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.80570&lng=86.18040&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const list = await getData(url2);
            setListOfRestaurant(data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    //conditional rendering
    // let log = "login";
    const [log, setLog] = useState("login")
    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="layer3">
            <div className="layer3-top">
                Restaurants with online food delivery in Jamshedpur
            </div>
            <div className="layer3-options">
                <button className="layer3-filter-btn" onClick={
                    () => {
                        const filter = listOfRestaurant.filter(
                            (x) => x.info.avgRating > 4.2
                        )
                        setListOfRestaurant(filter);
                    }
                }>filter</button>
                 <button className="layer3-filter-btn" onClick={()=>{
                    log === "login" ? setLog("log-out") : setLog("login");
                 }}> {log} </button>
            </div>
            <div className="layer3-cards">
                {
                    listOfRestaurant.map((x) => (
                        <Card key={x.info.id} name={x.info.name} image={x.info.cloudinaryImageId} area={x.info.areaName} rating={x.info.avgRating} time={x.info.sla.slaString} menu={x.info.cuisines} items={x.info.aggregatedDiscountInfoV3} />
                    ))
                }
            </div>

        </div>
    );
}
export default Layer3;