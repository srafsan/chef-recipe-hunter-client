/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import "./Login.css";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { signIn, signInGoogle, signInGithub } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        console.log(from);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogle = () => {
    signInGoogle().then((result) => {
      const loggedUres = result.user;
      console.log(loggedUres);
    });
  };

  const handleGithub = () => {
    signInGithub();
  };

  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login rounded">
        <h2 className="fw-bold">Login Form</h2>
        <form onSubmit={handleLogin}>
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
          <div className="form-group mb-2">
            Already Have an Account?{" "}
            <Link to="/login" className="text-danger">
              Login
            </Link>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-2">
            SIGN IN
          </button>
          <hr />
          <p className="mb-2 text-center">Or continue with</p>
          <div className="d-flex justify-content-center">
            <button
              onClick={handleGoogle}
              type="submit"
              className="btn btn-outline-dark mt-2 me-2 rounded-4"
            >
              <FcGoogle />
            </button>
            <button
              onClick={handleGithub}
              type="submit"
              className="btn btn-outline-dark mt-2 rounded-4"
            >
              <FaGithub />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
