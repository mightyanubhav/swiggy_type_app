import Card from "./Card";
const Layer3 = ({data}) => {
    return (
        <div className="layer3">
            <div className="layer3-top">
                Restaurants with online food delivery in Jamshedpur
            </div>
            <div className="layer3-options">
                <button className="layer3-filter-btn">filter</button>
            </div>
            <div className="layer3-cards">
                {
                    data.map((x) => (
                        <Card key={x.info.id} name = {x.info.name} image = {x.info.cloudinaryImageId} area = {x.info.areaName} rating = {x.info.avgRating} time = {x.info.sla.slaString} menu = {x.info.cuisines} items = {x.info.aggregatedDiscountInfoV3}/>
                    ))
                }
            </div>

        </div>
    );
}
export default Layer3;