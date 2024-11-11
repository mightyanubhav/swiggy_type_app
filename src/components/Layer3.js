import { useState } from "react";
import Card from "./Card";
const Layer3 = ({ data }) => {

    console.log(data);
    const [listOfRestaurant, setListOfRestaurant] = useState(data);
    // const [a, b] = useState(data);

    // const arr = useState(data);
    // const [c, d] = arr; it is array dstructuring
    return (
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