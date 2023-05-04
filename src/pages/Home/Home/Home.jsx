import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import PopularRecipes from "../PopularRecipes/PopularRecipes";
import Reviews from "../Reviews/Reviews/Reviews";

const Home = () => {
  const chefDetails = useLoaderData();

  return (
    <div>
      <Banner />
      <Chef chefDetails={chefDetails} />
      <PopularRecipes />
      <Reviews />
    </div>
  );
};

export default Home;
