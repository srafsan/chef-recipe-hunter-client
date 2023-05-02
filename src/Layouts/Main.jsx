import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { Container } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Container>
        <NavigationBar />
      </Container>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
