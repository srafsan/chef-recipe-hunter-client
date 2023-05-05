import { useContext, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import "./Registration.css";

const Registration = () => {
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);
  const [setEmail] = useState("");
  const [setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (error) {
      const errorTimer = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(errorTimer);
    }
  }, [error]);

  useEffect(() => {
    if (successMessage) {
      const successTimer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(successTimer);
    }
  }, [successMessage]);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setSuccessMessage("");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setSuccessMessage("");
    } else {
      createUser(email, password, photoURL, displayName)
        .then((result) => {
          const createdUser = result.user;
        })
        .catch((error) => {
          console.log(error);
        });
      form.reset();
      setSuccessMessage("Registration successful!");
      setError("");
      navigate("/");
    }
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
            <input
              type="name"
              name="name"
              id="name"
              className="form-control"
              required
            />
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
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              // value={confirmPassword}
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
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
        {error && <p className="text-danger">{error}</p>}
        {successMessage && <p className="text-success">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Registration;
