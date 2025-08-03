import { useState , useEffect } from "react";
import { MENU_URL } from "../utils/constants";



const useRestaurantMenu     = (resID) => {

    const [resInfo , setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        console.log("url : " , MENU_URL+resID)
        const data = await fetch(MENU_URL+resID);

        const json = await data.json();
        // console.log("Menu data : " , json)
        // console.log("Rest Menu : " , json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.categories[0])
        setResInfo(json.data);  
    };
    return resInfo
}

export default useRestaurantMenu ;