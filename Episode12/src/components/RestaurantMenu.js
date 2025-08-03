import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const [openIndex, setOpenIndex] = useState(null);

  const resInfo = useRestaurantMenu(resID);
  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
    ?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
      <p className="text-gray-600 text-md mb-6">
        {cuisines?.join(", ")} • {costForTwoMessage}
      </p>

      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title || index}
          data={category?.card?.card}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
