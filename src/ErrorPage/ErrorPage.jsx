/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white text-center">
        <h1 className="display-4">Oops!</h1>
        <p className="lead">
          We can't seem to find the page you're looking for.
        </p>
        <p>Maybe you typed in the wrong URL or followed a bad link.</p>
        <NavLink className="" to="/">
          <button className="btn btn-primary">Go Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
