import { ITEM_URL } from "../utils/Constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuInfo from "../utils/useRestaurantMenuInfo";

const RestaurantMenu = () => {
 
  const { resId } = useParams();
  const resInfo = useRestaurantMenuInfo(ITEM_URL, resId);

  const name = resInfo?.data?.cards?.[0]?.card?.card?.text || "Restaurant Name";
  const values = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <h1>This is header</h1>
      <h3>{name}</h3>
      <div className="menu-items">
        {values?.map((item, index) => (
          <div key={index} className="menu-item">
            <h4>{item?.card?.info?.name}</h4>
            <p>{item?.card?.info?.description}</p>
            <p>Price: {item?.card?.info?.defaultPrice || "N/A"}</p>
          </div>
        ))}
        <h4>If the data is not coming properly , that means API configuration has been changed</h4>
      </div>
    </div>
  );
};

export default RestaurantMenu;
