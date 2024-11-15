import { useEffect, useState } from "react";
import { ITEM_URL, ITEM_URL2 } from "../utils/Constant";
import getData from "./RandomFood";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  console.log(resId);
  const fetchData = async (url) => {
    try {
      const list = await getData(`${url}/${resId}`);
      console.log(list);
      setResInfo(list);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData(ITEM_URL);
  }, []);

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
