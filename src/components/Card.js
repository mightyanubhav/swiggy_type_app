const Card = ({ name, image, area, rating, time, menu, items }) => {
    console.log(name);
    const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    console.log(items);
    const { header = "", subHeader = "", discountTag = "" } = items || {}; // Use default values if item is missing

    return (
        <div className="card">
            <div className="card-image">
                <img className="card-images" src={`${url}${image}`} alt="card" />
                <h1>{header + " " + subHeader}</h1>
            </div>
            <div className="card-data">
                <div className="restaurant-name">
                    <span>{name}</span>
                </div>
                <div className="rating-time">
                    <span className="rating-star">⭐</span>
                    <span className="rating-score">{rating}</span>
                    <span className="dot">•</span>
                    <span className="time">{time}</span>
                </div>
                <div className="tags">
                    <span>{menu.join(",")}</span>
                </div>
                <div className="location">
                    <span>{area}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;