import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;

  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
  } = info;

  return (
    <div className="bg-gray-100 hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden p-4">
      <img
        className="w-full h-48 object-cover rounded-md mb-4"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
      <h4 className="text-sm text-gray-600 mb-1 truncate">{cuisines.join(", ")}</h4>
      <div className="flex justify-between text-sm text-gray-700">
        <span>⭐ {avgRating}</span>
        <span>{sla?.deliveryTime} min</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
