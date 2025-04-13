import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

import { useState } from "react";


const Body = () => {

    const [listOfRestaurants , setListOfRestaurants] = useState(resList); 

    return (
        <div className='body'>
            <div className='filter'>
                <button
                 className="filter-btn"
                 onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.avgRating >= 4
                    );
                    console.log("filteredList : " , filteredList)
                    setListOfRestaurants(filteredList);
                 }}
                 >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-containers'>
               {
                listOfRestaurants.map(restaurant => 
                (<RestaurantCard key = {restaurant.id} resData={restaurant}/>))
               }
            </div>
        </div>
    )
};

export default Body;