import { useLoaderData } from "react-router-dom";
import BannerSecond from "../../BannerSecond/BannerSecond";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import PopularRecipes from "../PopularRecipes/PopularRecipes";

const Home = () => {
  const chefDetails = useLoaderData();

  return (
    <div>
      <Banner />
      <Chef chefDetails={chefDetails} />
      <PopularRecipes />
      <BannerSecond />
    </div>
  );
};

export default Home;
