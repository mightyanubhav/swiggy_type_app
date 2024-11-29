import ItemList from "./ItemList";


const RestaurantCategory = ({data , selectIndex, showItems}) =>{
   
    const handleClick =() =>{  
        
        selectIndex();
    }
    return (
        <div className="rest-container">
            <div className="rest-category">
                    <div className="rest-inside" onClick={handleClick}>
                        <span className="rest-category-head">{data.title} ({data.itemCards.length})</span>
                        <span className="rest-category-head">{"🔽"}</span>
                    </div>
                    {showItems && <ItemList items={data.itemCards}/>}
            </div>
            
        </div>
    );
}
export default RestaurantCategory;