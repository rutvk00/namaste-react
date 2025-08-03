import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContex from "../utils/UserContex";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContex);
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} alt="Logo" />
      </div>

      <nav className="nav-items">
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          <li className="text-sm sm:text-base">
            Online Status: <span>{onlineStatus ? "✅" : "🔴"}</span>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Cart
            </Link>
          </li>
          <li>
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-all duration-200"
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
          <li className="bg-green-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-all duration-200">
            {loggedInUser}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
