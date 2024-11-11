
async function getData(url){
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // let data_layer_2 = data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants;
        return data;

    }catch(err){
        console.log(err);
        return "";
    }
    
}
const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.14860&lng=85.89730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// getData(url);

export default getData;
