import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { SWIGGY_URL } from "../utils/constants";

import { useState, useEffect } from "react";


const Body = () => {

    const [listOfRestaurants , setListOfRestaurants] = useState(resList); 
    useEffect(() =>{
        fetchData();
    } , []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    return (
        <div className='body'>
            <div className='filter'>
                <button
                 className="filter-btn"
                 onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating >= 4
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