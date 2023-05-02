import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">RCafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto text-center my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="text-decoration-none" to="/">
              Home
            </NavLink>
            <NavLink className="text-decoration-none mx-5" to="/blog">
              Blog
            </NavLink>
            <div>{user && <FaUserCircle style={{ fontSize: "2rem" }} />}</div>
          </Nav>
        </Navbar.Collapse>
        {user ? (
          <Button onClick={handleLogOut} variant="secondary">
            Logout
          </Button>
        ) : (
          <NavLink to="/login">
            <Button variant="secondary">Login</Button>
          </NavLink>
        )}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
