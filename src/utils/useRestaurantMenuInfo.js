import { useEffect, useState } from "react";

const useRestaurantMenuInfo = (url, resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData(url, resId);
    }, [])

    async function fetchData(url, resId){
        const data = await fetch(`${url}/${resId}`);
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo;
}
export default useRestaurantMenuInfo;