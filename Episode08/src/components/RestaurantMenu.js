import { useEffect , useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resID} = useParams();
    console.log("resId : ", resID )
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