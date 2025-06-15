import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";


const RestaurantMenu = () => {

    const {resID} = useParams();
    console.log("resId : ", resID );
    
    const resInfo = useRestaurantMenu(resID);

     // Guard clause: Show shimmer while data is loading
    if (resInfo == null) {
        return <Shimmer />;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info ;
    const regularCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card; 
    console.log("regularCards : ", regularCards)
    const itemCards = regularCards?.categories?.[0]?.itemCards || regularCards?.itemCards;
    console.log("itemCards :", itemCards)

    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.categories[0] ;
    // console.log(itemCards)
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(" ")} - {costForTwoMessage}</p>
    
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - {"Rs. "}
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;