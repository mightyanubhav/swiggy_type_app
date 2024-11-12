
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


export default getData;
