import { Container } from "react-bootstrap";
import DetailsRecipeList from "../DetailsRecipeList/DetailsRecipeList";

const Details = () => {
  const chefDetails = {
    name: "Chef-1",
    experience: 4,
    recipes: 5,
    likes: 514,
    imageUrl:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper. Aenean sed adipiscing diam donec adipiscing tristique risus. Nulla pellentesque dignissim enim sit amet venenatis. Libero volutpat sed cras ornare arcu dui vivamus. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Mattis molestie a iaculis at erat pellentesque. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam vel quam elementum pulvinar. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper. Aenean sed adipiscing diam donec adipiscing tristique risus. Nulla pellentesque dignissim enim sit amet venenatis. Libero volutpat sed cras ornare arcu dui vivamus. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Mattis molestie a iaculis at erat pellentesque. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam vel quam elementum pulvinar. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.",
  };

  return (
    <Container className="mt-5">
      <div className="mx-auto d-flex gap-4 justify-content-center">
        <div className="me-3">
          <img
            className="rounded-4"
            style={{ width: "350px" }}
            src={chefDetails.imageUrl}
            alt=""
          />
        </div>
        <div>
          <h4 className="pb-2">Name: {chefDetails.name}</h4>
          <h4 className="pb-2">Experience: {chefDetails.experience}</h4>
          <h4 className="pb-2">Recipes: {chefDetails.recipes}</h4>
          <h4 className="pb-5">Likes: {chefDetails.likes}</h4>
          <h2 className="pb-2">Bio</h2>
          <p>{chefDetails.bio}</p>
        </div>
      </div>

      <hr />

      <h1
        className="text-center"
        style={{ marginTop: "60px", marginBottom: "50px" }}
      >
        The Recipes
      </h1>
      <div className="row row-cols-1 row-cols-md-4">
        <div className="col">
          <DetailsRecipeList />
        </div>
        <div className="col">
          <DetailsRecipeList />
        </div>
        <div className="col">
          <DetailsRecipeList />
        </div>
        <div className="col">
          <DetailsRecipeList />
        </div>
        <div className="col">
          <DetailsRecipeList />
        </div>
        <div className="col">
          <DetailsRecipeList />
        </div>
      </div>
    </Container>
  );
};

export default Details;
