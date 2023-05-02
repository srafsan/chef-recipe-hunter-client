import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">RCafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto text-center my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="text-decoration-none" to="/">
              Home
            </Link>
            <Link className="text-decoration-none mx-5" to="/blog">
              Blog
            </Link>
            <div>{user && <FaUserCircle style={{ fontSize: "2rem" }} />}</div>
          </Nav>
        </Navbar.Collapse>
        <Link to="/login" className="btn btn-warning">
          Login
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
