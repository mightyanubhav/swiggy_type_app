import ItemList from "./ItemList";

const RestaurantCategory = ({data}) =>{
    // console.log(data);
    return (
        <div className="rest-container">
            <div className="rest-category">
                    <span className="rest-category-head">{data.title} ({data.itemCards.length})</span>
                    <span className="rest-category-head">{"🔽"}</span>
            </div>
            <ItemList items={data.itemCards}/>
        </div>
    );
}
export default RestaurantCategory;