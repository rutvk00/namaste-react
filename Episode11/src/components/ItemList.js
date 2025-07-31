import { CDN_URL } from "../utils/constants";

const formatPrice = (p) => {
  if (p == null) return "N/A";
  return `₹${(p / 100).toFixed(2)}`;
};

const ItemList = ({ items }) => {
  return (
    <div className="space-y-6">
      {items.map((item) => {
        const {
          id,
          name,
          price,
          defaultPrice,
          description,
          isVeg,
          imageId,
        } = item.card.info;

        return (
          <div
            key={id}
            className="flex flex-col sm:flex-row justify-between gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex-shrink-0 w-full sm:w-24 h-24 overflow-hidden rounded-md bg-gray-100">
              {imageId ? (
                <img
                  src={CDN_URL + imageId}
                  alt={name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                  No Image
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                {typeof isVeg !== "undefined" && (
                  <span
                    className={`w-3 h-3 rounded-full flex-shrink-0 border ${
                      isVeg
                        ? "border-green-600 bg-green-500"
                        : "border-red-600 bg-red-500"
                    }`}
                    aria-label={isVeg ? "Vegetarian" : "Non-Vegetarian"}
                  />
                )}
                <h3 className="text-md font-semibold text-gray-800 truncate">
                  {name}
                </h3>
              </div>
              {description && (
                <p
                  className="text-sm text-gray-500 mb-2"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {description}
                </p>
              )}
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-700 font-medium">
                  {formatPrice(price ?? defaultPrice)}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
                aria-label={`Add ${name} to cart`}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
