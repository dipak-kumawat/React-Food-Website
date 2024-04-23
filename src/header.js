import { useState } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "./api.js";

function filterdata(searchText, restaurant) {
  const filteredData = restaurant.filter((restaurantItem) =>
    restaurantItem.info.name.includes(searchText)
  );

  return filteredData;
}

const Search = () => {
  const [restaurant, setRestaurant] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filteredData = filterdata(searchText, restaurant);
    setRestaurant(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        id="search-icon"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <h1>{searchText}</h1> {/* Display search text */}
      <button className="btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};


const Header = () => (
  <header>
    <a href="#" className="logo">
      <i className="fa-solid fa-utensils"></i>FoodHub
    </a>

    <div className="navbar">
      <Link className="active" to="/">
        home
      </Link>
      <a href="#dishes">dishes</a>
      <Link to="/about">about</Link>
      <a href="#menu">menu</a>
      <a href="#review">review</a>
      <a href="#order">order</a>
      <a href="/feedback/feedbackform1.html">Feedback</a>
    </div>

    <Search />
  </header>
);

export default Header;
