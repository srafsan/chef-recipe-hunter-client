import { FaQuoteLeft } from "react-icons/fa";

import "./ReviewSliders.css";

const ReviewsSilders = () => {
  return (
    <section>
      <div className="container">
        <div className="testimonials">
          <div
            id="carouselExampleControls"
            className="carousel slide shadow p-3 mb-5 bg-white rounded"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* One */}
              <div className="carousel-item active">
                <div className="single-item">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="profile">
                        <div className="img-area">
                          <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""
                          />
                        </div>
                        <div className="bio">
                          <h2>Hailey Jr</h2>
                          <h4>Web Developer</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="content">
                        <p>
                          <span>
                            <FaQuoteLeft />
                          </span>
                          The Service was excellent!!
                        </p>
                        <p className="socials"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Two */}
              <div className="carousel-item">
                <div className="single-item">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="profile">
                        <div className="img-area">
                          <img
                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""
                          />
                        </div>
                        <div className="bio">
                          <h2>Dave Wood</h2>
                          <h4>Graphics designer</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="content">
                        <p>
                          <span>
                            <FaQuoteLeft />
                          </span>
                          I liked the service very much. I will recommend this
                          platform to my friends and family.
                        </p>
                        <p className="socials"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Three */}
              <div className="carousel-item">
                <div className="single-item">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="profile">
                        <div className="img-area">
                          <img
                            src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""
                          />
                        </div>
                        <div className="bio">
                          <h2>James Bond</h2>
                          <h4>Actor</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="content">
                        <p>
                          <span>
                            <FaQuoteLeft />
                          </span>
                          The chef was good. I found the chef of my choice very
                          easily. Highly recommended.
                        </p>
                        <p className="socials"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSilders;
