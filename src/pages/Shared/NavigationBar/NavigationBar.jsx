import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <Navbar
      expand="lg"
      style={{ padding: "15px 0" }}
      className="navbar-dark bg-dark"
    >
      <Container>
        <Navbar.Brand>
          <strong className="fs-3">RCafe</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto gap-4 text-center my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="text-decoration-none text-white" to="/">
              Home
            </NavLink>
            <NavLink className="text-decoration-none text-white" to="/blog">
              Blog
            </NavLink>
            <NavLink className="text-decoration-none text-white" to="/help">
              Help Center
            </NavLink>
            {/* <div>{user && <FaUserCircle style={{ fontSize: "2rem" }} />}</div> */}
          </Nav>
        </Navbar.Collapse>
        <div>
          {user?.photoURL && user?.email && (
            <img
              src={user?.photoURL}
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              alt=""
            />
          )}
          {user ? (
            <button className="btn btn-light" onClick={handleLogOut}>
              Logout
            </button>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-light">Login</button>
            </NavLink>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
