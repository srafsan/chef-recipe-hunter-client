import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <Container>
      <NavigationBar />
      <Outlet />
    </Container>
  );
};

export default Main;
