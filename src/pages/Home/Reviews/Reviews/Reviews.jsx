import "./Reviews.css";
import ReviewsSilders from "../ReviewsSliders/ReviewsSilders";

const Reviews = () => {
  return (
    <div className="my-5">
      <h1 className="py-5 text-center text-uppercase fw-bold">
        Our Customer Reviews
      </h1>
      <ReviewsSilders />
    </div>
  );
};

export default Reviews;
