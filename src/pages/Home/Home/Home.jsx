import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import PopularRecipes from "../PopularRecipes/PopularRecipes";
import Reviews from "../Reviews/Reviews/Reviews";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Home = () => {
  const chefDetails = useLoaderData();
  const { reload, setReload } = useContext(AuthContext);

  if (reload) {
    setReload(false);
    location.reload();
  }

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
