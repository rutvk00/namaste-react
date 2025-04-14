import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

import { useState, useEffect } from "react";


const Body = () => {

    const [listOfRestaurants , setListOfRestaurants] = useState([]); 
    useEffect(() =>{
        fetchData();
    } , []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // if(listOfRestaurants.length == 0){
    //     return <Shimmer />
    // }

    return listOfRestaurants.length == 0 ?  <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <button
                 className="filter-btn"
                 onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res?.info?.avgRating >= 4
                    );
                    // console.log("filteredList : " , filteredList)
                    setListOfRestaurants(filteredList);
                 }}
                 >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-containers'>
               {
                listOfRestaurants.map((restaurant) => 
                (<RestaurantCard key={restaurant.info.id}   resData={restaurant}/>))
               }
            </div>
        </div>
    )
};

export default Body;