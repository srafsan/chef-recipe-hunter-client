import { Container } from "react-bootstrap";
import DetailsRecipeList from "../DetailsRecipeList/DetailsRecipeList";
import { useLoaderData } from "react-router-dom";

import Pdf from "react-to-pdf";
import React from "react";
const ref = React.createRef();

const Details = () => {
  const chefDetails = useLoaderData();
  const chefRecipes = chefDetails.recipes;

  return (
    <div>
      <Container ref={ref} className="mt-5 w-75">
        <div className="mx-auto d-flex flex-column flex-md-row gap-4 justify-content-center">
          <div className="me-3">
            <img
              className="rounded-4 my-0"
              style={{ width: "100%", height: "80%" }}
              src={chefDetails.img_url}
              alt=""
            />
          </div>
          <div className="my-4">
            <h3 className="pb-2 fw-bold text-uppercase">
              Name: {chefDetails.name}
            </h3>
            <h3 className="pb-2 fw-bold text-uppercase">
              Experience: {chefDetails.chef_experience}
            </h3>
            <h3 className="pb-2 fw-bold text-uppercase">
              Recipes: {chefDetails.no_of_recipes}
            </h3>
            <h3 className="pb-5 fw-bold text-uppercase">
              Likes: {chefDetails.rating}
            </h3>
            <h3 className="pb-2 fw-bold text-uppercase">Bio</h3>
            <p>{chefDetails.bio}</p>
          </div>
        </div>

        <hr />

        <h1
          className="text-center fw-bold text-uppercase"
          style={{ marginTop: "30px", marginBottom: "50px" }}
        >
          The Recipes
        </h1>
        <div className="row row-cols-1 row-cols-md-3 mx-auto w-100">
          {chefRecipes.map((chefRecipe, index) => {
            return (
              <div key={index} className="col">
                <DetailsRecipeList chefRecipe={chefRecipe} />
              </div>
            );
          })}
        </div>
      </Container>
      <div className="my-3 text-center">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn btn-dark rounded-0 p-4" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>
    </div>
  );
};

export default Details;
