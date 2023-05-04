/* eslint-disable react/prop-types */
import "./Chef.css";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

function Chef({ chefDetails }) {
  return (
    <div className="chef profile-area my-5">
      <h1 className="text-center mb-5">Our Chefs</h1>
      <div className="row mx-auto">
        {chefDetails.map((card, index) => (
          <div key={index} className="g-4 col-md-4">
            <div className="card">
              <div className="img1">
                <LazyLoad height={210}>
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80"
                    alt=""
                  />
                </LazyLoad>
              </div>
              <div className="img2">
                <LazyLoad height={150}>
                  <img src={card.img_url} alt="" />
                </LazyLoad>
              </div>
              <div className="main-text">
                <h2>{card.name}</h2>
                <p>Years of Experience: {card.chef_experience}</p>
                <p>Number of recipes: {card.no_of_recipes}</p>
                <p>Total Likes: {card.rating}</p>
                <p className="socials">
                  <Link to={`/details/${card.chef_id}`}>
                    <button className="btn btn-dark rounded-0">
                      View Recipes
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chef;
