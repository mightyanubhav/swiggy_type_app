const ItemList = ({items}) =>{
    console.log(items)
    return (
       <div className="item-list">
        {items.map((item)=>(
            <div key={item.card.info.id}>
                <div>
                    <span>✦ {item.card.info.name}</span>
                    <span>{"  @  "}</span>
                    <span>{item.card.info.price / 100}</span>
                    <button className="add-item-button"> Add </button>
                </div>
                <p  className="item-list-text">{item.card.info.description}</p>
            </div>
        ))}
       </div>
    );
}
export default ItemList;