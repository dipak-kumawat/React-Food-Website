import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [restaurant, setRestaurant] = useState(restaurantList);
  const [searchText, setSearchText] = useState("kfc");
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
      <h1>{searchClicked}</h1>
      <button
        className="btn"
        onClick={() => {
          filterdata();
        }}>
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
