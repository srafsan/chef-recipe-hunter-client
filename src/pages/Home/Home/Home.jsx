import BannerSecond from "../../BannerSecond/BannerSecond";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import PopularRecipes from "../PopularRecipes/PopularRecipes";

const Home = () => {
  return (
    <div>
      <Banner />
      <Chef />
      <PopularRecipes />
      <BannerSecond />
    </div>
  );
};

export default Home;
