
let Data = "";


async function getData(url){
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        Data = data;
        console.log(data);

        console.log(data?.data?.cards[0]?.card?.gridElements?.infoWithStyle?.info[0]);
    }catch(err){
        console.log(err);
    }
    
}
const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.14860&lng=85.89730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// getData(url);
const url2 = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.80570&lng=86.18040&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export default Data;
