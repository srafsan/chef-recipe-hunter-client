import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Company Name
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, facilis! Quisquam ab tenetur aspernatur placeat.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </h5>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                The Providers
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                Creativity
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                About Us
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                Contact Us
              </Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Useful Links
            </h5>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                Your Account
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                Become an Affiliates
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                Shipping Rates
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                Help
              </Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Address
            </h5>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                Email
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                Phone
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                Phone2
              </Link>
            </p>
          </div>

          <hr className="mb-4" />

          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p>
                Copyright c2023. All rights reserved by:
                <strong className="text-warning"> Rafsan</strong>
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-end">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">f</li>
                  <li className="list-inline-item">c</li>
                  <li className="list-inline-item">o</li>
                  <li className="list-inline-item">g</li>
                  <li className="list-inline-item">k</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
