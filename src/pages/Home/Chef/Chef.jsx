/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { FaFacebookSquare } from "react-icons/fa";
import "./Chef.css";

function Chef({ chefDetails }) {
  return (
    <div className="chef profile-area  mx-auto my-5">
      <h1 className="text-center mb-5">Our Chefs</h1>
      <div className="row">
        {chefDetails.map((card, index) => (
          <div key={index} className="g-4 col-md-4">
            <div className="card">
              <div className="img1">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80"
                  alt=""
                />
              </div>
              <div className="img2">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80"
                  alt=""
                />
              </div>
              <div className="main-text">
                <h2>Person one</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                  odit saepe odio illo facere alias laborum in libero dolores
                  molestiae error reiciendis, qui mollitia consequatur est
                  incidunt eveniet veniam molestias.
                </p>
                <p className="socials">
                  <FaFacebookSquare />
                  <FaFacebookSquare />
                  <FaFacebookSquare />
                  <FaFacebookSquare />
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
