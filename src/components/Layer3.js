import { useEffect, useState } from "react";
import Card from "./Card";
import getData from "./RandomFood";
import Shimmer from "./Shimmer";
import { url2 } from "../utils/Constant";

const Layer3 = ({ data }) => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [log, setLog] = useState("login");
    const [searchText, setSearchText] = useState("");

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

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="layer3">
            <div className="layer3-top">
                Restaurants with online food delivery in Jamshedpur
            </div>
            <div className="layer3-options">
                <button
                    className="layer3-filter-btn"
                    onClick={() => {
                        const filter = listOfRestaurant.filter(
                            (x) => x.info.avgRating > 4.2
                        );
                        setListOfRestaurant(filter);
                    }}
                >
                    filter
                </button>
                <button
                    className="layer3-filter-btn"
                    onClick={() => {
                        log === "login" ? setLog("log-out") : setLog("login");
                    }}
                >
                    {" "}
                    {log}{" "}
                </button>

                <div className="search-bar">
                    <input
                        type="text"
                        className="input-box"
                        placeholder="Search restaurant"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="layer3-filter-btn"
                        onClick={() => {
                            console.log(searchText);
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="layer3-cards">
                {listOfRestaurant.map((x) => (
                    <Card
                        key={x.info.id}
                        name={x.info.name}
                        image={x.info.cloudinaryImageId}
                        area={x.info.areaName}
                        rating={x.info.avgRating}
                        time={x.info.sla.slaString}
                        menu={x.info.cuisines}
                        items={x.info.aggregatedDiscountInfoV3}
                    />
                ))}
            </div>
        </div>
    );
};
export default Layer3;
