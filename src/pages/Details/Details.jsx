import { Container } from "react-bootstrap";
import DetailsRecipeList from "../DetailsRecipeList/DetailsRecipeList";
import { useLoaderData } from "react-router-dom";

import Pdf from "react-to-pdf";
import React from "react";
const ref = React.createRef();

const Details = () => {
  const chefDetails = useLoaderData();

  return (
    <div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>

      <Container ref={ref} className="mt-5">
        <div className="mx-auto d-flex gap-4 justify-content-center">
          <div className="me-3">
            <img
              className="rounded-4"
              style={{ width: "350px" }}
              src={chefDetails.img_url}
              alt=""
            />
          </div>
          <div>
            <h4 className="pb-2">Name: {chefDetails.name}</h4>
            <h4 className="pb-2">Experience: {chefDetails.chef_experience}</h4>
            <h4 className="pb-2">Recipes: {chefDetails.no_of_recipes}</h4>
            <h4 className="pb-5">Likes: {chefDetails.rating}</h4>
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
    </div>
  );
};

export default Details;
