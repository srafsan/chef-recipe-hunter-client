import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import "./Registration.css";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoURL, email, password);

    createUser(email, password, photoURL)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="register rounded">
        <h2 className="fw-bold">Registration Form</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group mb-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="name" name="name" id="name" className="form-control" />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="photo" className="form-label">
              Profile Picture
            </label>
            <input
              type="photo"
              name="photo"
              id="photo"
              className="form-control"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password" className="form-label">
              Password Address
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleAccepted}
              type="checkbox"
              name="accept"
              label={
                <>
                  Accept the <Link to="/terms">terms and conditions</Link>
                </>
              }
            />
          </Form.Group>
          <div className="form-group mb-2">
            Already Have an Account?{" "}
            <Link to="/login" className="text-danger">
              Login
            </Link>
          </div>
          <button
            disabled={!accepted}
            type="submit"
            className="btn btn-success w-100 mt-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
