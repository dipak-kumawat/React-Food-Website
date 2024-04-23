import {restaurantList, cloud_img} from "./api.js";



const Body = ({ image, name, costForTwo }) => {
  return (
    <div className="box">
      <img
        src={cloud_img + image}
        alt=""
      />
      <h3>{name}</h3>
      <span>{costForTwo}</span>
      <a href="#" className="btn">
        add to cart
      </a>
    </div>
  );
};

const Dish = () => {
  return (
    <section className="dishes" id="dishes">
      <h3 className="sub-heading">Our dishes</h3>
      <h1 className="heading">Popular dishes</h1>

      <div className="box-container">
        {restaurant.map((restaurantInfo, index) => (
          <Body
            key={index}
            image={restaurantInfo.info.cloudinaryImageId}
            name={restaurantInfo.info.name}
            costForTwo={restaurantInfo.info.costForTwo}
          />
        ))}
      </div>
    </section>
  );
};



export default Dish;
