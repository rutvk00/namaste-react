import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resID } = useParams();
  console.log("resId : ", resID);

  const resInfo = useRestaurantMenu(resID);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const regularCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card
      ?.card;

  const itemCards =
    regularCards?.categories?.[0]?.itemCards || regularCards?.itemCards;

  return (
    <div className="menu max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
      <p className="text-gray-600 text-md mb-6">
        {cuisines?.join(", ")} • {costForTwoMessage}
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Menu</h2>
      <ul className="space-y-4">
        {itemCards?.map((item) => (
          <li
            key={item.card.info.id}
            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800">
                {item.card.info.name}
              </span>
              <span className="text-gray-600">
                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
