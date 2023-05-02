/* eslint-disable react/no-unescaped-entities */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Chef() {
  const cardData = [
    {
      name: "Chef-1",
      experience: 4,
      recipes: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80",
    },
    {
      name: "Chef-1",
      experience: 4,
      recipes: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80",
    },
    {
      name: "Chef-1",
      experience: 4,
      recipes: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80",
    },
    {
      name: "Chef-1",
      experience: 4,
      recipes: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80",
    },
    {
      name: "Chef-1",
      experience: 4,
      recipes: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80",
    },
    {
      name: "Chef-1",
      experience: 4,
      recipes: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80",
    },
  ];

  return (
    <div className="row container mx-auto my-5">
      <h1 className="text-center mb-5">Our Chefs</h1>
      {cardData.map((card, index) => (
        <div className="col-sm-6 col-md-4 mb-4" key={index}>
          <Card style={{ width: "350px" }}>
            <Card.Img
              className="img-fluid"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              variant="top"
              src={card.imageUrl}
            />
            <Card.Body>
              <Card.Title>Chef's Name: {card.name}</Card.Title>
              <Card.Text>Years of experience: {card.experience}</Card.Text>
              <Card.Text>Number of recipes: {card.recipes}</Card.Text>
              <Button variant="primary">View</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Chef;
