import { ITEM_URL } from "../utils/Constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuInfo from "../utils/useRestaurantMenuInfo";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
 
  const { resId } = useParams();
  const resInfo = useRestaurantMenuInfo(ITEM_URL, resId);
  

  const name = resInfo?.data?.cards?.[0]?.card?.card?.text || "Restaurant Name";
  const values = resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards ||
  resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
  

  const printArray = resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
   resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []

   const filteredList = printArray.filter( c =>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   )
  //  console.log(filteredList);
   
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-menu-inside">
        <h2>{name}</h2>
      
      </div>
      <div className="menu-items">
        {
          filteredList.map((x, idx)=>(
            <RestaurantCategory key ={idx} data={x?.card?.card}/>
          ))
        }
        <h4>If the data is not coming properly , that means API configuration has been changed</h4>
      </div>
    </div>
  );
};

export default RestaurantMenu;
