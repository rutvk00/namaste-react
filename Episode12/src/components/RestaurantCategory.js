import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, onToggle }) => {
  return (
    <div className="mb-8">
      {/* Header with chevron */}
      <div
        className="flex justify-between items-center border-b pb-2 mb-4 cursor-pointer select-none"
        onClick={onToggle}
      >
        <h2 className="text-xl font-semibold text-gray-800">
          {data.title} ({data.itemCards.length})
        </h2>
        <span
          className={`text-gray-600 text-xl transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ⌄
        </span>
      </div>

      {/* Body */}
      {isOpen && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
