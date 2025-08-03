import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState, useEffect, useContext } from "react";
import UserContex from "../utils/UserContex";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardOpen = withOpenedLabel(RestaurantCard);
  const { setUserName, loggedInUser } = useContext(UserContex);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (e) {
      console.error("Failed to fetch restaurants:", e);
    }
  };

  if (!onlineStatus) {
    return (
      <div className="flex justify-center mt-12">
        <div className="bg-red-50 border border-red-300 text-red-700 px-6 py-4 rounded-md shadow-sm max-w-lg">
          <p className="text-center font-semibold">
            ⚠️ Looks like you are offline! Please check your internet
            connection.
          </p>
        </div>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-4 sm:px-8 md:px-16 lg:px-24 py-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        {/* Left: Search + Filters */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Search Restaurants"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              aria-label="Search restaurants"
            />
            {searchText && (
              <button
                aria-label="Clear search"
                onClick={() => {
                  setSearchText("");
                  setFilteredRestaurants(listOfRestaurants);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </div>
          <button
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
            className="shrink-0 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Search
          </button>

          <button
            className="shrink-0 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating >= 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>

        {/* Right: Online status + user */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span
              className={`inline-block w-3 h-3 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
              aria-label={onlineStatus ? "Online" : "Offline"}
            />
            <span className="font-medium text-gray-700">
              {onlineStatus ? "Online" : "Offline"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Username"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Restaurant grid */}
      <div className="res-containers grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="group"
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
