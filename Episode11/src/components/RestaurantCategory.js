import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="mb-8">
      {/* Header with arrow */}
      <div
        className="flex justify-between items-center border-b pb-2 mb-4 cursor-pointer select-none"
        onClick={handleClick}
      >
        <h2 className="text-xl font-semibold text-gray-800">
          {data.title} ({data.itemCards.length})
        </h2>
        <span
          className={`text-gray-600 transform transition-transform duration-300 ${
            showItems ? "rotate-180" : "rotate-0"
          }`}
        >
          ⌄
        </span>
      </div>

      {/* Body */}
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
