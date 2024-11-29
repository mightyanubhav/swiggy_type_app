import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
const ItemList = ({items}) =>{
    
    const dispatch = useDispatch()
    const handleAddItem = () =>{
        dispatch(addItems("pizza"));
    }

    return (
       <div className="item-list">
        {items.map((item)=>(
            <div key={item.card.info.id}>
                <div>
                    <span>✦ {item.card.info.name}</span>
                    <span>{"  @  "}</span>
                    <span>{item.card.info.price / 100}</span>
                    <button className="add-item-button" onClick={handleAddItem}> Add </button>
                </div>
                <p  className="item-list-text">{item.card.info.description}</p>
            </div>
        ))}
       </div>
    );
}
export default ItemList;