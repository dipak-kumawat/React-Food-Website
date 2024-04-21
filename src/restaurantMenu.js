
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, [id]); // Run the effect whenever `id` changes

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${id}`
      );
      const json = await data.json();
      console.log(json);
      setRestaurant(json);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  return (
    <div className="resturant-name">
      <h1>Restaurant id: {id}</h1>
      {restaurant && (
        <>
          <h2>Restaurant name: {restaurant.name}</h2>
          {/* Render other restaurant info here */}
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
