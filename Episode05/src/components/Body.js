import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-containers'>
               {
                resList.map(restaurant => 
                (<RestaurantCard key = {restaurant.id} resData={restaurant}/>))
               }
            </div>
        </div>
    )
};

export default Body;