/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Chef({ chefDetails }) {
  return (
    <div className="row container mx-auto my-5">
      <h1 className="text-center mb-5">Our Chefs</h1>
      {chefDetails.map((card, index) => (
        <div className="col-sm-6 col-md-4 mb-4" key={index}>
          <Card style={{ width: "350px" }}>
            <Card.Img
              className="img-fluid"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              variant="top"
              src={card.img_url}
            />
            <Card.Body>
              <Card.Title>Chef&apos;s Name: {card.name}</Card.Title>
              <Card.Text>Years of experience: {card.experience}</Card.Text>
              <Card.Text>Number of recipes: {card.recipes}</Card.Text>
              <Link to="details">
                <Button variant="primary">View Recipes</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Chef;
